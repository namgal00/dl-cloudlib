package com.yundao.cloudlib.bean;

/**
 * 
 * @ClassName: Teacher
 * @Description: 教师
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年7月1日 上午10:05:23
 */
public class Teacher {
	/**
	 * id
	 */
	private Long id;
	/**
	 * 名称
	 */
	private String name;
	/**
	 * 学校id
	 */
	private Long schoolId;
	/**
	 * 学校名称
	 */
	private String schoolName;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(Long schoolId) {
		this.schoolId = schoolId;
	}

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

}
