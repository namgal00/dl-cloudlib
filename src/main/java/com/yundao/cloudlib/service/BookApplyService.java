package com.yundao.cloudlib.service;

import java.util.List;

import com.yundao.cloudlib.bean.ApplyRecordBean;
import com.yundao.cloudlib.model.teacher.BookApply;

import framework.service.BaseService;
/**
 * 
 * @ClassName: BookApplyService
 * @Description: 电子书交易services
 * @author: wf
 * @date: 2017年6月27日 下午1:32:18
 * @version 1.0
 */
public interface BookApplyService  extends BaseService<BookApply>{
	
	/**
	 * 
	 * @Title: getApplyRecordBeanList
	 * @Description: 把bookID和SchoolID 变成一个对象
	 * @param list
	 * @return
	 * @return: List<ApplyRecordBean>
	 */
	List<ApplyRecordBean> getApplyRecordBeanList(List<BookApply> list);
}
