package framework.mail;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;

/**
 * 
 * @ClassName: MyAuthenticator
 * @Description: 身份验证
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月22日 下午3:45:30
 */
public class MyAuthenticator extends Authenticator {

	String userName = null;
	String password = null;

	public MyAuthenticator() {
	}

	public MyAuthenticator(String username, String password) {
		this.userName = username;
		this.password = password;
	}

	protected PasswordAuthentication getPasswordAuthentication() {
		return new PasswordAuthentication(userName, password);
	}
}
