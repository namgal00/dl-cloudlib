package com.yundao.cloudlib.model;

import javax.persistence.Column;
import javax.persistence.Table;

import framework.model.BaseEntity;

/**
 * 
 * @ClassName: Batch
 * @Description: 批次管理
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月14日 下午12:54:44
 */
@Table(name = "t_batch")
public class Batch extends BaseEntity {

	private static final long serialVersionUID = 744806175644617001L;

	/**
	 * 批次名称
	 */
	@Column(nullable = false, unique = true)
	private String name;

	/**
	 * 描述
	 */
	private String descript;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescript() {
		return descript;
	}

	public void setDescript(String descript) {
		this.descript = descript;
	}

}
