package com.yundao.cloudlib.model.enumType;

public enum IsWorkBatchType {
	no("1"),yes("2");
	
	private IsWorkBatchType(String name){
		this.name=name;
	}
	
	private String name;
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
