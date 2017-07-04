package com.yundao.cloudlib.model.teacher;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Table;

import com.yundao.cloudlib.model.enumType.BookBatchType;

import framework.model.BaseEntity;

/**
 * 
 * @ClassName: BookBatch
 * @Description: 图书的批次
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月28日 下午9:24:20
 */
@Table(name = "t_teacher_book_batch")
public class BookBatch extends BaseEntity {

	/**
	 * 学校id
	 */
	@Column(name = "school_id", unique = true, nullable = true)
	private Long schoolId;

	/**
	 * 批次名称
	 */
	@Column(name = "name", nullable = true)
	private String name;
	/**
	 * 默认预算
	 */
	@Column(name = "budget", nullable = true)
	private BigDecimal budget;
	/**
	 * 联系人
	 */
	@Column(name = "contact", nullable = true)
	private String contact;
	/**
	 * 联系方式
	 */
	@Column(name = "contact_way", nullable = true)
	private String contactWay;
	/**
	 * 批次状态
	 */
	@Column(name = "status", nullable = true)
	private BookBatchType status;
	/**
	 * 备注
	 */
	@Column(name = "message")
	private String message;
	
	
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public BookBatchType getStatus() {
		return status;
	}

	public void setStatus(BookBatchType status) {
		this.status = status;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getContactWay() {
		return contactWay;
	}

	public void setContactWay(String contactWay) {
		this.contactWay = contactWay;
	}

	public Long getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(Long schoolId) {
		this.schoolId = schoolId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getBudget() {
		return budget;
	}

	public void setBudget(BigDecimal budget) {
		this.budget = budget;
	}

}
