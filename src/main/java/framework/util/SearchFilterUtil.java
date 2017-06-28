package  framework.util;

import java.util.ArrayList;
import java.util.List;

import  framework.page.SearchFilter;

/**
 * 
 * @ClassName: SearchFilterUtil
 * @Description: 查询的帮助类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月27日 下午3:57:01
 */
public class SearchFilterUtil {

	private static SearchFilterUtil searchFilterUtil;

	private static List<SearchFilter> searchFilters;

	/**
	 * 
	 * @Title: getInstance
	 * @Description:
	 * @return
	 * @return: List<SearchFilter>
	 */
	public static SearchFilterUtil getInstance() {
		if (searchFilterUtil == null) {
			searchFilterUtil = new SearchFilterUtil();
			searchFilterUtil.searchFilters = new ArrayList<SearchFilter>();
		} else {
			searchFilterUtil.searchFilters.clear();
		}
		return searchFilterUtil;
	}

	/**
	 * 
	 * @Title: getSearchFilter
	 * @Description: 获取查询条件的集合
	 * @return
	 * @return: List<searchFilter>
	 */
	public List<SearchFilter> getSearchFilter() {
		return this.searchFilters;
	}

	/**
	 * 
	 * @Title: addEq
	 * @Description: 添加相等的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addEq(String property, Object value) {
		this.searchFilters.add(SearchFilter.eq(property, value));
		return this;
	}

	/**
	 * 
	 * @Title: addEq
	 * @Description: 添加相等的查询条件
	 * @param property
	 * @param value
	 * @param ignoreCase
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addEq(String property, Object value, boolean ignoreCase) {
		this.searchFilters.add(SearchFilter.eq(property, value, ignoreCase));
		return this;
	}

	/**
	 * 
	 * @Title: addNe
	 * @Description: 添加不相等的查询条件
	 * @param property
	 * @param value
	 * @param ignoreCase
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addNe(String property, Object value, boolean ignoreCase) {
		this.searchFilters.add(SearchFilter.ne(property, value, ignoreCase));
		return this;
	}

	/**
	 * 
	 * @Title: addNe
	 * @Description: 添加不相等的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addNe(String property, Object value) {
		this.searchFilters.add(SearchFilter.ne(property, value));
		return this;
	}

	/**
	 * 
	 * @Title: addGt
	 * @Description: 添加》的查询条件
	 * @param property
	 * @param value
	 * @param ignoreCase
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addGt(String property, Object value) {
		this.searchFilters.add(SearchFilter.gt(property, value));
		return this;
	}

	/**
	 * 
	 * @Title: addLt
	 * @Description: 添加<的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addLt(String property, Object value) {
		this.searchFilters.add(SearchFilter.lt(property, value));
		return this;
	}

	/**
	 * 
	 * @Title: addGe
	 * @Description: 添加》=的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addGe(String property, Object value) {
		this.searchFilters.add(SearchFilter.ge(property, value));
		return this;
	}

	/**
	 * 
	 * @Title: addLe
	 * @Description: 添加《=的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addLe(String property, Object value) {
		this.searchFilters.add(SearchFilter.le(property, value));
		return this;
	}

	/**
	 * 
	 * @Title: addLike
	 * @Description: 添加like的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addLike(String property, Object value) {
		this.searchFilters.add(SearchFilter.like(property, value));
		return this;
	}

	/**
	 * 
	 * @Title: addIn
	 * @Description: 添加in的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addIn(String property, List value) {
		this.searchFilters.add(SearchFilter.in(property, value));
		return this;
	}

	/**
	 * 
	 * @Title: addNotIn
	 * @Description: 添加notin的查询条件
	 * @param property
	 * @param value
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addNotIn(String property, List value) {
		this.searchFilters.add(SearchFilter.notIn(property, value));
		return this;
	}

	/**
	 * 
	 * @Title: addIsNull
	 * @Description: 添加不为空的查询条件
	 * @param property
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addIsNull(String property) {
		this.searchFilters.add(SearchFilter.isNull(property));
		return this;
	}

	/**
	 * 
	 * @Title: addIsNotNull
	 * @Description: 添加不为空的查询条件
	 * @param property
	 * @return
	 * @return: SearchFilterUtil
	 */
	public SearchFilterUtil addIsNotNull(String property) {
		this.searchFilters.add(SearchFilter.isNotNull(property));
		return this;
	}

}