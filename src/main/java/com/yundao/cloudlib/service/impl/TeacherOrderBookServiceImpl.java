package com.yundao.cloudlib.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yundao.cloudlib.bean.ExportExcelBookApply;
import com.yundao.cloudlib.mapper.TeacherOrderBookMapper;
import com.yundao.cloudlib.model.teacher.BookApply;
import com.yundao.cloudlib.service.TeacherOrderBookService;

import framework.service.impl.BaseServiceImpl;
/**
 * 
 * @ClassName: TeacherOrderBookServiceImpl
 * @Description: 老师订购电子书
 * @author: wf
 * @date: 2017年7月6日 下午1:44:08
 * @version 1.0
 */
@Service
@Transactional(readOnly = true)
public class TeacherOrderBookServiceImpl extends BaseServiceImpl<BookApply> implements TeacherOrderBookService {
	@Autowired
	private TeacherOrderBookMapper teacherOrderBookMapper;

	@Autowired
	public void setMapper(TeacherOrderBookMapper mapper) {
		super.setMapper(mapper);
	}
	
	/**
	 * 
	 * @Title: getListByBatchId
	 * @Description: 通过学校Id和批次Id来查询电子书申请集合
	 * @param id
	 * @return
	 * @see com.yundao.cloudlib.service.TeacherOrderBookService#getListByBatchId(java.lang.Long)
	 */
	@Override
	public List<BookApply> getListByBatchId(Long schoolId,Long batchId) {
		BookApply bookApply=new BookApply();
		bookApply.setBookBatchId(batchId);
		bookApply.setSchoolId(schoolId);
		List<BookApply> list=teacherOrderBookMapper.select(bookApply);
		return list;
	}
	
	/**
	 * 
	 * @Title: exportExcel
	 * @Description: 导出订购电子书
	 * @return
	 * @see com.yundao.cloudlib.service.TeacherOrderBookService#exportExcel()
	 */
	@Override
	public List<ExportExcelBookApply> exportExcel(Long schoolId,Long batchId) {
		List<BookApply> listBookApply=getListByBatchId(schoolId,batchId);
		List<ExportExcelBookApply> listExcel=new ArrayList<ExportExcelBookApply>();
		ExportExcelBookApply excelBookApply=new ExportExcelBookApply();
//		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		for(BookApply b:listBookApply){
			excelBookApply.setAuthor(b.getAuthor());
			excelBookApply.setBookReplication(b.getBookReplication());
			excelBookApply.setClassification(b.getClassification());
			excelBookApply.setIsbn(b.getIsbn());
			excelBookApply.setPress(b.getPress());
			excelBookApply.setPrice(b.getPrice());
			excelBookApply.setPublicationDate(b.getPublicationDate());
			excelBookApply.setTitle(b.getTitle());
			listExcel.add(excelBookApply);
		}
		return listExcel;
	}
	
	/**
	 * 
	 * @Title: getNumber
	 * @Description: 图书的种类，册数，总价格
	 * @param batchId
	 * @return
	 * @see com.yundao.cloudlib.service.TeacherOrderBookService#getNumber(java.lang.Long)
	 */
	@Override
	public Map<String, Object> getNumber(Long batchId) {
		
		return teacherOrderBookMapper.getNumber(batchId);
	}
	
	

	
}
