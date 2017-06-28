package  framework.util;

import java.beans.PropertyEditorSupport;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang3.time.DateUtils;

import  framework.constant.Constant;

/**
 * 
 * @ClassName: DateEditor
 * @Description: 日期编辑器
 * @author: jinzhaopo
 * @date: 2015-5-18 下午12:43:16
 */
public class DateEditor extends PropertyEditorSupport {
	private boolean emptyAsNull;
	private String dateFormat;

	public DateEditor(boolean emptyAsNull) {
		this.emptyAsNull = emptyAsNull;
	}

	public DateEditor(boolean emptyAsNull, String dateFormat) {
		this.emptyAsNull = emptyAsNull;
		this.dateFormat = dateFormat;
	}

	public String getAsText() {
		Date date = (Date) getValue();
		return date == null ? "" : new SimpleDateFormat(dateFormat)
				.format(date);
	}

	public void setAsText(String text) {
		if (text == null) {
			setValue(null);
		} else {
			String s = text.trim();
			if (emptyAsNull && "".equals(s)) {
				setValue(null);
			} else {
				try {
					setValue(DateUtils.parseDate(s, Constant.DATE_PATTERNS));
				} catch (ParseException parseexception) {
					setValue(null);
				}
			}
		}
	}

}
