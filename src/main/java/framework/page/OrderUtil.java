package  framework.page;

import java.util.ArrayList;
import java.util.List;

/**
 * 
 * @ClassName: OrderUtil
 * @Description: 排序帮助类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月8日 下午3:22:42
 */
public class OrderUtil {

	private static OrderUtil orderUtil;

	private static List<Order> orders;

	/**
	 * 
	 * @Title: getInstance
	 * @Description: TODO
	 * @return
	 * @return: OrderUtil
	 */
	public static OrderUtil getInstance() {
		if (orderUtil == null) {
			orderUtil = new OrderUtil();
			orderUtil.orders = new ArrayList<Order>();
		} else {
			orderUtil.orders.clear();
		}
		return orderUtil;
	}

	/**
	 * 
	 * @Title: getOrders
	 * @Description: 获取排序的集合
	 * @return
	 * @return: List<Order>
	 */
	public List<Order> getOrders() {
		return this.orders;
	}

	/**
	 * 
	 * @Title: asc
	 * @Description: 升序
	 * @param property
	 * @return
	 * @return: OrderUtil
	 */
	public OrderUtil asc(String property) {
		this.orders.add(new Order(property, OrderTypeEnum.asc));
		return this;
	}

	/**
	 * 
	 * @Title: desc
	 * @Description: 降序
	 * @param property
	 * @return
	 * @return: OrderUtil
	 */
	public OrderUtil desc(String property) {
		this.orders.add(new Order(property, OrderTypeEnum.desc));
		return this;
	}
}
