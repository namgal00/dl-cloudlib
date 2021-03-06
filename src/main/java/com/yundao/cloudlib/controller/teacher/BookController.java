package com.yundao.cloudlib.controller.teacher;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yundao.cloudlib.model.enumType.BookBatchType;
import com.yundao.cloudlib.model.enumType.IsWorkBatchType;
import com.yundao.cloudlib.model.teacher.BookBatch;
import com.yundao.cloudlib.service.BookService;
import com.yundao.cloudlib.service.TeacherOrderBatchService;

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
	
	@Autowired
	private TeacherOrderBatchService teacherOrderBatchService;
	

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
		//这里需要的是启用的  上架的  不是免费的
		filters.add(SearchFilter.eq("enable", true));
		filters.add(SearchFilter.eq("shelves", true));
		filters.add(SearchFilter.eq("free", false));
		page.setSearchFilters(filters);

		page = bookService.find(page);
		model.addAttribute(PAGE, page);
		model.addAllAttributes(searchMap);
		
		model.addAttribute("bookBatch", teacherOrderBatchService.getOrderBatch(getTeacher().getSchoolId(),IsWorkBatchType.yes));
		return "/teacher/book/list";
	}
}
