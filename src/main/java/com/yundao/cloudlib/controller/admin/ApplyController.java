package com.yundao.cloudlib.controller.admin;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yundao.cloudlib.model.enumType.BookBatchType;
import com.yundao.cloudlib.model.teacher.BookBatch;
import com.yundao.cloudlib.service.ApplyService;
import com.yundao.cloudlib.service.TeacherOrderBatchService;
import com.yundao.cloudlib.service.TeacherOrderBookService;

import framework.page.Page;
import framework.page.SearchFilter;
import framework.util.ServletUtil;

@Controller
@RequestMapping("/admin/apply")
public class ApplyController extends BaseController{
	@Autowired
	private ApplyService applyService;
	@Autowired
	private TeacherOrderBookService teacherOrderBookService;

	@Autowired
	private TeacherOrderBatchService teacherOrderBatchService;
	
	@RequestMapping("/list")
	public String list(Page page, Model model, HttpServletRequest request){
		Map<String, Object> searchMap = ServletUtil.getParametersStartingWith(request);
		List<SearchFilter> filters = ServletUtil.parse(searchMap);
		filters.add(SearchFilter.eq("status", BookBatchType.review));
		page.setSearchFilters(filters);

		page = applyService.find(page);
		model.addAttribute(PAGE, page);
		model.addAllAttributes(searchMap);
		return prefix + "/apply/list";
	}
	
	@RequestMapping("/selectBook")
	public String bookList(Page page,Model model,HttpServletRequest request){
		String id=request.getParameter("ids");

		if(id==null){
			id=request.getParameter("search_EQ_bookBatchId");
		}
		Long ids=Long.parseLong(id);

		BookBatch bookBatch=teacherOrderBatchService.get(ids);
		
		Map<String, Object> searchMap = ServletUtil.getParametersStartingWith(request);
		List<SearchFilter> filters = ServletUtil.parse(searchMap);
		filters.add(SearchFilter.eq("bookBatchId", ids));
		page.setSearchFilters(filters);

		page = teacherOrderBookService.find(page);
		
		Map<String ,Object> map=teacherOrderBookService.getNumber(ids);
		
		model.addAttribute(PAGE, page);
		model.addAllAttributes(searchMap);
		model.addAttribute("ids", ids);
		model.addAttribute("map", map);
		System.out.println(map.toString());

		return "/admin/book/orderBookList";
	}
}
