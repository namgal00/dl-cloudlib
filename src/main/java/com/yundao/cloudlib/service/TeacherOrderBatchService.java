package com.yundao.cloudlib.service;

import com.yundao.cloudlib.model.enumType.BookBatchType;
import com.yundao.cloudlib.model.teacher.BookBatch;

import framework.service.BaseService;

/**
 * 
 * @ClassName: TeacherOrderBacthService
 * @Description: 老师订单批次
 * @author: wf
 * @date: 2017年7月3日 上午9:15:25
 * @version 1.0
 */
public interface TeacherOrderBatchService extends BaseService<BookBatch> {

	/**
	 * 
	 * @Title: getOrderBatch
	 * @Description: 获取当前学校的的预定批次(每个学校有且只有一个预定批次)
	 * @param schoolId
	 * @param bbt
	 * @return: void
	 */
	BookBatch getOrderBatch(Long schoolId, BookBatchType bbt);
}
