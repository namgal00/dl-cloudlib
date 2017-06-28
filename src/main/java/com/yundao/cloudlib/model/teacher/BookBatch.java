package com.yundao.cloudlib.model.teacher;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Table;

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
	 * 默认金额
	 */
	@Column(name = "price", nullable = true)
	private BigDecimal price;

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

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

}
