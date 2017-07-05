package com.yundao.cloudlib.controller.teacher;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.yundao.cloudlib.model.Book;
import com.yundao.cloudlib.model.teacher.BookApply;
import com.yundao.cloudlib.model.teacher.BookBatch;
import com.yundao.cloudlib.service.BookService;

/**
 * 
 * @ClassName: BookOrderController
 * @Description: 老师电子书订购页面
 * @author: wf
 * @date: 2017年6月30日 下午2:24:26
 * @version 1.0
 */
@Controller
@RequestMapping("/teacher/order")
public class BookOrderController {
	@Autowired
	private BookService bookService;

	/**
	 * 
	 * @Title: add
	 * @Description: 添加预定
	 * @param ids
	 * @param bookReplication
	 * @param mon
	 * @param ra
	 * @return
	 * @return: String
	 */
	@RequestMapping("/add")
	public String add(Long[] ids, Long bookReplication, Long mon, RedirectAttributes ra) {
		List<Book> books = bookService.getListByIds(Arrays.asList(ids));
		for (Book book : books) {

		}
		return null;
	}

	/**
	 * 
	 * @Title: getBookApplyList
	 * @Description: 转换
	 * @return
	 * @return: List<BookApply>
	 */
	private List<BookApply> getBookApplyList(List<Book> books, BookBatch bookBatch, Long bookReplication, Long mon) {
		return null;
	}
}
