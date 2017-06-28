package  framework.util;

import javax.servlet.ServletContext;

import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletContextAware;

/**
 * 
 * @ClassName: ApplicationContext
 * @Description: 项目上下文
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月25日 上午11:25:10
 */
@Component
public class ApplicationContext implements ServletContextAware {

	private static ServletContext servletContext;

	/**
	 * 
	 * @Title: getAppRealPath
	 * @Description: 获取真实路径
	 * @param path
	 * @return
	 * @return: String
	 */
	public static String getAppRealPath(String path) {
		return servletContext.getRealPath(path);
	}
	/**
	 * 
	 * @Title: getContentPath
	 * @Description: 获取相对路径
	 * @return
	 * @return: String
	 */
	public static String getContentPath(){
		return servletContext.getContextPath();
	}
	
	

	/* get and set */
	public void setServletContext(ServletContext servletContext) {
		this.servletContext = servletContext;

	}

	/**
	 * 
	 * @Title: getContext
	 * @Description: 获取上下问
	 * @return
	 * @return: ServletContext
	 */
	public static ServletContext getContext() {
		return servletContext;
	}

}
