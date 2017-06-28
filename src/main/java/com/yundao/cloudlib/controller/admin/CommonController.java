package com.yundao.cloudlib.controller.admin;

import java.io.IOException;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import framework.service.MyCaptchaService;
import framework.util.ResponseUtil;

/**
 * 
 * @ClassName: CommonController
 * @Description: 公共的controller
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月5日 下午3:58:53
 */
@Controller
@RequestMapping("/admin/common")
public class CommonController {

	@Autowired
	private MyCaptchaService myCaptchaService;

	/**
	 * 
	 * @Title: notFind
	 * @Description: 404页面
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/notFind")
	public String notFind() {
		return "404";
	}

	/**
	 * 
	 * @Title: captcha
	 * @Description: 获取图片验证码
	 * @param captchaId
	 * @param request
	 * @param response
	 * @param model
	 * @return: void
	 */
	@RequestMapping("/captcha")
	public void captcha(String captchaId, HttpServletRequest request, HttpServletResponse response, Model model) {

		if (StringUtils.isEmpty(captchaId)) {
			captchaId = request.getSession().getId();
		}

		ResponseUtil.setImage(response);

		ServletOutputStream servletOutputStream = null;
		try {
			servletOutputStream = response.getOutputStream();
			java.awt.image.BufferedImage bufferedimage = myCaptchaService.buildImage(captchaId);
			ImageIO.write(bufferedimage, "jpg", servletOutputStream);
			servletOutputStream.flush();
		} catch (IOException e) {
			e.printStackTrace();

		} finally {
			IOUtils.closeQuietly(servletOutputStream);
		}
	}

}
