package com.yundao.cloudlib.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.yundao.cloudlib.interceptor.CookieInterceptor;
import com.yundao.cloudlib.interceptor.FrontLoginInterceptor;
import com.yundao.cloudlib.interceptor.TeacherInterceptor;

/**
 * 
 * @ClassName: MyWebAppConfigurer
 * @Description: 拦截器的配置
 * @author: wf
 * @version: V1.0
 * @date: 2017年6月14日 下午3:37:19
 */
@Configuration
public class MyWebAppConfigurer extends WebMvcConfigurerAdapter {

	public void addInterceptors(InterceptorRegistry registry) {

		// 多个拦截器组成一个拦截器链
		// addPathPatterns 用于添加拦截规则
		// excludePathPatterns 用户排除拦截

		registry.addInterceptor(new FrontLoginInterceptor()).addPathPatterns("/**").excludePathPatterns("/teacher/**");
		registry.addInterceptor(new CookieInterceptor()).addPathPatterns("/**");
		registry.addInterceptor(new TeacherInterceptor()).addPathPatterns("/teacher/**").excludePathPatterns("/teacher/index");

	}

}
