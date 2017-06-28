package framework.config.shiro;

import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.cache.ehcache.EhCacheManager;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.CookieRememberMeManager;
import org.apache.shiro.web.servlet.SimpleCookie;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import framework.constant.Constant;

/**
 * 
 * @ClassName: ShiroConfig
 * @Description: Apache Shiro 核心通过 Filter 来实现，就好像SpringMvc 通过DispachServlet
 *               来主控制一样。 既然是使用 Filter
 *               一般也就能猜到，是通过URL规则来进行过滤和权限校验，所以我们需要定义一系列关于URL的规则和访问权限。
 * 
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月3日 下午2:34:45
 */
@Configuration
public abstract class ShiroConfig {

	@Bean
	public ShiroFilterFactoryBean shirFilter(SecurityManager securityManager) {
		ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();

		// 必须设置 SecurityManager
		shiroFilterFactoryBean.setSecurityManager(securityManager);

		// 拦截器.
		Map<String, String> filterChainDefinitionMap = new LinkedHashMap<String, String>();

		// 配置退出过滤器,其中的具体的退出代码Shiro已经替我们实现了
		//filterChainDefinitionMap.put("/admin/logout", "logout");

		// <!-- 过滤链定义，从上向下顺序执行，一般将 /**放在最为下边 -->:这是一个坑呢，一不小心代码就不好使了;
		// <!-- authc:所有url都必须认证通过才可以访问; anon:所有url都都可以匿名访问-->
		filterChainDefinitionMap.put("/admin/common/**", "anon");
		filterChainDefinitionMap.put("/admin/**", "authc");

		// //配置记住我或认证通过可以访问的地址
		//
		// filterChainDefinitionMap.put("/index", "user");
		//
		// filterChainDefinitionMap.put("/", "user");

		// 如果不设置默认会自动寻找Web工程根目录下的"/login.jsp"页面
		shiroFilterFactoryBean.setLoginUrl("/admin/login");

		// 登录成功后要跳转的链接
		shiroFilterFactoryBean.setSuccessUrl("/admin/index");

		// 未授权界面;
		shiroFilterFactoryBean.setUnauthorizedUrl("/admin/common/403");

		shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);

		return shiroFilterFactoryBean;

	}

	public abstract SecurityManager securityManager();
	// DefaultWebSecurityManager securityManager = new
	// DefaultWebSecurityManager();
	// // 设置realm.
	// securityManager.setRealm(myShiroRealm());
	//
	// // 注入缓存管理器;
	// securityManager.setCacheManager(ehCacheManager());// 这个如果执行多次，也是同样的一个对象;
	//
	// // 注入记住我管理器;
	// securityManager.setRememberMeManager(rememberMeManager());
	//
	// return securityManager;

	/**
	 * 
	 * @Title: myShiroRealm
	 * @Description: 身份认证realm; (这个需要自己写，账号密码校验；权限等)
	 * @return
	 * @return: MyShiroRealm
	 */
	public abstract MyShiroRealm myShiroRealm();

	// MyShiroRealm myShiroRealm = new MyShiroRealm();
	// myShiroRealm.setCredentialsMatcher(hashedCredentialsMatcher());
	// return myShiroRealm;

	/**
	 * 
	 * @Title: hashedCredentialsMatcher
	 * @Description: 凭证匹配器 （由于我们的密码校验交给Shiro的SimpleAuthenticationInfo进行处理了
	 *               所以我们需要修改下doGetAuthenticationInfo中的代码; ）
	 * @return
	 * @return: HashedCredentialsMatcher
	 */
	@Bean
	public HashedCredentialsMatcher hashedCredentialsMatcher() {
		HashedCredentialsMatcher hashedCredentialsMatcher = new HashedCredentialsMatcher();

		hashedCredentialsMatcher.setHashAlgorithmName("md5");// 散列算法:这里使用MD5算法;
		hashedCredentialsMatcher.setHashIterations(2);// 散列的次数，比如散列两次，相当于
														// md5(md5(""));

		return hashedCredentialsMatcher;
	}

	/**
	 * 
	 * @Title: authorizationAttributeSourceAdvisor
	 * @Description: 开启shiro aop注解支持. 使用代理方式;所以需要开启代码支持;
	 * @param securityManager
	 * @return
	 * @return: AuthorizationAttributeSourceAdvisor
	 */
	@Bean
	public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor(SecurityManager securityManager) {
		AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor = new AuthorizationAttributeSourceAdvisor();
		authorizationAttributeSourceAdvisor.setSecurityManager(securityManager);
		return authorizationAttributeSourceAdvisor;
	}

	/**
	 * 
	 * @Title: ehCacheManager
	 * @Description: shiro缓存管理器; 需要注入对应的其它的实体类中：
	 *               1、安全管理器：securityManager可见securityManager是整个shiro的核心；
	 * @return
	 * @return: EhCacheManager
	 */
	@Bean
	public EhCacheManager ehCacheManager() {
		EhCacheManager cacheManager = new EhCacheManager();
		cacheManager.setCacheManagerConfigFile("classpath:config/ehcache-shiro.xml");
		return cacheManager;
	}

	/**
	 * 
	 * @Title: rememberMeCookie
	 * @Description: cookie对象;
	 * @return
	 * @return: SimpleCookie
	 */
	@Bean
	public SimpleCookie rememberMeCookie() {
		// 这个参数是cookie的名称，对应前端的checkbox 的name = rememberMe
		SimpleCookie simpleCookie = new SimpleCookie(Constant.SHIRO_COOKIE_NAME);
		// <!-- 记住我cookie生效时间30天 ,单位秒;-->
		simpleCookie.setMaxAge(Constant.SHIRO_COOKIE_DATE);
		return simpleCookie;
	}

	/**
	 * 
	 * @Title: rememberMeManager
	 * @Description: cookie 管理对象
	 * @return
	 * @return: CookieRememberMeManager
	 */
	@Bean
	public CookieRememberMeManager rememberMeManager() {
		CookieRememberMeManager cookieRememberMeManager = new CookieRememberMeManager();
		cookieRememberMeManager.setCookie(rememberMeCookie());
		return cookieRememberMeManager;
	}

	/**
	 * 
	 * @Title: initCredentialsMatcher
	 * @Description: 设定Password校验.因为用自带的一直验证不通过所以没办法自己写
	 * @return: void
	 */
	@Bean
	public MyCredentialsMatcher getMyCredentialsMatcher() {
		// 该句作用是重写shiro的密码验证，让shiro用我自己的验证
		return new MyCredentialsMatcher();

	}
}
