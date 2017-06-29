package com.yundao.cloudlib.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Table;

import framework.excel.ExcelResources;
import framework.model.BaseEntity;

/**
 * 
 * @ClassName: Book
 * @Description: 电子书（这个只是逻辑上的电子书）
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月13日 下午3:05:35
 */
@Table(name = "t_book")
public class Book extends BaseEntity {

	private static final long serialVersionUID = -8982808974992840069L;
	/**
	 * isbn
	 */
	@Column(nullable = false, unique = true)
	private String isbn;
	/**
	 * 题名
	 */
	@Column(nullable = false, unique = true)
	private String title;
	/**
	 * 出版社
	 */
	@Column(nullable = false, unique = true)
	private String press;
	/**
	 * 作者
	 */
	@Column(nullable = false, unique = true)
	private String author;
	/**
	 * 出版时间
	 */
	@Column(name = "publication_date", nullable = false, unique = true)
	private String publicationDate;
	/**
	 * 分类号
	 */
	@Column(nullable = false, unique = true)
	private String classification;
	/**
	 * 文件地址
	 */
	@Column(nullable = false)
	private String path;
	/**
	 * 是否启用
	 */
	@Column(nullable = false)
	private Boolean enable;
	/**
	 * 是否上架
	 */
	@Column(nullable = false)
	private Boolean shelves;
	/**
	 * 是否免费
	 */
	@Column(nullable = false)
	private Boolean free;
	
	/**
	 * 单价
	 */
	@Column(nullable = false)
	private BigDecimal price;

	/******** link *********/

	@Column(name = "batch_id", nullable = false)
	private Long batchId;

	public Boolean getShelves() {
		return shelves;
	}

	public void setShelves(Boolean shelves) {
		this.shelves = shelves;
	}

	public Boolean getFree() {
		return free;
	}

	public void setFree(Boolean free) {
		this.free = free;
	}

	public Long getBatchId() {
		return batchId;
	}

	public void setBatchId(Long batchId) {
		this.batchId = batchId;
	}

	@ExcelResources(order = 2, title = "ISBN")
	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	@ExcelResources(order = 3, title = "书名")
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@ExcelResources(order = 4, title = "出版社")
	public String getPress() {
		return press;
	}

	public void setPress(String press) {
		this.press = press;
	}

	@ExcelResources(order = 5, title = "作者")
	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	@ExcelResources(order = 6, title = "出版时间")
	public String getPublicationDate() {
		return publicationDate;
	}

	public void setPublicationDate(String publicationDate) {
		this.publicationDate = publicationDate;
	}

	@ExcelResources(order = 7, title = "分类号")
	public String getClassification() {
		return classification;
	}

	public void setClassification(String classification) {
		this.classification = classification;
	}

	@ExcelResources(order = 1, title = "文件名")
	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public Boolean getEnable() {
		return enable;
	}

	public void setEnable(Boolean enable) {
		this.enable = enable;
	}

}
