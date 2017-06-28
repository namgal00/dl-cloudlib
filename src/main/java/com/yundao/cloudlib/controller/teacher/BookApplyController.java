package com.yundao.cloudlib.controller.teacher;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yundao.cloudlib.bean.ApplyRecordBean;
import com.yundao.cloudlib.service.BookApplyService;
import com.yundao.cloudlib.service.BookService;
import com.yundao.cloudlib.service.JdbcTemplateService;

import framework.page.Page;
import framework.page.SearchFilter;
import framework.util.ServletUtil;

/**
 * 
 * @ClassName: BookApplyController
 * @Description: 电子书交易
 * @author: wf
 * @date: 2017年6月27日 下午5:00:34
 * @version 1.0
 */

@Controller
@RequestMapping("/teacher/apply")
public class BookApplyController {
	@Autowired
	private BookApplyService bookApplyService;

	@Autowired
	private BookService bookService;

	@Autowired
	private JdbcTemplateService jdbcTemplateService;

	/**
	 * 
	 * @Title: list
	 * @Description: 电子图书交易页面
	 * @param page
	 * @param model
	 * @param request
	 * @return
	 * @return: String
	 */
	@RequestMapping("/list")
	public String list(Page page, Model model, HttpServletRequest request) {
		Map<String, Object> searchMap = ServletUtil.getParametersStartingWith(request);
		List<SearchFilter> filters = ServletUtil.parse(searchMap);
		page.setSearchFilters(filters);

		page = bookApplyService.find(page);
		List<ApplyRecordBean> applyRecordList = bookApplyService.getApplyRecordBeanList(page.getList());
		model.addAttribute("applyRecord", applyRecordList);
		model.addAllAttributes(searchMap);
		return  "/teacher/bookApply/list";
	}
}
