package com.yundao.cloudlib.service;

import com.yundao.cloudlib.model.Book;

import framework.page.Page;
import framework.service.BaseService;

/**
 * 
 * @ClassName: BookService
 * @Description: 电子书
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月13日 下午3:15:45
 */
public interface BookService extends BaseService<Book> {

	/**
	 * 
	 * @Title: getCount
	 * @Description: 获取记录数
	 * @param book
	 * @return
	 * @return: int
	 */
	public int getCount(Book book);

	/**
	 * 
	 * @Title: search
	 * @Description: 首页查询
	 * @param title
	 * @return
	 * @return: Page
	 */
	Page search(String title,String author,String press,String publicationDate);
}
