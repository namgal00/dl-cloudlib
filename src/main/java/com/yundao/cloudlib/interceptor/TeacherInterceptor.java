package com.yundao.cloudlib.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.yundao.cloudlib.Constant;
import com.yundao.cloudlib.bean.Teacher;
import com.yundao.cloudlib.controller.teacher.BaseController;

import framework.util.RequestUtil;

/**
 * 
 * @ClassName: TeacherInterceptor
 * @Description: 教师拦截器 用来拦截教师登入的
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年7月1日 上午10:29:13
 */
public class TeacherInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		Object obj = RequestUtil.getSessionAttr(BaseController.TEACHER_SESSION);
		if (obj == null) {
			response.sendRedirect((new StringBuilder(request.getContextPath())).append(Constant.LOGINURL).toString());
			return false;
		}
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
		if (modelAndView != null) {
			String s = modelAndView.getViewName();
			if (!StringUtils.startsWith(s, "redirect:")) {

			}
			modelAndView.addObject("teacher", (Teacher) RequestUtil.getSessionAttr(BaseController.TEACHER_SESSION));
		}

	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
		// TODO Auto-generated method stub

	}

}
