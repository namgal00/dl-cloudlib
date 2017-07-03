package com.yundao.cloudlib.controller.teacher;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yundao.cloudlib.service.TeacherOrderBatchService;

import framework.page.Page;
import framework.page.SearchFilter;
import framework.util.ServletUtil;

/**
 * 
 * @ClassName: BookOrderBatchController
 * @Description: 老师订购批次
 * @author: wf
 * @date: 2017年6月30日 下午2:52:42
 * @version 1.0
 */
@Controller
@RequestMapping("/teacher/batch")
public class BookOrderBatchController extends BaseController{
	@Autowired
	private TeacherOrderBatchService teacherOrderBatchService;
	
	/**
	 * 
	 * @Title: bookOrderBatch
	 * @Description: 老师批次列表页面
	 * @return
	 * @return: String
	 */
	@RequestMapping("/bookOrderBatch")
	public String bookOrderBatch(Page page, Model model, HttpServletRequest request){
		Map<String, Object> searchMap = ServletUtil.getParametersStartingWith(request);
		List<SearchFilter> filters = ServletUtil.parse(searchMap);
		page.setSearchFilters(filters);

		page = teacherOrderBatchService.find(page);
		model.addAttribute(PAGE, page);
		model.addAllAttributes(searchMap);
		return "/teacher/orderBatch/bookOrderBatch";
	}
	
	/**
	 * 
	 * @Title: addBatch
	 * @Description: 新增批次页面
	 * @return
	 * @return: String
	 */
	@RequestMapping("/addBatch")
	public String addBatch(){
		return "/teacher/orderBatch/addBatch";
	}
	
	/**
	 * 
	 * @Title: orderBookList
	 * @Description: 查看批次里面所包含的书
	 * @return
	 * @return: String
	 */
	@RequestMapping("/orderBookList")
	public String orderBookList(){
		return "/teacher/orderBatch/orderBookList";
	}

}
