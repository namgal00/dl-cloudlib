package com.yundao.cloudlib.controller.front;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.yundao.cloudlib.bean.Reader;
import com.yundao.cloudlib.bean.School;
import com.yundao.cloudlib.service.JdbcTemplateService;

import framework.mvc.Message;
import framework.mvc.StandardController;
import framework.util.RequestUtil;

/**
 * 
 * @ClassName: LoginController
 * @Description: 登入
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月14日 上午10:05:38
 */
@Controller("frontController")
public class LoginController extends BaseController {
	/**
	 * 当前页面
	 */
	public static final String DL_COOKIE_CURRENT_PATH = "dl_cookie_current_path";
	
	@Autowired
	private JdbcTemplateService jdbcTemplateService;

	/**
	 * 去到登录页面
	 * 
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(Model model,HttpServletRequest request) {
		//使用cookie来进行记录path
		List<School> list = jdbcTemplateService.findAllSchool();
		model.addAttribute("school", list);
		return "/front/common/login";
	}

	/**
	 * 
	 * @Title: login
	 * @Description: 登入
	 * @param request
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(HttpServletRequest request, Long schoolId, String barcode, String password, String path,Model model) {
		// TODO 这边先这样写不用一直登入
		if(barcode.equals("jjj")){
			return "redirect:/index";
		}
		Reader reader = jdbcTemplateService.findBySchoolIDAndBarcode(schoolId, barcode);

		// 这边还需要验证 读者是否过期，读者状态是否有效 读者的一些条件 具体可以问一下雪影姐
		if (reader == null) {
			model.addAttribute(StandardController.MESSAGE_PROMPT, Message.error("没有这个读者，请检查好学校和学号"));
			return login(model,request);
		} else {
			if (reader.getStatus() == 2) {
				model.addAttribute(StandardController.MESSAGE_PROMPT, Message.error("该读者处于验证状态，不能登录"));
				return login(model,request);
			} else if (reader.getStatus() == 3) {
				model.addAttribute(StandardController.MESSAGE_PROMPT, Message.error("该读者处于挂失状态，不能登录"));
				return login(model,request);
			} else if (reader.getStatus() == 4) {
				model.addAttribute(StandardController.MESSAGE_PROMPT, Message.error("该读者处于暂停状态，不能登录"));
				return login(model,request);
			} else if (reader.getStatus() == 5) {
				model.addAttribute(StandardController.MESSAGE_PROMPT, Message.error("该读者处于注销状态，不能登录"));
				return login(model,request);
			}
			if (reader.getPassword().equals(password)) {
				RequestUtil.setSessionAttr(SESSION_READER, reader);
				//path:是指在哪个页面选择登录的，如果不为空那就跳回去
				if(StringUtils.isNotBlank(path)){
					return redirect(path);
				}
				
				return "redirect:/index";
			} else {
				model.addAttribute(StandardController.MESSAGE_PROMPT, Message.error("密码错误"));
				return login(model,request);
			}
		}

	}
	
	/**
	 * 
	 * @Title: logout
	 * @Description: 退出登录
	 * @return
	 * @return: String
	 */
	@RequestMapping("/logout")
	public String logout(HttpServletRequest request){
		RequestUtil.removeAttribute(SESSION_READER);
		return redirect("/search/index");
	}

}
