package  framework.util;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;

/**
 * 
 * @ClassName: InternationalUtil
 * @Description: 国际化工具类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月25日 上午10:52:42
 */
public class InternationalUtil {

	/**
	 * 
	 * @Title: getMessage
	 * @Description: 获取国际化中的信息
	 * @param code
	 * @return
	 * @return: String
	 */
	public static String getMessage(String code) {
		return getMessage(code, null);
	}

	/**
	 * 
	 * @Title: getMessage
	 * @Description: 获取国际化中的信息
	 * @param code
	 * @param args
	 * @return
	 * @return: String
	 */
	public static String getMessage(String code, Object[] args) {
		return getMessage(code, args, code);
	}

	/**
	 * 
	 * @Title: getMessage
	 * @Description: 获取国际化中的信息
	 * @param code
	 * @param args
	 * @param defaultMessage
	 * @return
	 * @return: String
	 */
	public static String getMessage(String code, Object[] args, String defaultMessage) {
		Locale locale = LocaleContextHolder.getLocale();
		MessageSource messageSource = (MessageSource) SpringUtil.getBean("messageSource", MessageSource.class);
		return messageSource.getMessage(code, args, defaultMessage, locale);
	}

}
