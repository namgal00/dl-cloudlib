package com.yundao.cloudlib.service;

import java.util.List;

import com.yundao.cloudlib.bean.Reader;
import com.yundao.cloudlib.bean.School;

/**
 * 
 * @ClassName: JdbcTemplateService
 * @Description: 双数据源中的jdbc操作
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月12日 下午4:01:29
 */
public interface JdbcTemplateService {

	/**
	 * 
	 * @Title: Test
	 * @Description: 测试
	 * @return: void
	 */
	void test();
	/**
	 * 查询所有学校的学校Id和学校名
	 * @return
	 */
	List<School> findAllSchool();
	
	/**
	 * 通过学校的Id和学号查询读者
	 * @param schoolId
	 * @param barcode
	 * @return
	 */
	Reader findBySchoolIDAndBarcode(Long schoolId,String barcode);
	
	/**
	 * 通过学校的Id查询学校
	 * @Title: findBySchoolId
	 * @Description: TODO
	 * @param SchoolId
	 * @return
	 * @return: School
	 */
	School findBySchoolId(Long SchoolId);
}
