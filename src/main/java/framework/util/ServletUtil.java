package framework.util;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.Map.Entry;

import javax.servlet.ServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.Validate;

import framework.constant.Constant;
import framework.page.OperatorEnum;
import framework.page.SearchFilter;

/**
 * 
 * @ClassName: ServletUtil
 * @Description: Servlet和http的工具类
 * @author: jinzhaopo
 * @date: 2015-5-19 上午9:03:52
 */
public class ServletUtil {
	/**
	 * 
	 * @Title: getParametersStartingWith
	 * @Description: 取得带相同前缀的Request Parameters, copy from spring WebUtils.
	 * 
	 *               返回的结果的Parameter名已去除前缀.
	 * @param request
	 * @return
	 * @return: Map<String,Object>
	 */
	public static Map<String, Object> getParametersStartingWith(final ServletRequest request) {
		Validate.notNull(request, "Request must not be null");
		final Enumeration paramNames = request.getParameterNames();
		final Map<String, Object> params = new TreeMap<String, Object>();

		while ((paramNames != null) && paramNames.hasMoreElements()) {
			final String paramName = (String) paramNames.nextElement();
			if (paramName.startsWith(Constant.SEARCH_PREFIX)) {
				final String unprefixed = paramName.substring(Constant.SEARCH_PREFIX.length());
				final String[] values = request.getParameterValues(paramName);
				if ((values == null) || (values.length == 0)) {
					// Do nothing, no values found at all.
				} else if (values.length > 1) {
					params.put(unprefixed, values);
				} else {
					params.put(unprefixed, values[0]);
				}
			}
		}
		return params;
	}

	/**
	 * 
	 * @Title: parse
	 * @Description: 将页面传过来的map变成list的查询条件
	 * @param filterParams
	 * @return
	 * @return: List<SearchFilter>
	 */
	public static List<SearchFilter> parse(final Map<String, Object> filterParams) {
		final List<SearchFilter> filters = new ArrayList<SearchFilter>();

		for (final Entry<String, Object> entry : filterParams.entrySet()) {
			int index = entry.getKey().indexOf("_");
			String operator = entry.getKey().substring(0, index);
			String fieldName = entry.getKey().substring(index + 1);
			// final String[] names = StringUtils.split(entry.getKey(), "_");
			// if (names.length != 2) {
			// throw new IllegalArgumentException(entry.getKey()
			// + " is not a valid search filter name");
			// }
			if (StringUtils.isBlank((String) entry.getValue())) {
				continue;
			}
			final SearchFilter filter = new SearchFilter(fieldName, OperatorEnum.valueOf(operator), entry.getValue());
			filters.add(filter);
		}
		return filters;
	}

}
