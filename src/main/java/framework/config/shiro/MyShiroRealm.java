package framework.config.shiro;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

/**
 * 
 * @ClassName: MyShiroRealm
 * @Description: 身份校验核心类;
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月3日 下午3:20:03
 */
public abstract class MyShiroRealm extends AuthorizingRealm {

	/**
	 * 
	 * @Title: doGetAuthorizationInfo
	 * @Description: 认证信息.(身份验证)
	 * @param principals
	 * @return
	 * @see org.apache.shiro.realm.AuthorizingRealm#doGetAuthorizationInfo(org.apache.shiro.subject.PrincipalCollection)
	 */
	@Override
	protected abstract AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals);

	/**
	 * 
	 * @Title: doGetAuthenticationInfo
	 * @Description: * 此方法调用 hasRole,hasPermission的时候才会进行回调.
	 * 
	 *               权限信息.(授权): 1、如果用户正常退出，缓存自动清空；<br>
	 *               2、如果用户非正常退出，缓存自动清空；<br>
	 *               3、如果我们修改了用户的权限，而用户不退出系统，修改的权限无法立即生效。
	 *               （需要手动编程进行实现；放在service进行调用）
	 *               在权限修改后调用realm中的方法，realm已经由spring管理，所以从spring中获取realm实例，
	 *               调用clearCached方法； <br>
	 *               :Authorization
	 *               是授权访问控制，用于对用户进行的操作授权，证明该用户是否允许进行当前操作，如访问某个链接，某个资源文件等。
	 * 
	 * @param token
	 * @return
	 * @throws AuthenticationException
	 * @see org.apache.shiro.realm.AuthenticatingRealm#doGetAuthenticationInfo(org.apache.shiro.authc.AuthenticationToken)
	 */
	@Override
	protected abstract AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token)
			throws AuthenticationException;

}
