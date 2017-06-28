package com.yundao.cloudlib.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yundao.cloudlib.mapper.AdminMapper;
import com.yundao.cloudlib.model.rbac.Admin;
import com.yundao.cloudlib.service.AdminService;

import framework.service.impl.BaseServiceImpl;

/**
 * 
 * @ClassName: AdminServiceImpl
 * @Description: 用户serviceimpl
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月1日 上午11:30:42
 */
@Service
@Transactional(readOnly = true)
public class AdminServiceImpl extends BaseServiceImpl<Admin> implements AdminService {
	
	@Autowired
	private AdminMapper AdminMapper;
	
	@Autowired
	public void setMapper(AdminMapper mapper) {
		super.setMapper(mapper);
	}

}
