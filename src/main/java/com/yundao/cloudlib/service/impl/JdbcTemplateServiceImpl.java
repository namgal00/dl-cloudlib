package com.yundao.cloudlib.service.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.yundao.cloudlib.bean.Reader;
import com.yundao.cloudlib.bean.School;
import com.yundao.cloudlib.model.rbac.Admin;
import com.yundao.cloudlib.service.JdbcTemplateService;

/**
 * 
 * @ClassName: JdbcTemplateServiceImpl
 * @Description: jdbc操作 只做查询功能的动作(操作oracle的操作模仿这个来写)
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月12日 下午4:02:31
 */
@Service
public class JdbcTemplateServiceImpl implements JdbcTemplateService {

	private JdbcTemplate jdbcTemplate;

	@Autowired
	@Qualifier("ds1")
	private DataSource dataSource;

	@Autowired
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		jdbcTemplate.setDataSource(dataSource);// 设置dataSource
		this.jdbcTemplate = jdbcTemplate;
	}

	/**
	 * 
	 * @Title: Test
	 * @Description: 测试
	 * @see com.yundao.cloudlib.service.JdbcTemplateService#Test()
	 */
	@Override
	public void test() {
		String sql = "select * from reader";
		Admin admin = jdbcTemplate.queryForObject(sql, new RowMapper<Admin>() {

			@Override
			public Admin mapRow(ResultSet rs, int arg1) throws SQLException {
				Admin admin = new Admin();
				admin.setId(rs.getLong("id"));
				return admin;
			}

		});

		System.out.println(admin.getId());
	}
	
	/**
	 * 
	 * @Title: findAllSchool
	 * @Description: 查询所有学校
	 * @return
	 * @see com.yundao.cloudlib.service.JdbcTemplateService#findAllSchool()
	 */
	@Override
	public List<School> findAllSchool() {
		String sql = "select id,school_name from school ";

		List<School> list = jdbcTemplate.query(sql, new RowMapper<School>() {

			@Override
			public School mapRow(ResultSet rs, int rowNum) throws SQLException {
				School s = new School();
				s.setId(rs.getLong("id"));
				s.setSchoolName(rs.getString("school_name"));
				return s;
			}

		});
		return list;
	}

	/**
	 * 通过学校ID和学号查询读者reader
	 */
	public Reader findBySchoolIDAndBarcode(Long schoolId, String barcode) {
		String sql = "select * from reader where school_id=? and barcode=? ";
		Reader reader = null;
		try {
			reader = jdbcTemplate.queryForObject(sql, new Object[] { schoolId, barcode }, new RowMapper<Reader>() {

				@Override
				public Reader mapRow(ResultSet rs, int rowNum) throws SQLException {
					Reader reader = null;
					System.out.println(rowNum+","+rs.getFetchSize());
					
						reader = new Reader();
						reader.setId(rs.getLong("id"));
						reader.setAccount(rs.getString("account"));
						reader.setAddress(rs.getString("address"));
						reader.setBarcode(rs.getString("barcode"));
						reader.setBirthday(rs.getDate("birthday"));
						reader.setCreateDate(rs.getDate("create_date"));
						reader.setEmail(rs.getString("email"));
						reader.setEndDate(rs.getDate("end_date"));
						reader.setIdentifyCode(rs.getString("identify_code"));
						reader.setName(rs.getString("name"));
						reader.setPassword(rs.getString("password"));
						reader.setPhoneNumber(rs.getString("phone_number"));
						reader.setPhoto(rs.getString("photo"));
						reader.setPostCode(rs.getString("postcode"));
						reader.setReaderNative(rs.getString("reader_native"));
						reader.setReaderTypeCode(rs.getString("reader_type_code"));
						reader.setSchoolCode(rs.getString("school_code"));
						reader.setSex(rs.getString("sex"));
						reader.setStartDate(rs.getDate("start_date"));
						reader.setStatus(rs.getInt("status"));
						reader.setReaderID(rs.getLong("reader_type_id"));
						reader.setSchoolID(rs.getLong("school_id"));
						reader.setSchoolDeptID(rs.getLong("school_dept_id"));
						reader.setSysUserID(rs.getLong("sys_user_id"));
					
					return reader;
				}

			});
		} catch (EmptyResultDataAccessException e) {
			e.printStackTrace();
			return null;
		}

		return reader;
	}

	
	/**
	 * 
	 * @Title: findBySchoolId
	 * @Description: 通过学校id找学校
	 * @param schoolId
	 * @return
	 * @see com.yundao.cloudlib.service.JdbcTemplateService#findBySchoolId(java.lang.Long)
	 */
	public School findBySchoolId(Long schoolId) {
		String sql="select id,school_name from school where id=?";
		School s=null;
		try {
			s=jdbcTemplate.queryForObject(sql, new Object[]{schoolId}, new RowMapper<School>(){
				
				public School mapRow(ResultSet rs, int rowNum) throws SQLException {
					School s=new School();
					s.setId(rs.getLong("id"));
					s.setSchoolName(rs.getString("school_name"));
					return s;
				}
				
			});
		} catch (EmptyResultDataAccessException e) {
			e.printStackTrace();
			return null;
		}
		
		return s;
	}

}
