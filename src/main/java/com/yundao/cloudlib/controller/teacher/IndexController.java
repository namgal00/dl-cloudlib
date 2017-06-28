package com.yundao.cloudlib.controller.teacher;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yundao.cloudlib.bean.Teacher;

import framework.util.RequestUtil;

/**
 * 
 * @ClassName: IndexController
 * @Description: 教师平台的首页
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月28日 下午9:31:23
 */
@Controller("teacherIndexController")
@RequestMapping("/teacher")
public class IndexController {

	public static final String teacherSessionId = "teacherSessionId";

	/**
	 * 
	 * @Title: index
	 * @Description: 教师模块的首页
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = { "", "/", "/index" })
	public String index() {
		// 先默认设置一个老师的账户到session中
		// 拦截器还没写
		Teacher teacher = new Teacher();
		teacher.setId(1L);
		teacher.setName("测试");
		teacher.setSchoolId(2L);
		teacher.setSchoolName("测试学校");

		RequestUtil.setSessionAttr(teacherSessionId, teacher);
		return "/teacher/index";
	}

	/**
	 * 
	 * @Title: middle
	 * @Description:
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/middle")
	public String middle() {
		return "/teacher/middle";
	}
}
