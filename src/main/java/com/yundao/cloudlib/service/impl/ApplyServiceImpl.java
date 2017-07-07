package com.yundao.cloudlib.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yundao.cloudlib.mapper.ApplyMapper;
import com.yundao.cloudlib.model.teacher.BookBatch;
import com.yundao.cloudlib.service.ApplyService;

import framework.service.impl.BaseServiceImpl;

@Service
@Transactional(readOnly = true)
public class ApplyServiceImpl extends BaseServiceImpl<BookBatch> implements ApplyService {
	@Autowired
	private ApplyMapper applyMapper;

	@Autowired
	public void setMapper(ApplyMapper mapper) {
		super.setMapper(mapper);
	}

	
}
