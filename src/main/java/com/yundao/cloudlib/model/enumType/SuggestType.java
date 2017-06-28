package com.yundao.cloudlib.model.enumType;

/**
 * 
 * @ClassName: SuggestType
 * @Description: 意见状态
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月21日 下午3:20:37
 */
public enum SuggestType {
	untreated("未处理"), processed("已处理");

	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	private SuggestType(String name) {
		this.name = name;
	}


}
