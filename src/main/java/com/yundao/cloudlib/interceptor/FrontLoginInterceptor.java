package com.yundao.cloudlib.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.yundao.cloudlib.bean.Reader;
import com.yundao.cloudlib.controller.front.BaseController;

import framework.util.RequestUtil;

/**
 * 
 * @ClassName: FrontLoginInterceptor
 * @Description: 前台读者登入拦截器
 * @author: wf
 * @version: V1.0
 * @date: 2017年6月14日 下午3:37:55
 */
public class FrontLoginInterceptor implements HandlerInterceptor {

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse arg1, Object arg2, Exception arg3) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView modelAndView) throws Exception {
		// 如果已经登入了就把reader的值传到页面里
		Reader reader = (Reader) RequestUtil.getSessionAttr(BaseController.SESSION_READER);
		if (modelAndView != null && reader != null) {
			String s = modelAndView.getViewName();
			if (!StringUtils.startsWith(s, "redirect:")) {
				modelAndView.addObject(BaseController.SESSION_READER, reader);
			}
		}

	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object obj) throws Exception {
		String path = request.getRequestURI();
		// 如果是阅读和个人中心是需要进行登入的 如果没有登入就跳到登入页面
		if (path.contains("persion") || path.contains("read")) {
			Reader reader = (Reader) RequestUtil.getSessionAttr(BaseController.SESSION_READER);
			if (reader == null) {
				response.sendRedirect("/login");
				return false;
			}
		}

		return true;
	}

}
