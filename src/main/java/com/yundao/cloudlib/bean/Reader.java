package com.yundao.cloudlib.bean;

import java.io.Serializable;
import java.util.Date;

/**
 * 读者实体类S_reader
 * 
 * @author wf
 */
public class Reader implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;// 读者ID
	private Long readerID; // 读者类型编号
	private String readerTypeCode; // 读者类型代码
	private String barcode; // 读者条形码
	private Long schoolDeptID; // 读者组织Id
	private String schoolCode; // 学校代码
	private String account; // 登录账号
	private String password; // 密码
	private String name; // 名字
	private String identifyCode; // 身份证号
	private Date birthday; // 出生日期
	private String sex; // 性别
	private Integer status; // 读者证状态 1:有效 2：验证 3：挂失
	private Date startDate; // 读者证有效启用日期
	private Date endDate; // 读者证有效期终止日期
	private String address; // 读者住址
	private String postCode; // 邮编
	private String email; // 邮箱
	private String phoneNumber; // 电话号码
	private String readerNative; // 籍贯
	private Long sysUserID; // 操作者ID
	private Date createDate; // 办证时间
	private Long schoolID; // 学校Id
	private String photo; // 照片

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getReaderID() {
		return readerID;
	}

	public void setReaderID(Long readerID) {
		this.readerID = readerID;
	}

	public String getReaderTypeCode() {
		return readerTypeCode;
	}

	public void setReaderTypeCode(String readerTypeCode) {
		this.readerTypeCode = readerTypeCode;
	}

	public String getBarcode() {
		return barcode;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}

	public Long getSchoolDeptID() {
		return schoolDeptID;
	}

	public void setSchoolDeptID(Long schoolDeptID) {
		this.schoolDeptID = schoolDeptID;
	}

	public String getSchoolCode() {
		return schoolCode;
	}

	public void setSchoolCode(String schoolCode) {
		this.schoolCode = schoolCode;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIdentifyCode() {
		return identifyCode;
	}

	public void setIdentifyCode(String identifyCode) {
		this.identifyCode = identifyCode;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getReaderNative() {
		return readerNative;
	}

	public void setReaderNative(String readerNative) {
		this.readerNative = readerNative;
	}

	public Long getSysUserID() {
		return sysUserID;
	}

	public void setSysUserID(Long sysUserID) {
		this.sysUserID = sysUserID;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Long getSchoolID() {
		return schoolID;
	}

	public void setSchoolID(Long schoolID) {
		this.schoolID = schoolID;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
