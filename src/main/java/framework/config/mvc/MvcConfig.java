package  framework.config.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;

import  framework.freemarker.FreemarkerStaticModels;
import  framework.properties.FreemarkerProperties;

/**
 * 
 * @ClassName: MvcConfig
 * @Description: springmvc的配置
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月31日 下午5:20:23
 */
@Configuration
public class MvcConfig {

	@Autowired
	private FreemarkerStaticModels freemarkerStaticModels;

	@Autowired
	private FreemarkerProperties freemarkerProperties;

	/**
	 * 
	 * @Title: getFreeMarkerViewResolver
	 * @Description: springmvc 解析器
	 * @return
	 * @return: FreeMarkerViewResolver
	 */
	@Bean(name = "viewResolver")
	public FreeMarkerViewResolver getFreeMarkerViewResolver() {
		FreeMarkerViewResolver freeMarkerViewResolver = new FreeMarkerViewResolver();
		freeMarkerViewResolver.setAttributesMap(freemarkerStaticModels);
		freeMarkerViewResolver.setContentType("text/html; charset=UTF-8");
		return freeMarkerViewResolver;

	}

}
