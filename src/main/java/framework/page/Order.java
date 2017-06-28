package  framework.page;

/**
 * 
 * @ClassName: Order
 * @Description: 排序
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月27日 下午2:20:54
 */
public class Order {
	/**
	 * 排序字段
	 */
	private String field;

	/**
	 * 排序方式
	 */
	private OrderTypeEnum orderType;

	public Order() {
		super();
	}

	public Order(String field, OrderTypeEnum orderType) {
		super();
		this.field = field;
		this.orderType = orderType;
	}

	/* get and set */
	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public OrderTypeEnum getOrderType() {
		return orderType;
	}

	public void setOrderType(OrderTypeEnum orderType) {
		this.orderType = orderType;
	}

}
