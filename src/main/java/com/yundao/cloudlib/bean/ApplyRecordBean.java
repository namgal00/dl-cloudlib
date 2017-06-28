package com.yundao.cloudlib.bean;
/**
 * 
 * @ClassName: ApplyRecordBean
 * @Description: 电子书交易实体类
 * @author: wf
 * @date: 2017年6月27日 下午3:01:01
 * @version 1.0
 */
public class ApplyRecordBean {
	/*
	 * id
	 */
	private Long id;
	
	/*
	 * 书名
	 */
	private String bookName;
	
	/*
	 * 学校名
	 */
	private String schoolName;
	
	/*
	 * 申请状态
	 */
	private String applyStatus;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public String getApplyStatus() {
		return applyStatus;
	}

	public void setApplyStatus(String applyStatus) {
		this.applyStatus = applyStatus;
	}
	
	
	
}
