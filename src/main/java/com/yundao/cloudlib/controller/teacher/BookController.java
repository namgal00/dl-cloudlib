package com.yundao.cloudlib.controller.teacher;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yundao.cloudlib.service.BookService;

import framework.page.Page;
import framework.page.SearchFilter;
import framework.util.ServletUtil;

/**
 * 
 * @ClassName: BookController
 * @Description: 图书列表
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年7月3日 上午10:33:19
 */
@Controller("teacherBookController")
@RequestMapping("/teacher/book")
public class BookController extends BaseController {

	@Autowired
	private BookService bookService;

	/**
	 * 
	 * @Title: list
	 * @Description: 图书列表
	 * @return
	 * @return: String
	 */
	@RequestMapping("/list")
	public String list(Page page, Model model, HttpServletRequest request) {
		Map<String, Object> searchMap = ServletUtil.getParametersStartingWith(request);
		List<SearchFilter> filters = ServletUtil.parse(searchMap);
		page.setSearchFilters(filters);

		page = bookService.find(page);
		model.addAttribute(PAGE, page);
		model.addAllAttributes(searchMap);
		return "/teacher/book/list";
	}
}
