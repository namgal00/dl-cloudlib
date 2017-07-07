package com.yundao.cloudlib.controller.admin;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yundao.cloudlib.model.enumType.BookBatchType;
import com.yundao.cloudlib.service.ApplyService;

import framework.page.Page;
import framework.page.SearchFilter;
import framework.util.ServletUtil;

@Controller
@RequestMapping("/admin/apply")
public class ApplyController extends BaseController{
	@Autowired
	private ApplyService applyService;
	
	
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
}
