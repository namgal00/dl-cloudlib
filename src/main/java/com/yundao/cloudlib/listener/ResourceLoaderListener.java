package com.yundao.cloudlib.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * 
 * @ClassName: ResourceLoaderListener
 * @Description: 项目启动和停止时候的监听
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月5日 上午10:03:11
 */
@WebListener
public class ResourceLoaderListener implements ServletContextListener {

	public void contextInitialized(ServletContextEvent sce) {

	}

	public void contextDestroyed(ServletContextEvent sce) {

	}

}
