package com.yundao.cloudlib.controller.teacher;

import com.yundao.cloudlib.bean.Teacher;

import framework.mvc.StandardController;
import framework.util.RequestUtil;

/**
 * 
 * @ClassName: BaseController
 * @Description: teacher基础controller
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年7月1日 上午10:10:26
 */
public class BaseController extends StandardController {
	/**
	 * 教师session的key
	 */
	public static final String TEACHER_SESSION = "teacher_session";

	/**
	 * 
	 * @Title: getTeacher
	 * @Description: 获取当前登入的老师
	 * @return
	 * @return: Teacher
	 */
	protected Teacher getTeacher() {
		Teacher teacher = (Teacher) RequestUtil.getSessionAttr(TEACHER_SESSION);
		return teacher;
	}
}
