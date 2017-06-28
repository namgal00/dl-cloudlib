package com.yundao.cloudlib.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yundao.cloudlib.mapper.BatchMapper;
import com.yundao.cloudlib.model.Batch;
import com.yundao.cloudlib.service.BatchService;

import framework.service.impl.BaseServiceImpl;

/**
 * 
 * @ClassName: BatchServiceImpl
 * @Description: 批次管理
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月14日 下午1:08:51
 */
@Service
@Transactional(readOnly = true)
public class BatchServiceImpl extends BaseServiceImpl<Batch> implements BatchService {

	@Autowired
	private BatchMapper batchMapper;

	@Autowired
	public void setMapper(BatchMapper mapper) {
		super.setMapper(mapper);
	}

}
