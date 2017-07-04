package com.yundao.cloudlib.model.enumType;
/**
 * 
 * @ClassName: BookBatchType
 * @Description: 订购批次状态
 * @author: wf
 * @date: 2017年7月3日 上午11:16:03
 * @version 1.0
 */
public enum BookBatchType {
	onunit("待操作"),reserve("预定"),review("审核"),complete("完成");
	private BookBatchType(String name){
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
