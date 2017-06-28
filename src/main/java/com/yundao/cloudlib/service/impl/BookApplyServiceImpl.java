package com.yundao.cloudlib.service.impl;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yundao.cloudlib.bean.ApplyRecordBean;
import com.yundao.cloudlib.bean.School;
import com.yundao.cloudlib.mapper.BookApplyMapper;
import com.yundao.cloudlib.model.Book;
import com.yundao.cloudlib.model.teacher.BookApply;
import com.yundao.cloudlib.service.BookApplyService;
import com.yundao.cloudlib.service.BookService;
import com.yundao.cloudlib.service.JdbcTemplateService;

import framework.service.impl.BaseServiceImpl;
/**
 * 
 * @ClassName: BookApplyServiceImpl
 * @Description: 电子书交易
 * @author: wf
 * @date: 2017年6月27日 下午1:30:55
 * @version 1.0
 */
@Service
@Transactional(readOnly = true)
public class BookApplyServiceImpl extends BaseServiceImpl<BookApply> implements BookApplyService {
	@Autowired
	private BookApplyMapper bookApplyMapper;
	
	@Autowired
	private BookService bookService;
	
	@Autowired
	private JdbcTemplateService jdbcTemplateService;
	
	@Autowired
	public void setMapper(BookApplyMapper mapper) {
		super.setMapper(mapper);
	}
	
	/**
	 * 
	 * @Title: getApplyRecordBeanList
	 * @Description: 把bookID和SchoolID 变成一个对象
	 * @param list
	 * @return
	 * @return: List<ApplyRecordBean>
	 */
	@Override
	public List<ApplyRecordBean> getApplyRecordBeanList(List<BookApply> list) {
		if(list.size()>0){
			ApplyRecordBean applyRecordBean=new ApplyRecordBean();
			List<ApplyRecordBean> applyRecordList=new ArrayList<ApplyRecordBean>();
			for(BookApply bookApply:list){
				Book b=bookService.get(bookApply.getBookId());
				School s=jdbcTemplateService.findBySchoolId(bookApply.getSchoolId());
				applyRecordBean.setId(bookApply.getId());
				applyRecordBean.setBookName(b.getTitle());
				applyRecordBean.setSchoolName(s.getSchoolName());
				applyRecordBean.setApplyStatus(bookApply.getApplyStatus().getName());
				applyRecordList.add(applyRecordBean);
			}
			return applyRecordList;
		}
		return null;
		
	}

}
