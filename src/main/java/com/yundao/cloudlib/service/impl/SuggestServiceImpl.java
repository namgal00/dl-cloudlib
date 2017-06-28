package com.yundao.cloudlib.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yundao.cloudlib.mapper.SuggestMapper;
import com.yundao.cloudlib.model.Suggest;
import com.yundao.cloudlib.service.SuggestService;

import framework.service.impl.BaseServiceImpl;

/**
 * 
 * @ClassName: SuggestServiceImpl
 * @Description: 意见反馈service
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月21日 下午3:54:52
 */
@Service
@Transactional(readOnly = true)
public class SuggestServiceImpl extends BaseServiceImpl<Suggest> implements SuggestService {

	@Autowired
	private SuggestMapper suggestMapper;

	@Autowired
	public void setMapper(SuggestMapper mapper) {
		super.setMapper(mapper);
	}
}
