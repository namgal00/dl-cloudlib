package  framework.service;

import java.util.List;
import java.util.Map;

import  framework.model.BaseEntity;
import  framework.page.Order;
import  framework.page.Page;
import  framework.page.SearchFilter;

/**
 * 
 * @ClassName: BaseService
 * @Description: service基类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月26日 上午11:18:35
 */
public interface BaseService<T extends BaseEntity> {
	/**
	 * 
	 * @Title: save
	 * @Description: 添加null值不会被保存
	 * @param t
	 * @return
	 * @return: Integer
	 */
	Integer save(T t);

	/**
	 * 
	 * @Title: saveSelective
	 * @Description: 保存一个实体，null的属性不会保存，会使用数据库默认值
	 * @param t
	 * @return
	 * @return: Integer
	 */
	Integer saveSelective(T t);

	/**
	 * 
	 * @Title: save
	 * @Description: 保存
	 * @param ts
	 * @return
	 * @return: Integer
	 */
	Integer save(List<T> ts);

	/**
	 * 
	 * @Title: remove
	 * @Description: 删除
	 * @param id
	 * @return
	 * @return: Integer
	 */
	Integer remove(Long id);

	/**
	 * 
	 * @Title: remove
	 * @Description: 删除
	 * @param ids
	 * @return
	 * @return: Integer
	 */
	Integer remove(List<Long> ids);

	/**
	 * 
	 * @Title: remove
	 * @Description: 根据实体属性作为条件进行删除，查询条件使用等号
	 * @param t
	 * @return
	 * @return: Integer
	 */
	Integer remove(T t);

	/**
	 * 
	 * @Title: remove
	 * @Description: 根据searchFilters进行删除
	 * @param example
	 * @return
	 * @return: Integer
	 */
	Integer removeByFilters(List<SearchFilter> searchFilters);

	/**
	 * 
	 * @Title: update
	 * @Description: 修改
	 * @param t
	 * @return
	 * @return: Integer
	 */
	Integer update(T t);

	/**
	 * 
	 * @Title: updateSelective
	 * @Description: 根据主键更新属性不为null的值
	 * @param t
	 * @return
	 * @return: Integer
	 */
	Integer updateSelective(T t);

	/**
	 * 
	 * @Title: update
	 * @Description: 工具条件更新 null值也会被更新
	 * @param t
	 * @param searchFilters
	 * @return
	 * @return: Integer
	 */
	Integer update(T t, List<SearchFilter> searchFilters);

	/**
	 * 
	 * @Title: updateSelection
	 * @Description: 根据条件更新 null值不会被更新
	 * @param t
	 * @param searchFilters
	 * @return
	 * @return: Integer
	 */
	Integer updateSelective(T t, List<SearchFilter> searchFilters);

	/**
	 * 
	 * @Title: getAll
	 * @Description: 获取所有的数据
	 * @return
	 * @return: List<T>
	 */
	List<T> getAll();

	/**
	 * 
	 * @Title: get
	 * @Description: 根据id获取对象
	 * @param id
	 * @return
	 * @return: T
	 */
	T get(Long id);

	/**
	 * 
	 * @Title: get
	 * @Description: 根据ids获取对象
	 * @param ids
	 * @return
	 * @return: List<T>
	 */
	List<T> getListByIds(List<Long> ids);

	/**
	 * 
	 * @Title: get
	 * @Description: 根据t获取数据
	 * @param t
	 * @return
	 * @return: T
	 */
	T get(T t);

	/**
	 * 
	 * @Title: getList
	 * @Description: 根据t获取集合
	 * @param t
	 * @return
	 * @return: T
	 */
	List<T> getList(T t);

	/**
	 * 
	 * @Title: get
	 * @Description: 查询
	 * @param property
	 * @param object
	 * @return
	 * @return: T
	 */
	T get(String property, Object value);

	/**
	 * 
	 * @Title: getList
	 * @Description: 查询
	 * @param property
	 * @param object
	 * @return
	 * @return: T
	 */
	List<T> getList(String property, Object value);

	/**
	 * 
	 * @Title: getList
	 * @Description: 查询
	 * @param searchFilters
	 * @return
	 * @return: List<T>
	 */
	List<T> getList(List<SearchFilter> searchFilters);

	/**
	 * 
	 * @Title: getList
	 * @Description: 查询 有排序
	 * @param searchFilters
	 * @param orders
	 * @return
	 * @return: List<T>
	 */
	List<T> getList(List<SearchFilter> searchFilters, List<Order> orders);

	/**
	 * 
	 * @Title: getList
	 * @Description: 分页查询
	 * @param searchFilter
	 * @return
	 * @return: List<T>
	 */
	List<T> getList(SearchFilter... searchFilters);

	/**
	 * 
	 * @Title: find
	 * @Description: 分页查询
	 * @param page
	 * @return
	 * @return: Page
	 */
	Page find(Page page);

	/**
	 * 
	 * @Title: getListByXml
	 * @Description: 查询（可以不依赖于do）
	 * @param filterParams
	 * @return
	 * @return: List
	 */
	List getListByXml(Map<String, Object> filterParams);

	/**
	 * 
	 * @Title: findByXml
	 * @Description: 分页查询（可以不依赖于do）
	 * @param page
	 * @param filterParams
	 * @return
	 * @return: List
	 */
	Page findByXml(Page page, Map<String, Object> filterParams);

	/**
	 * 
	 * @Title: isUnique
	 * @Description: 判断一个值是不是唯一
	 * @param property
	 * @param oldValue
	 * @param newValue
	 * @return
	 * @return: boolean
	 */
	boolean isUnique(String property, String oldValue, String newValue);
}
