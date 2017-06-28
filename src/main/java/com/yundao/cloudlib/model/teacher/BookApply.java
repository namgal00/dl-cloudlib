package com.yundao.cloudlib.model.teacher;

import javax.persistence.Column;
import javax.persistence.Table;

import com.yundao.cloudlib.model.enumType.BookApplyType;

import framework.model.BaseEntity;

/**
 * 
 * @ClassName: BookApply
 * @Description: 学校申请购买书 首先拿到这个需求要先分析 云图那边要提交申请，做为学校要看到什么信息才可以进行下一步操作呢？？
 *               假设是对单本书的申请有没有什么意义？是不是按照批次来？还是批次和单本都是需要的
 * 
 *               方案一：按照批次来进行申请 
 *               1.所以第一步是云图那边需要有批次查询，对批次中的书进行申请购买的操作
 *               需要展示的字段：批次的id，批次的名称，批次的介绍（给学校看批次里面有些什么书），其它必须的字段就不介绍了；这个需要调用dl-cloudlib的接口
 * 
 *               2.在批次的基础上进行操作，需要填写什么字段？
 *               字段：期限（表示这些书购买到什么时候截至），副本数（表示），其它字段就不说了，这个申请的需要调用dl-cloudlib的接口
 * 
 *               3.dl-cloudlib接受到申请后需要有查看的功能，进行线下人工操作后进行数据的处理
 * 
 *               方案二：按照电子书进行申请：其实单条的申请是没有意义的，所以没什么必要，我们可以给他们一个电子书的excel
 *               让学校进行选择，然后导入电子书进行操作。 步骤和第一个相似，
 * 
 * 
 * @author: wf
 * @date: 2017年6月27日 上午10:59:20
 * @version 1.0
 */
@Table(name = "t_book_apply")
public class BookApply extends BaseEntity {
	/*
	 * 学校Id
	 */
	@Column(name = "school_id", nullable = false, unique = true)
	private Long schoolId;

	/*
	 * 书Id
	 */
	@Column(name = "book_id", nullable = false, unique = true)
	private Long bookId;

	/*
	 * 申请状态：DEALING("待处理"),PASS("申请通过"),NOPASS("申请不通过")
	 */
	@Column(name = "apply_status", nullable = false, unique = true)
	private BookApplyType applyStatus;

	public Long getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(Long schoolId) {
		this.schoolId = schoolId;
	}

	public Long getBookId() {
		return bookId;
	}

	public void setBookId(Long bookId) {
		this.bookId = bookId;
	}

	public BookApplyType getApplyStatus() {
		return applyStatus;
	}

	public void setApplyStatus(BookApplyType applyStatus) {
		this.applyStatus = applyStatus;
	}

}
