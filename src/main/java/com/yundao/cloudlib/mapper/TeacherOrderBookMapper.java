package com.yundao.cloudlib.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.yundao.cloudlib.model.teacher.BookApply;

import framework.mapper.MyMapper;
/**
 * 
 * @ClassName: TeacherOrderBookMapper
 * @Description: 老师订购电子书
 * @author: wf
 * @date: 2017年7月6日 下午1:47:59
 * @version 1.0
 */
public interface TeacherOrderBookMapper extends MyMapper<BookApply>{
	
	/**
	 * 
	 * @Title: getNumber
	 * @Description: 图书的种类，册数，总价格
	 * @param batchId
	 * @return
	 * @return: Map<String,Object>
	 */
	Map<String ,Object> getNumber(@Param("bookBatchId") Long bookBatchId);
}
