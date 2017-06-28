package  framework.listener;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/**
 * 
 * @ClassName: MyHttpSessionListener
 * @Description: 监听Session的创建与销毁
 * @author: jinzhaopo
 * @version: V1.0 
 * @date: 2017年6月5日 上午9:47:03
 */
@WebListener
public class MyHttpSessionListener implements HttpSessionListener {

	@Override
	public void sessionCreated(HttpSessionEvent se) {

		System.out.println("Session 被创建");

	}

	@Override
	public void sessionDestroyed(HttpSessionEvent se) {

		System.out.println("ServletContex初始化");

	}

}
