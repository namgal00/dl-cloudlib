package com.yundao.cloudlib.service.impl;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yundao.cloudlib.mapper.BookMapper;
import com.yundao.cloudlib.model.Book;
import com.yundao.cloudlib.service.BookService;

import framework.page.Page;
import framework.service.impl.BaseServiceImpl;
import framework.util.SearchFilterUtil;
import tk.mybatis.mapper.entity.Example;
import tk.mybatis.mapper.entity.Example.Criteria;

/**
 * 
 * @ClassName: BookServiceImpl
 * @Description: 电子书
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月13日 下午3:16:53
 */
@Service
@Transactional(readOnly = true)
public class BookServiceImpl extends BaseServiceImpl<Book> implements BookService {

	@Autowired
	private BookMapper bookMapper;

	@Autowired
	public void setMapper(BookMapper mapper) {
		super.setMapper(mapper);
	}

	/**
	 * 
	 * @Title: getCount
	 * @Description: 获取记录数据的count
	 * @param book
	 * @return
	 * @see com.yundao.cloudlib.service.BookService#getCount(com.yundao.cloudlib.model.Book)
	 */
	@Override
	public int getCount(Book book) {
		return bookMapper.selectCount(book);
	}

	/**
	 * 
	 * @Title: search
	 * @Description: 分页查询
	 * @param title
	 * @return
	 * @see com.yundao.cloudlib.service.BookService#search(java.lang.String)
	 */
	@Override
	public Page search(String title,String author,String press,String classification) {
		Example example = new Example(Book.class);
		Criteria orTitle = example.or();
		if(StringUtils.isNotBlank(title)){
			orTitle.andEqualTo("title", title);
		}
		return null;
	}
}
