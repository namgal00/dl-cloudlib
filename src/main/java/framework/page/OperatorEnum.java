package  framework.page;

/**
 * 
 * @ClassName: Operator
 * @Description: 操作符号
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月27日 下午2:29:26
 */
public enum OperatorEnum {

	EQ("="), LIKE("like"), GT(">"), LT("<"), NE("<>"), GE(">="), LE("<="), IN("in"), ISNULL("is null"), ISNOTNULL("is not null"), ENUM("enum"), NOTIN("not in"),NOTLIKE("not like");
	private OperatorEnum(String name) {
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
