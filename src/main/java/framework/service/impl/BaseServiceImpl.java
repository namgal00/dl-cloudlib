package framework.service.impl;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import framework.mapper.MyMapper;
import framework.model.BaseEntity;
import framework.model.PriorityEntity;
import framework.page.OperatorEnum;
import framework.page.Order;
import framework.page.Page;
import framework.page.SearchFilter;
import framework.service.BaseService;
import framework.util.ValidationUtil;
import tk.mybatis.mapper.entity.Example;
import tk.mybatis.mapper.entity.Example.Criteria;
import tk.mybatis.mapper.entity.Example.OrderBy;

/**
 * 
 * @ClassName: BaseServiceImpl
 * @Description: service基类实现类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月30日 上午9:25:29
 */
public class BaseServiceImpl<T extends BaseEntity> implements BaseService<T> {

	private MyMapper<T> mapper;

	/**
	 * 
	 * @Title: getNextId
	 * @Description: 获取下一个id 这个是和mycat结合的时候因为mycat不能实现自增长而设置的
	 * @return
	 * @return: Long
	 */
	public Long getNextId() {
		return mapper.selectNextId();
	}

	/**
	 * 
	 * @Title: save
	 * @Description: 保存一个实体，null的属性也会保存，不会使用数据库默认值
	 * @param t
	 * @return
	 * @see framework.service.BaseService#save( framework.model.BaseEntity)
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Integer save(T t) {
		// 新增的时候自动设置日期
		setCreateDate(t);
		// 验证
		ValidationUtil.validation(t);
		return this.mapper.insert(t);
	}

	/**
	 * 
	 * @Title: saveSelective
	 * @Description: 保存一个实体，null的属性不会保存，会使用数据库默认值
	 * @param t
	 * @return
	 * @see framework.service.BaseService#saveSelective(
	 *      framework.model.BaseEntity)
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Integer saveSelective(T t) {
		setCreateDate(t);
		return this.mapper.insertSelective(t);
	}

	/**
	 * 
	 * @Title: save
	 * @Description: 批量插入，支持批量插入的数据库可以使用，例如MySQL,H2等，另外该接口限制实体包含`id`属性并且必须为自增列
	 * @param ts
	 * @return
	 * @see framework.service.BaseService#save(java.util.List)
	 */
	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public Integer save(List<T> ts) {
		for (T t : ts) {
			setCreateDate(t);
			ValidationUtil.validation(t);
		}
		return this.mapper.insertList(ts);
	}

	/**
	 * 
	 * @Title: remove
	 * @Description: 根据id删除
	 * @param id
	 * @return
	 * @see framework.service.BaseService#remove(java.lang.Long)
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Integer remove(Long id) {
		Example example = new Example(getTClass());
		Criteria createCriteria = example.createCriteria();
		createCriteria.andEqualTo("id", id);
		return this.mapper.deleteByExample(example);
	}

	/**
	 * 
	 * @Title: remove
	 * @Description: 根据ids删除
	 * @param ids
	 * @return
	 * @see framework.service.BaseService#remove(java.util.List)
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Integer remove(List<Long> ids) {
		Example example = new Example(getTClass());
		Criteria createCriteria = example.createCriteria();
		createCriteria.andIn("id", ids);
		return this.mapper.deleteByExample(example);
	}

	/**
	 * 
	 * @Title: remove
	 * @Description: 根据实体属性作为条件进行删除，查询条件使用等号
	 * @param t
	 * @return
	 * @see framework.service.BaseService#remove( framework.model.BaseEntity)
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Integer remove(T t) {
		return this.mapper.delete(t);
	}

	/**
	 * 
	 * @Title: removeByFilters
	 * @Description: 根据过滤条件进行删除
	 * @param searchFilters
	 * @return
	 * @see framework.service.BaseService#removeByFilters(java.util.List)
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Integer removeByFilters(List<SearchFilter> searchFilters) {
		Example example = getExample(searchFilters);
		return this.mapper.deleteByExample(example);
	}

	/**
	 * 
	 * @Title: update
	 * @Description: 更新根据主见 null值会被更新
	 * @param t
	 * @return
	 * @see framework.service.BaseService#update( framework.model.BaseEntity)
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Integer update(T t) {
		setModifyDate(t);
		return this.mapper.updateByPrimaryKey(t);
	}

	/**
	 * 
	 * @Title: updateSelective
	 * @Description: 根据主键 null不会被更新
	 * @param t
	 * @return
	 * @see framework.service.BaseService#updateSelective(
	 *      framework.model.BaseEntity)
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Integer updateSelective(T t) {
		setModifyDate(t);
		return this.mapper.updateByPrimaryKeySelective(t);
	}

	/**
	 * 
	 * @Title: update
	 * @Description: 工具条件更新 null值也会被更新
	 * @param t
	 * @param searchFilters
	 * @return
	 * @see framework.service.BaseService#update( framework.model.BaseEntity,
	 *      java.util.List)
	 */
	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public Integer update(T t, List<SearchFilter> searchFilters) {
		Example example = getExample(searchFilters);
		setModifyDate(t);
		return this.mapper.updateByExample(t, example);
	}

	/**
	 * 
	 * @Title: updateSelection
	 * @Description: 根据条件更新 null值不会被更新
	 * @param t
	 * @param searchFilters
	 * @return
	 * @see framework.service.BaseService#updateSelection(
	 *      framework.model.BaseEntity, java.util.List)
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Integer updateSelective(T t, List<SearchFilter> searchFilters) {
		Example example = getExample(searchFilters);
		setModifyDate(t);
		return this.mapper.updateByExampleSelective(t, example);
	}

	/**
	 * 
	 * @Title: getAll
	 * @Description: 获取所有
	 * @return
	 * @see framework.service.BaseService#getAll()
	 */
	@Override
	public List<T> getAll() {
		return this.mapper.selectAll();
	}

	/**
	 * 
	 * @Title: get
	 * @Description: 根据id 查询
	 * @param id
	 * @return
	 * @see framework.service.BaseService#get(java.lang.Long)
	 */
	@Override
	public T get(Long id) {
		return this.mapper.selectByPrimaryKey(id);
	}

	/**
	 * 
	 * @Title: getListByIds
	 * @Description: 根据id获取
	 * @param ids
	 * @return
	 * @see framework.service.BaseService#getListByIds(java.util.List)
	 */
	@Override
	public List<T> getListByIds(List<Long> ids) {
		Example example = new Example(getTClass());
		Criteria createCriteria = example.createCriteria();
		createCriteria.andIn("id", ids);
		return this.mapper.selectByExample(example);
	}

	/**
	 * 
	 * @Title: get
	 * @Description: 获取对象
	 * @param t
	 * @return
	 * @see framework.service.BaseService#get( framework.model.BaseEntity)
	 */
	@Override
	public T get(T t) {
		return this.mapper.selectOne(t);
	}

	/**
	 * 
	 * @Title: getList
	 * @Description: 获取集合
	 * @param t
	 * @return
	 * @see framework.service.BaseService#getList( framework.model.BaseEntity)
	 */
	@Override
	public List<T> getList(T t) {
		return null;
	}

	/**
	 * 
	 * @Title: get
	 * @Description: 查询
	 * @param property
	 * @param object
	 * @return
	 * @see framework.service.BaseService#get(java.lang.String,
	 *      java.lang.Object)
	 */
	@Override
	public T get(String property, Object value) {
		List<T> list = getList(property, value);
		if (list != null && list.size() > 0) {
			return list.get(0);
		}
		return null;
	}

	/**
	 * 
	 * @Title: getList
	 * @Description: 获取查询结果
	 * @param property
	 * @param value
	 * @return
	 * @see framework.service.BaseService#getList(java.lang.String,
	 *      java.lang.Object)
	 */
	@Override
	public List<T> getList(String property, Object value) {
		if (value == null)
			return null;
		SearchFilter sf = new SearchFilter();
		List<SearchFilter> sfList = new ArrayList<SearchFilter>();
		sf.setFieldName(property);
		sf.setValue(value);
		if (value instanceof Collection) {
			sf.setOperator(OperatorEnum.IN);
		} else {
			sf.setOperator(OperatorEnum.EQ);
		}
		sfList.add(sf);

		return getList(sfList);
	}

	/**
	 * 
	 * @Title: getList
	 * @Description: 查询获取集合
	 * @param searchFilters
	 * @return
	 * @see framework.service.BaseService#getList(java.util.List)
	 */
	@Override
	public List<T> getList(List<SearchFilter> searchFilters) {
		Example example = getExample(searchFilters);
		return this.mapper.selectByExample(example);
	}

	/**
	 * 
	 * @Title: getList
	 * @Description: 查询获取集合
	 * @param searchFilter
	 * @return
	 * @see framework.service.BaseService#getList(
	 *      framework.page.SearchFilter[])
	 */
	@Override
	public List<T> getList(SearchFilter... searchFilters) {
		List<SearchFilter> sfList = new ArrayList<SearchFilter>();
		for (SearchFilter searchFilter : searchFilters) {
			sfList.add(searchFilter);
		}

		return getList(sfList);
	}

	/**
	 * 
	 * @Title: getList
	 * @Description: 查询有排序
	 * @param searchFilters
	 * @param orders
	 * @return
	 * @see framework.service.BaseService#getList(java.util.List,
	 *      java.util.List)
	 */
	@Override
	public List<T> getList(List<SearchFilter> searchFilters, List<Order> orders) {
		Example example = getExample(searchFilters);
		setExample(example, orders);
		return this.mapper.selectByExample(example);
	}

	/**
	 * 
	 * @Title: find
	 * @Description: 分页查询
	 * @param page
	 * @return
	 * @see framework.service.BaseService#find( framework.page.Page)
	 */
	@Override
	public Page find(Page page) {
		PageHelper.startPage(page.getPageNum(), page.getPageSize());
		List list = getList(page.getSearchFilters(), page.getOrders());

		Page pageSQL = new Page(list);
		pageSQL.setSearchFilters(page.getSearchFilters());
		pageSQL.setOrders(page.getOrders());

		return pageSQL;
	}

	/**
	 * 
	 * @Title: getListByXml
	 * @Description: 不依赖于do进行查询
	 * @param filterParams
	 * @return
	 * @see framework.service.BaseService#getListByXml(java.util.Map)
	 */
	@Override
	public List getListByXml(Map<String, Object> filterParams) {
		// xml中的配置
		return this.mapper.getListByXml(filterParams);
	}

	/**
	 * 
	 * @Title: findByXml
	 * @Description: 分页查询 不依赖于do进行查询
	 * @param page
	 * @param filterParams
	 * @return
	 * @see framework.service.BaseService#findByXml( framework.page.Page,
	 *      java.util.Map)
	 */
	@Override
	public Page findByXml(Page page, Map<String, Object> filterParams) {
		PageHelper.startPage(page.getPageNum(), page.getPageSize());
		List listByXml = getListByXml(filterParams);
		page.setList(listByXml);
		return page;
	}

	/**
	 * 
	 * @Title: isUnique
	 * @Description: 判断一个值是不是唯一
	 * @param property
	 * @param oldValue
	 * @param newValue
	 * @return
	 * @see framework.service.BaseService#isUnique(java.lang.String,
	 *      java.lang.String, java.lang.String)
	 */
	public boolean isUnique(String property, String oldValue, String newValue) {
		Assert.hasText(property, "propertyName must not be empty");
		Assert.notNull(newValue, "newValue is required");
		if (newValue == oldValue || newValue.equals(oldValue)) {
			return true;
		}
		if (newValue instanceof String) {
			if (oldValue != null && StringUtils.equalsIgnoreCase((String) oldValue, (String) newValue)) {
				return true;
			}
		}
		T t = get(property, newValue);
		return (t == null);
	}

	/**
	 * 
	 * @Title: setDate
	 * @Description: 设置时间的默认值
	 * @param t
	 * @return: void
	 */
	private void setCreateDate(T t) {
		t.setCreateDate(new Date());
		t.setModifyDate(t.getCreateDate());
	}

	/**
	 * 
	 * @Title: setModifyDate
	 * @Description: 设置修改的默认时间
	 * @param t
	 * @return: void
	 */
	private void setModifyDate(T t) {
		t.setModifyDate(new Date());
	}

	/**
	 * 
	 * @Title: getExample
	 * @Description: searchfilter --> example
	 * @param searchFilters
	 * @return
	 * @return: Example
	 */
	private Example getExample(List<SearchFilter> searchFilters) {
		Example example = new Example(getTClass());
		Criteria createCriteria = example.createCriteria();
		if (searchFilters != null && searchFilters.size() > 0) {
			for (SearchFilter searchFilter : searchFilters) {
				String property = searchFilter.getFieldName();
				Object value = searchFilter.getValue();
				OperatorEnum operator = searchFilter.getOperator();
				Boolean ignoreCase = searchFilter.getIgnoreCase();
				List values = searchFilter.getValues();

				switch (operator) {
				case EQ:
					createCriteria.andEqualTo(property, value);
					break;
				case GT:
					createCriteria.andGreaterThan(property, value);
					break;
				case GE:
					createCriteria.andGreaterThanOrEqualTo(property, value);
					break;
				case IN:
					createCriteria.andIn(property, values);
					break;
				case ISNOTNULL:
					createCriteria.andIsNotNull(property);
					break;
				case ISNULL:
					createCriteria.andIsNull(property);
					break;
				case LT:
					createCriteria.andLessThan(property, value);
					break;
				case LE:
					createCriteria.andLessThanOrEqualTo(property, value);
					break;
				case LIKE:
					createCriteria.andLike(property, "%" + (String) value + "%");
					break;
				case NE:
					createCriteria.andNotEqualTo(property, value);
					break;
				case NOTIN:
					createCriteria.andNotIn(property, values);
					break;
				case NOTLIKE:
					createCriteria.andNotLike(property, "%" + (String) value + "%");
					break;
				default:
					if (value != null) {
						createCriteria.andCondition(property, value);
					} else {
						createCriteria.andCondition(property);
					}
					break;
				}

			}
		}

		return example;

	}

	/**
	 * 
	 * @Title: setExample
	 * @Description: 设置排序
	 * @param example
	 * @param orders
	 * @return
	 * @return: Example
	 */
	private Example setExample(Example example, List<Order> orders) {
		Class _class = getTClass();
		OrderBy ob = null;
		if (orders == null || orders.size() <= 0) {
			// 默认排序
			ob = example.orderBy("createDate").desc();
		} else {
			for (Order order : orders) {
				if (ob == null) {
					ob = example.orderBy(order.getField());
				} else {
					ob.orderBy(order.getField());
				}

				switch (order.getOrderType()) {
				case asc:
					ob.asc();
					break;
				case desc:
					ob.desc();
					break;
				default:
					break;
				}
			}
		}
		try {
			if (_class.newInstance() instanceof PriorityEntity) {
				ob.orderBy("priority").asc();
			}
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		return example;
	}

	/**
	 * 
	 * @Title: getTClass
	 * @Description: 获取实体类的Class
	 * @return
	 * @return: Class
	 */
	private Class getTClass() {

		// 返回表示此 Class 所表示的实体（类、接口、基本类型或 void）的直接超类的 Type。
		Type genType = getClass().getGenericSuperclass();

		if (!(genType instanceof ParameterizedType)) {
			return Object.class;
		}
		// 返回表示此类型实际类型参数的 Type 对象的数组。
		Type[] params = ((ParameterizedType) genType).getActualTypeArguments();

		return (Class) params[0];
	}

	/* get and set */
	public MyMapper<T> getMapper() {
		return mapper;
	}

	public void setMapper(MyMapper<T> mapper) {
		this.mapper = mapper;
	}

}
