package com.yundao.cloudlib.controller.teacher;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yundao.cloudlib.bean.Teacher;

import framework.util.RequestUtil;

/**
 * 
 * @ClassName: IndexController
 * @Description: 教师平台的首页
 * @author: wf
 * @date: 2017年6月30日 下午2:05:03
 * @version 1.0
 */
@Controller("teacherIndexController")
@RequestMapping("/teacher")
public class IndexController extends BaseController {
	/**
	 * 
	 * @Title: index
	 * @Description: 首页
	 * @return
	 * @return: String
	 */
	@RequestMapping("/index")
	public String index() {
		Teacher teacher = new Teacher();
		teacher.setId(1L);
		teacher.setName("少时诵诗书");
		teacher.setSchoolId(5L);
		teacher.setSchoolName("温州第二高级中学");
		RequestUtil.setSessionAttr(TEACHER_SESSION, teacher);
		return "/teacher/common/index";
	}

	/**
	 * 
	 * @Title: logOut
	 * @Description: 退出
	 * @return
	 * @return: String
	 */
	@RequestMapping("/logOut")
	public String logOut() {
		RequestUtil.removeAttribute(TEACHER_SESSION);
		return "redirect:/search";
	}

	@RequestMapping("/top")
	public String top() {
		return "/teacher/common/top";
	}

	@RequestMapping("/print")
	public String print() {
		return "/teacher/common/print";
	}

	@RequestMapping("/left")
	public String left() {
		return "/teacher/common/left";
	}

	@RequestMapping("/swich")
	public String swich() {
		return "/teacher/common/swich";
	}
}
