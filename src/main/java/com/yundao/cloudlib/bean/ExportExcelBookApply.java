package com.yundao.cloudlib.bean;

import java.math.BigDecimal;

import framework.excel.ExcelResources;

/**
 * 
 * @ClassName: ExportExcel
 * @Description: 导出电子书bean
 * @author: wf
 * @date: 2017年7月7日 上午10:26:06
 * @version 1.0
 */
public class ExportExcelBookApply {
	/*
	 * isbn
	 */
	private String isbn;
	/*
	 * 分类号
	 */
	private String classification;
	/*
	 * 题名
	 */
	private String title;
	/*
	 * 作者
	 */
	private String author;
	/*
	 * 出版社
	 */
	private String press;
	/*
	 * 出版时间
	 */
	private String publicationDate;
	/*
	 * 单价
	 */
	private BigDecimal price;

	/*
	 * 副本数
	 */
	private Long bookReplication;
	
	@ExcelResources(title = "isbn", order = 1)
	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	@ExcelResources(title = "分类号", order = 2)
	public String getClassification() {
		return classification;
	}

	public void setClassification(String classification) {
		this.classification = classification;
	}
	@ExcelResources(title = "提名", order = 3)
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	@ExcelResources(title = "著者", order = 4)
	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}
	@ExcelResources(title = "出版社", order = 5)
	public String getPress() {
		return press;
	}

	public void setPress(String press) {
		this.press = press;
	}
	@ExcelResources(title = "出版社时间", order = 6)
	public String getPublicationDate() {
		return publicationDate;
	}

	public void setPublicationDate(String publicationDate) {
		this.publicationDate = publicationDate;
	}
	@ExcelResources(title = "单价", order = 7)
	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	@ExcelResources(title = "复本数", order = 8)
	public Long getBookReplication() {
		return bookReplication;
	}

	public void setBookReplication(Long bookReplication) {
		this.bookReplication = bookReplication;
	}
	
	
	
}
