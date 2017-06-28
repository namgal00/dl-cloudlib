package  framework.config.locale;

import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

/**
 * 
 * @ClassName: LocaleMessage
 * @Description: 国际化配置
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月5日 下午1:59:40
 */
@Configuration
public class LocaleMessage {
	/**
	 * 
	 * @Title: localeResolver
	 * @Description: 配置session解析器
	 * @return
	 * @return: LocaleResolver
	 */
	@Bean
	public LocaleResolver localeResolver() {
		SessionLocaleResolver slr = new SessionLocaleResolver();
		// 设置默认区域,
		slr.setDefaultLocale(Locale.CHINA);
		return slr;

	}

	@Bean
	public LocaleChangeInterceptor localeChangeInterceptor() {
		LocaleChangeInterceptor lci = new LocaleChangeInterceptor();
		// 参数名
		lci.setParamName("lang");
		return lci;
	}

	
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(localeChangeInterceptor());
	}

}
