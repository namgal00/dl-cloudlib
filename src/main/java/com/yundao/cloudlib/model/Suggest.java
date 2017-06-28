package com.yundao.cloudlib.model;

import javax.persistence.Table;

import com.yundao.cloudlib.model.enumType.SuggestType;

import framework.model.BaseEntity;

/**
 * 
 * @ClassName: Suggest
 * @Description: TODO
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月21日 下午3:22:46
 */

@Table(name = "t_suggest")
public class Suggest extends BaseEntity {

	private static final long serialVersionUID = -1494362414377886521L;

	/**
	 * 姓名
	 */
	private String name;

	/**
	 * 电话号码
	 */
	private String tel;
	/**
	 * 电子邮件
	 */
	private String email;
	/**
	 * 内容
	 */
	private String msg;

	/**
	 * 类型
	 */
	private SuggestType type;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public SuggestType getType() {
		return type;
	}

	public void setType(SuggestType type) {
		this.type =type ;
	}

}
