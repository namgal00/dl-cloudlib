package framework.page;

import java.util.ArrayList;
import java.util.List;

import com.github.pagehelper.PageInfo;

/**
 * 
 * @ClassName: Page
 * @Description: 分页主要继承了分页插件的pageINfo类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月26日 下午1:56:36
 * @param <T>
 */
public class Page<T> extends PageInfo<T> {

	private static final long serialVersionUID = -5255811398198396881L;

	/**
	 * 过滤条件
	 */
	private List<SearchFilter> searchFilters;
	/**
	 * 样本排序
	 */
	private List<Order> orders;

	public Page() {
		super();
		// 初始化设置
		this.setPageNum(1);// 设置当前页码
		this.setPageSize(10);// 设置每页的记录数
		// this.setTotal(0);// 设置总记录数
		// this.setPages(0);// 设置总页数

		// 默认排序createDate
		if (orders == null)
			orders = new ArrayList<Order>();
		Order order = new Order();
		order.setField("createDate");
		order.setOrderType(OrderTypeEnum.desc);
		orders.add(order);
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	public List<SearchFilter> getSearchFilters() {
		return searchFilters;
	}

	public void setSearchFilters(List<SearchFilter> searchFilters) {
		this.searchFilters = searchFilters;
	}

	/**
	 * 
	 * @Title:Page
	 * @Description:构造函数 为了获取pageInfo的东西
	 * @param list
	 */
	public Page(List list) {
		super(list);
	}

}
