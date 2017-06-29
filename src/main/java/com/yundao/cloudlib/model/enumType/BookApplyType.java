package com.yundao.cloudlib.model.enumType;

/**
 * 
 * @ClassName: BookApplyType
 * @Description:申请状态
 * @author: wf
 * @date: 2017年6月27日 下午3:24:56
 * @version 1.0
 */
public enum BookApplyType {
	NOTSUBMIT("未提交"),DEALING("待处理"), PASS("申请通过"), NOPASS("申请不通过");
	private BookApplyType(String name) {
		this.name = name;
	}

	private BookApplyType() {
	}

	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
