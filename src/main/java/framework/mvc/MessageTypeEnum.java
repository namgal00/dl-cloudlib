package framework.mvc;

/**
 * 
 * @ClassName: MessageType
 * @Description: 消息的枚举类型<br/>
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月25日 上午10:19:30
 */
public enum MessageTypeEnum {
	/**
	 * 成功
	 */
	SUCCESS("操作成功"),
	/**
	 * 警告
	 */
	WARN("操作警告"),
	/**
	 * 错误
	 */
	ERROR("操作错误");

	private MessageTypeEnum(String name) {
		this.name = name;
	}

	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
