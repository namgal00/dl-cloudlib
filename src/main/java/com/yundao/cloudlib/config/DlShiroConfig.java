package com.yundao.cloudlib.config;

import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import framework.config.shiro.MyShiroRealm;
import framework.config.shiro.ShiroConfig;

@Configuration
public class DlShiroConfig extends ShiroConfig {

	@Bean
	@Override
	public SecurityManager securityManager() {
		DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
		// 设置realm.
		securityManager.setRealm(myShiroRealm());

		// 注入缓存管理器;
		securityManager.setCacheManager(ehCacheManager());// 这个如果执行多次，也是同样的一个对象;

		// 注入记住我管理器;
		securityManager.setRememberMeManager(rememberMeManager());

		return securityManager;
	}

	@Bean
	@Override
	public MyShiroRealm myShiroRealm() {
		DlShiroRealm myShiroRealm = new DlShiroRealm();
		myShiroRealm.setCredentialsMatcher(getMyCredentialsMatcher());
		return myShiroRealm;
	}

}
