package com.yundao.cloudlib.controller.admin;

import com.yundao.cloudlib.Constant;
import com.yundao.cloudlib.model.rbac.Admin;

import framework.mvc.StandardController;
import framework.util.RequestUtil;

/**
 * 
 * @ClassName: BaseController
 * @Description: 基类controller
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月30日 下午7:40:56
 */
public abstract class BaseController extends StandardController {
	
	public static final String prefix = "/admin";

	/**
	 * 
	 * @Title: getAdmin
	 * @Description: 获取当前登入的用户
	 * @return
	 * @return: Admin
	 */
	public Admin getAdmin() {
		Object sessionAttr = RequestUtil.getSessionAttr(Constant.CURRENT_ADMIN);
		if (sessionAttr == null) {
			return null;
		} else {
			return (Admin) sessionAttr;
		}
	}
}
