package com.yundao.cloudlib.bean;

import java.io.Serializable;
/**
 * 学校类
 * @ClassName: School
 * @Description: TODO
 * @author: wf
 * @date: 2017年6月13日 下午4:33:31
 * @version 1.0
 */
public class School implements Serializable{
	private static final long serialVersionUID = 1L;
	/*
	 * 学校ID
	 */
	private Long id;
	
	/*
	 * 学校名称
	 */
	private String schoolName;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSchoolName() {
		return schoolName;
	}
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	
}
