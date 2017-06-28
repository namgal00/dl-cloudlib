package  framework.util;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

/**
 * 
 * @ClassName: SpringUtil
 * @Description: springUtil工具类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月25日 上午10:37:42
 */
@Component
public class SpringUtil implements DisposableBean, ApplicationContextAware {

	private static ApplicationContext applicationContext;

	@SuppressWarnings("static-access")
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.applicationContext = applicationContext;
	}

	@Override
	public void destroy() throws Exception {
		applicationContext = null;

	}

	/**
	 * 
	 * @Title: getBean
	 * @Description: 获取spring中的bean
	 * @param name
	 *            bean的名称
	 * 
	 * @return
	 * @return: Object
	 */
	public static Object getBean(String name) {
		Assert.hasText(name, "SpringUtil---getBean:名称不能为空");
		return applicationContext.getBean(name);
	}

	/**
	 * 
	 * @Title: getBean
	 * @Description: 获取spring中的bean
	 * @param name
	 *            bean的名称
	 * @param type
	 *            获取的类型
	 * @return
	 * @return: Object
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Object getBean(String name, Class type) {
		Assert.hasText(name, "");
		Assert.notNull(type, "");
		return applicationContext.getBean(name, type);
	}

	private SpringUtil() {

	}

}
