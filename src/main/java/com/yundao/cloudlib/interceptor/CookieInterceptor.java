package com.yundao.cloudlib.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.yundao.cloudlib.controller.front.LoginController;

import framework.util.CookieUtils;
import framework.util.RequestUtil;
import framework.util.ServletUtil;

/**
 * 
 * @ClassName: CookieInterceptor
 * @Description: 用来记录当前记录的path
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月28日 上午1:32:17
 */
public class CookieInterceptor implements HandlerInterceptor {

	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object arg2, ModelAndView arg3) throws Exception {
		// 在要到页面的时候进行操作
		String path = request.getRequestURI().toString();
		CookieUtils.addCookie(request, response, LoginController.DL_COOKIE_CURRENT_PATH, path);
	}

	@Override
	public boolean preHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2) throws Exception {
		// TODO Auto-generated method stub
		return true;
	}

}
