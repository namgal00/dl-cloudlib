package  framework.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

/**
 * 
 * @ClassName: FreemarkerProperties
 * @Description: freemarker 配置文件
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月30日 下午9:28:01
 */
@ConfigurationProperties(prefix = "template")
@PropertySource("classpath:/config/freemarker.properties")
@Component

public class FreemarkerProperties {

	/**
	 * 数字显示
	 */
	private String number_format;
	/**
	 * 日期显示
	 */
	private String datetime_format;
	/**
	 * 日期显示
	 */
	private String date_format;
	/**
	 * 
	 */
	private String time_format;
	/**
	 * 
	 */
	private String boolean_format;
	/**
	 * 
	 */
	private String update_delay;
	/**
	 * 
	 */
	private String encoding;
	/**
	 * 
	 */
	private String loader_path;
	/**
	 * 
	 */
	private String suffix;
	/**
	 * 
	 */
	private String auto_import;
	/**
	 * 
	 */
	private String locale;

	public String getLocale() {
		return locale;
	}

	public void setLocale(String locale) {
		this.locale = locale;
	}

	private String url_escaping_charset;

	public String getNumber_format() {
		return number_format;
	}

	public void setNumber_format(String number_format) {
		this.number_format = number_format;
	}

	public String getDatetime_format() {
		return datetime_format;
	}

	public void setDatetime_format(String datetime_format) {
		this.datetime_format = datetime_format;
	}

	public String getDate_format() {
		return date_format;
	}

	public void setDate_format(String date_format) {
		this.date_format = date_format;
	}

	public String getTime_format() {
		return time_format;
	}

	public void setTime_format(String time_format) {
		this.time_format = time_format;
	}

	public String getBoolean_format() {
		return boolean_format;
	}

	public void setBoolean_format(String boolean_format) {
		this.boolean_format = boolean_format;
	}

	public String getUpdate_delay() {
		return update_delay;
	}

	public void setUpdate_delay(String update_delay) {
		this.update_delay = update_delay;
	}

	public String getEncoding() {
		return encoding;
	}

	public void setEncoding(String encoding) {
		this.encoding = encoding;
	}

	public String getLoader_path() {
		return loader_path;
	}

	public void setLoader_path(String loader_path) {
		this.loader_path = loader_path;
	}

	public String getSuffix() {
		return suffix;
	}

	public void setSuffix(String suffix) {
		this.suffix = suffix;
	}

	public String getAuto_import() {
		return auto_import;
	}

	public void setAuto_import(String auto_import) {
		this.auto_import = auto_import;
	}

	public String getUrl_escaping_charset() {
		return url_escaping_charset;
	}

	public void setUrl_escaping_charset(String url_escaping_charset) {
		this.url_escaping_charset = url_escaping_charset;
	}

}
