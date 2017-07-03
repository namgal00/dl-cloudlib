package com.yundao.cloudlib.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yundao.cloudlib.mapper.TeacherOrderBatchMapper;
import com.yundao.cloudlib.model.teacher.BookBatch;
import com.yundao.cloudlib.service.TeacherOrderBatchService;

import framework.service.impl.BaseServiceImpl;
/**
 * 
 * @ClassName: TeacherOrderBacthService
 * @Description: 老师订单批次
 * @author: wf
 * @date: 2017年7月3日 上午9:15:25
 * @version 1.0
 */
@Service
@Transactional(readOnly = true)
public class TeacherOrderBatchServiceImpl extends BaseServiceImpl<BookBatch>  implements TeacherOrderBatchService {
	@Autowired
	private TeacherOrderBatchMapper teacherOrderBatchMapper;
	
	@Autowired
	public void setMapper(TeacherOrderBatchMapper mapper){
		super.setMapper(mapper);
	}
	

}
