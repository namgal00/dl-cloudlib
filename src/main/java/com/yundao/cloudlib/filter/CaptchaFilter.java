package com.yundao.cloudlib.filter;

import java.io.IOException;
import java.util.UUID;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import framework.service.MyCaptchaService;

/**
 * 
 * @ClassName: CaptchaFilter
 * @Description: 验证码过滤器
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月11日 上午10:30:34
 */
@WebFilter(filterName = "captchaFilter", urlPatterns = "/admin/login")
@Component
public class CaptchaFilter implements Filter {

	@Autowired
	private MyCaptchaService myCaptchaService;

	@Override
	public void destroy() {
		// TODO Auto-generated method stub

	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		if (req.getMethod().equalsIgnoreCase("POST")) {
			// 验证码
			String j_captcha = req.getParameter("j_captcha");
			String captchaId = req.getParameter("captchaId");
			System.out.println(j_captcha + "," + captchaId);
			boolean valid = myCaptchaService.isValid(captchaId, j_captcha);
			if (!valid) {
				res.sendRedirect("/admin/login?msg=error");
			}

		}
		filterChain.doFilter(request, response);

	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub

	}

}
