package com.yundao.cloudlib.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.yundao.cloudlib.Constant;

import framework.util.RequestUtil;

/**
 * 
 * @ClassName: AdminDetailsInterceptor
 * @Description: 登入拦截器（现在已经都在shiro中进行操作了   目前没有用）
 * @author: jinzhaopo
 * @date: 2015-5-21 下午3:31:29
 */
public class AdminDetailsInterceptor implements HandlerInterceptor {

	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		Object obj = RequestUtil.getSessionAttr(Constant.CURRENT_ADMIN);
		if (obj == null) {
			response.sendRedirect((new StringBuilder(request.getContextPath())).append(Constant.LOGINURL).toString());
			return false;
		}
		return true;
	}

	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
		if (modelAndView != null) {
			String s = modelAndView.getViewName();
			if (!StringUtils.startsWith(s, "redirect:")){
				
			}
				//modelAndView.addObject("user", (User) RequestUtil.getSessionAttr(Constant.CURRENT_ADMIN));
		}
	}

	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
		// TODO Auto-generated method stub

	}

}

