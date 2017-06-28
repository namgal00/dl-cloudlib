package com.yundao.cloudlib.controller.front;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yundao.cloudlib.service.BookService;

import framework.page.Page;
import framework.page.SearchFilter;
import framework.util.RequestUtil;
import framework.util.SearchFilterUtil;

/**
 * 
 * @ClassName: SearchController
 * @Description: 搜索
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月20日 上午8:57:28
 */
@Controller
@RequestMapping("/search")
public class SearchController extends BaseController {
	@Autowired
	private BookService bookService;

	/**
	 * 
	 * @Title: index
	 * @Description: 搜索首页
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = { "", "/", "/index" })
	public String index() {
		return "/front/search/index";
	}

	/**
	 * 
	 * @Title: search
	 * @Description: 搜索 查询
	 * @param model
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/doSearch")
	public String search(Page page, Model model, HttpServletRequest request) {
		List<SearchFilter> searchFilter = SearchFilterUtil.getInstance().getSearchFilter();
		String query = request.getParameter("query");
		return "/front/search/search";
	}

	/**
	 * 
	 * @Title: advancedSearch
	 * @Description: 精确搜索页面
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/advancedSearch")
	public String advancedSearch() {
		return "/front/search/advancedSearch";
	}
}
