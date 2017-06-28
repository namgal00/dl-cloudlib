package com.yundao.cloudlib.model.rbac;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import framework.model.BaseEntity;
import framework.util.ValidationUtil;

/**
 * 
 * @ClassName: Admin
 * @Description: 用户
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月31日 下午8:56:55
 */
@Table(name = "t_rbac_admin")
public class Admin extends BaseEntity {
	private static final long serialVersionUID = 2664787621794353183L;

	/**
	 * 用户名
	 */
	@NotBlank(message = "用户名不能为空")
	@Column(nullable = false, unique = true)
	private String name;

	/**
	 * 电话
	 */
	@NotBlank(message = "电话号码不能为空")
	@Column(nullable = false, unique = true)
	private String phone;

	/**
	 * 邮箱
	 */
	@Email(message = "邮箱格式不正确")
	@NotBlank(message = "邮箱不能为空")
	@Column(nullable = false, unique = true)
	private String email;

	/**
	 * 密码
	 */
	@NotBlank(message = "密码不能为空")
	@Column(nullable = false)
	private String password;

	/**
	 * 最后登入的时间
	 */
	@NotNull(message = "最后登入的时间不能为空")
	@Column(name = "last_login_date")
	private Date lastLoginDate;
	/**
	 * 最后登入的ip
	 */
	@NotBlank(message = "最后登入的ip不能为空")
	@Column(name = "last_login_id")
	private String lastLoginIp;
	/**
	 * 登入的失败次数
	 */
	@Column(name = "login_failure_count")
	@NotNull(message = "登入的失败次数不能为空")
	private Integer loginFailureCount;

	/**
	 * 上锁时间
	 */
	@Column(name = "locked_date")
	private Date lockedDate;

	/**
	 * 账户锁定
	 */
	@Column(name = "account_locked")
	@NotNull
	private Boolean accountLocked;

	/**
	 * 账户激活
	 */
	@Column(name = "account_enabled")
	@NotNull
	private Boolean accountEnabled;

	/**
	 * 超级管理员
	 */
	@Column(name = "supper_admin")
	@NotNull(message = "是否是超级管理员不能为空")
	private Boolean superAdmin;

	/* link */
	/**
	 * 部门id
	 */
	@NotNull(message = "部门id不能为空")
	@Column(name = "dept_id")
	private Long deptId;
	/**
	 * 角色id
	 */
	@NotNull(message = "角色id不能为空")
	@Column(name = "role_id")
	private Long roleId;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getLastLoginDate() {
		return lastLoginDate;
	}

	public void setLastLoginDate(Date lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}

	public String getLastLoginIp() {
		return lastLoginIp;
	}

	public void setLastLoginIp(String lastLoginIp) {
		this.lastLoginIp = lastLoginIp;
	}

	public Integer getLoginFailureCount() {
		return loginFailureCount;
	}

	public void setLoginFailureCount(Integer loginFailureCount) {
		this.loginFailureCount = loginFailureCount;
	}

	public Date getLockedDate() {
		return lockedDate;
	}

	public void setLockedDate(Date lockedDate) {
		this.lockedDate = lockedDate;
	}

	public Boolean getSuperAdmin() {
		return superAdmin;
	}

	public void setSuperAdmin(Boolean superAdmin) {
		this.superAdmin = superAdmin;
	}

	public Long getDeptId() {
		return deptId;
	}

	public void setDeptId(Long deptId) {
		this.deptId = deptId;
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public static void main(String[] args) {
		Admin admin = new Admin();
		admin.setId(10L);
		admin.setCreateDate(new Date());
		ValidationUtil.validation(admin);
	}
}
