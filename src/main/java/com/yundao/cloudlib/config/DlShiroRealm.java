package com.yundao.cloudlib.config;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAccount;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;

import com.yundao.cloudlib.Constant;
import com.yundao.cloudlib.model.rbac.Admin;
import com.yundao.cloudlib.service.AdminService;

import framework.config.shiro.MyShiroRealm;

/**
 * 
 * @ClassName: DlShiroRealm
 * @Description: 核心身份验核
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月4日 下午9:28:16
 */
public class DlShiroRealm extends MyShiroRealm {

	@Autowired
	private AdminService adminService;

	/**
	 * 
	 * @Title: doGetAuthorizationInfo
	 * @Description: * 此方法调用 hasRole,hasPermission的时候才会进行回调.
	 * 
	 *               权限信息.(授权): 1、如果用户正常退出，缓存自动清空；<br/>
	 *               2、如果用户非正常退出，缓存自动清空；<br/>
	 *               3、如果我们修改了用户的权限，而用户不退出系统，修改的权限无法立即生效。
	 *               （需要手动编程进行实现；放在service进行调用）
	 *               在权限修改后调用realm中的方法，realm已经由spring管理，所以从spring中获取realm实例，
	 *               调用clearCached方法； :Authorization
	 *               是授权访问控制，用于对用户进行的操作授权，证明该用户是否允许进行当前操作，如访问某个链接，某个资源文件等。
	 * 
	 * @param principals
	 * @return
	 * @see com.jzp.framework.config.shiro.MyShiroRealm#doGetAuthorizationInfo(org.apache.shiro.subject.PrincipalCollection)
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		/*
		 * 当没有使用缓存的时候，不断刷新页面的话，这个代码会不断执行， 当其实没有必要每次都重新设置权限信息，所以我们需要放到缓存中进行管理；
		 * 当放到缓存中时，这样的话，doGetAuthorizationInfo就只会执行一次了， 缓存过期之后会再次执行。
		 */
		// @RequiresPermissions("userInfo:del")//权限管理;
		// 这个权限管理不在shiro中做 感觉有点麻烦 用自己写的权限验证
		return null;
	}

	/**
	 * 
	 * @Title: doGetAuthenticationInfo
	 * @Description: 身份验证
	 * @param token
	 *            用来身份验证的
	 * @return
	 * @throws AuthenticationException
	 * @see com.jzp.framework.config.shiro.MyShiroRealm#doGetAuthenticationInfo(org.apache.shiro.authc.AuthenticationToken)
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {

		UsernamePasswordToken upToken = (UsernamePasswordToken) token;

		// 获取用户的输入的账号.
		String username = (String) token.getPrincipal();
		
		Admin admin = adminService.get("name", username);
		
		if (admin == null) {
			return null;
		}

		// 账号判断;

		// 加密方式;
		// 交给AuthenticatingRealm使用CredentialsMatcher进行密码匹配，如果觉得人家的不好可以自定义实现
		// SimpleAuthenticationInfo authenticationInfo = new
		// SimpleAuthenticationInfo(
		// userInfo, //用户名
		// userInfo.getPassword(), //密码
		// ByteSource.Util.bytes(userInfo.getCredentialsSalt()),//salt=username+salt
		// getName() //realm name
		// );

		// 明文: 若存在，将此用户存放到登录认证info中，无需自己做密码对比，Shiro会为我们进行密码对比校验
		SimpleAccount authenticationInfo = new SimpleAccount(admin, // 用户名
				admin.getPassword(), // 密码
				getName() // realm name

		);

		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		session.setAttribute(Constant.CURRENT_ADMIN, admin);

		return authenticationInfo;
	}

}
