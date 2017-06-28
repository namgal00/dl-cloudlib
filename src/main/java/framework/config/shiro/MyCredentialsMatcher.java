package framework.config.shiro;

import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authc.credential.SimpleCredentialsMatcher;

/**
 * 
 * @ClassName: CustomCredentialsMatcher
 * @Description: 告诉shiro如何验证加密密码，通过SimpleCredentialsMatcher或HashedCredentialsMatcher<br/>
 *               因为shiro自带的验证器一直过不了 没办法才手写的如果能用自带的 请告诉我
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月4日 下午10:48:32
 */
public class MyCredentialsMatcher extends SimpleCredentialsMatcher {

	@Override
	public boolean doCredentialsMatch(AuthenticationToken authcToken, AuthenticationInfo info) {

		UsernamePasswordToken token = (UsernamePasswordToken) authcToken;

		Object accountCredentials = getCredentials(info);

		System.out.println(new String(token.getPassword()) + "-------------" + accountCredentials.toString());

		String tokenStr = new String(token.getPassword());

		String accountCredentialsStr = accountCredentials.toString();

		return tokenStr.equals(accountCredentialsStr);

		// 将密码加密与系统加密后的密码校验，内容一致就返回true,不一致就返回false
		// return super.doCredentialsMatch(token, info) ;
	}
}
