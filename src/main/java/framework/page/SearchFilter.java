package  framework.page;

import java.util.List;
import java.util.Map;

/**
 * 
 * @ClassName: SearchFilter
 * @Description: 搜索类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月27日 下午2:27:57
 */
public class SearchFilter {

	/**
	 * 查询的字段
	 */
	private String fieldName;
	/***
	 * 操作
	 */
	private OperatorEnum operator;
	/**
	 * 字段的值
	 */
	private Object value;
	/**
	 * 字段的值
	 */
	private List values;

	/**
	 * 是否忽略大小写，默认是true
	 */
	private Boolean ignoreCase = true;
	/**
	 * 是否是手写字段
	 */
	private Boolean handwrittenDield = false;

	public SearchFilter() {
		this.ignoreCase = false;
	}

	public SearchFilter(final String fieldName, OperatorEnum operator, Object value, boolean ignoreCase) {
		this.fieldName = fieldName;
		this.value = value;
		this.operator = operator;
		this.ignoreCase = ignoreCase;
	}

	public SearchFilter(final String fieldName, final OperatorEnum operator, final Object value) {
		this.fieldName = fieldName;
		this.value = value;
		this.operator = operator;
	}

	public SearchFilter(String fieldName, Object value, OperatorEnum operator, List values, Boolean ignoreCase) {
		super();
		this.fieldName = fieldName;
		this.value = value;
		this.operator = operator;
		this.values = values;
		this.ignoreCase = ignoreCase;
	}

	/**
	 * 
	 * @Title: eq
	 * @Description: 获取相等的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter eq(String property, Object value) {
		return new SearchFilter(property, OperatorEnum.EQ, value);
	}

	/**
	 * 
	 * @Title: eq
	 * @Description: 获取相等的查询条件
	 * @param property
	 * @param value
	 * @param ignoreCase
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter eq(String property, Object value, boolean ignoreCase) {
		return new SearchFilter(property, OperatorEnum.EQ, value, ignoreCase);
	}

	/**
	 * 
	 * @Title: ne
	 * @Description: 获取不相等的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter ne(String property, Object value) {
		return new SearchFilter(property, OperatorEnum.NE, value);
	}

	/**
	 * 
	 * @Title: ne
	 * @Description: 获取不相等的查询条件
	 * @param property
	 * @param value
	 * @param ignoreCase
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter ne(String property, Object value, boolean ignoreCase) {
		return new SearchFilter(property, OperatorEnum.NE, value, ignoreCase);
	}

	/**
	 * 
	 * @Title: gt
	 * @Description: 获取>的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter gt(String property, Object value) {
		return new SearchFilter(property, OperatorEnum.GT, value);
	}

	/**
	 * 
	 * @Title: lt
	 * @Description: 获取<的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter lt(String property, Object value) {
		return new SearchFilter(property, OperatorEnum.LT, value);
	}

	/**
	 * 
	 * @Title: ge
	 * @Description: 获取》=的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter ge(String property, Object value) {
		return new SearchFilter(property, OperatorEnum.GE, value);
	}

	/**
	 * 
	 * @Title: le
	 * @Description: 获取《=的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter le(String property, Object value) {
		return new SearchFilter(property, OperatorEnum.LE, value);
	}

	/**
	 * 
	 * @Title: like
	 * @Description: 获取like的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter like(String property, Object value) {
		return new SearchFilter(property, OperatorEnum.LIKE, value);
	}

	/**
	 * 
	 * @Title: in
	 * @Description: 获取in的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter in(String property, List value) {
		return new SearchFilter(property, null, OperatorEnum.IN, value, false);
	}

	/**
	 * 
	 * @Title: notIn
	 * @Description: 获取not in的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter notIn(String property, List value) {
		return new SearchFilter(property, null, OperatorEnum.NOTIN, value, false);
	}

	/**
	 * 
	 * @Title: isNull
	 * @Description: 获取 是null的查询条件
	 * @param property
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter isNull(String property) {
		return new SearchFilter(property, OperatorEnum.ISNULL, null);
	}

	/**
	 * 
	 * @Title: isNotNull
	 * @Description: 获取不是null的查询条件
	 * @param property
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter isNotNull(String property) {
		return new SearchFilter(property, OperatorEnum.ISNOTNULL, null);
	}

	/**
	 * 
	 * @Title: condition
	 * @Description: 手写查询条件 length(name) > 5
	 * @param condition
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter condition(String condition) {
		SearchFilter sf = new SearchFilter();
		sf.setHandwrittenDield(true);
		sf.setFieldName(condition);
		return sf;
	}

	/**
	 * 
	 * @Title: condition
	 * @Description: 手写查询条件
	 * @param condition
	 * @param value
	 * @return
	 * @return: SearchFilter
	 */
	public static SearchFilter condition(String condition, Object value) {
		SearchFilter sf = new SearchFilter();
		sf.setHandwrittenDield(true);
		sf.setFieldName(condition);
		sf.setValue(value);
		return sf;
	}

	/* get and set */

	public String getFieldName() {
		return fieldName;
	}

	public List getValues() {
		return values;
	}

	public void setValues(List values) {
		this.values = values;
	}

	public Boolean getIgnoreCase() {
		return ignoreCase;
	}

	public void setIgnoreCase(Boolean ignoreCase) {
		this.ignoreCase = ignoreCase;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

	public OperatorEnum getOperator() {
		return operator;
	}

	public void setOperator(OperatorEnum operator) {
		this.operator = operator;
	}

	public Object getValue() {
		return value;
	}

	public void setValue(Object value) {
		this.value = value;
	}

	public Boolean getHandwrittenDield() {
		return handwrittenDield;
	}

	public void setHandwrittenDield(Boolean handwrittenDield) {
		this.handwrittenDield = handwrittenDield;
	}

}
