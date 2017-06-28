package com.yundao.cloudlib.controller.admin;

import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.yundao.cloudlib.service.JdbcTemplateService;

/**
 * 
 * @ClassName: LoginController
 * @Description: 登入controller
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月30日 下午7:42:13
 */
@Controller
@RequestMapping("/admin")
public class LoginController extends BaseController {

	@Autowired
	private JdbcTemplateService jdbcTemplateService;
	/**
	 * 
	 * @Title: login
	 * @Description: 登入页面
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(Model model, String msg) {
		model.addAttribute("msg", msg);
		model.addAttribute("captchaId", UUID.randomUUID().toString());
		return prefix + "/common/login";
	}

	/**
	 * 
	 * @Title: login
	 * @Description: 页面登入
	 * @param request
	 * @param model
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(HttpServletRequest request, Model model) {
		String exception = (String) request.getAttribute("shiroLoginFailure");
		String msg = "";
		if (exception != null) {
			if (UnknownAccountException.class.getName().equals(exception)) {
				System.out.println("UnknownAccountException -- > 账号不存在：");
				msg = "账号不存在：";
			} else if (IncorrectCredentialsException.class.getName().equals(exception)) {
				System.out.println("IncorrectCredentialsException -- > 密码不正确：");
				msg = "密码不正确：";
			} else if ("kaptchaValidateFailed".equals(exception)) {
				System.out.println("kaptchaValidateFailed -- > 验证码错误");
				msg = "验证码错误";
			} else {
				msg = "else >> " + exception;
				System.out.println("else -- >" + exception);
			}
		}
		model.addAttribute("msg", msg);
		// 此方法不处理登录成功,由shiro进行处理.
		model.addAttribute("captchaId", UUID.randomUUID().toString());
		return prefix + "/common/login";
	}

	/**
	 * 
	 * @Title: logout
	 * @Description: 退出
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/logout")
	public String logout(Model model) {
		// 退出
		SecurityUtils.getSubject().logout();

		return login(model, "退出成功");
	}

}
