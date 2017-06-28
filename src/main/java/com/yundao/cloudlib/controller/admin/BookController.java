package com.yundao.cloudlib.controller.admin;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.yundao.cloudlib.I18nConstant;
import com.yundao.cloudlib.model.Batch;
import com.yundao.cloudlib.model.Book;
import com.yundao.cloudlib.service.BatchService;
import com.yundao.cloudlib.service.BookService;

import framework.page.Page;
import framework.page.SearchFilter;
import framework.util.ServletUtil;

/**
 * 
 * @ClassName: BookController
 * @Description: 电子书
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月13日 下午3:17:53
 */
@Controller
@RequestMapping("/admin/book")
public class BookController extends BaseController {

	@Autowired
	private BookService bookService;

	@Autowired
	private BatchService batchService;

	/**
	 * 
	 * @Title: list
	 * @Description: 电子书列表
	 * @param page
	 * @param model
	 * @param request
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/list")
	public String list(Page page, Model model, HttpServletRequest request) {
		Map<String, Object> searchMap = ServletUtil.getParametersStartingWith(request);
		if (searchMap != null && ((String) searchMap.get("EQ_batchId")) != null && ((String) searchMap.get("EQ_batchId")).contains("-")) {
			searchMap.remove("EQ_batchId");
		}
		List<SearchFilter> filters = ServletUtil.parse(searchMap);
		page.setSearchFilters(filters);

		page = bookService.find(page);
		model.addAttribute(PAGE, page);
		model.addAllAttributes(searchMap);
		model.addAttribute("batchs", batchService.getAll());
		return prefix + "/book/list";
	}

	/**
	 * 修改电子书页面
	 * 
	 * @Title: edit
	 * @Description: TODO
	 * @param ids
	 *            是电子书的id
	 * @param model
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String edit(Long ids, Model model) {
		Book book = bookService.get(ids);
		model.addAttribute("book", book);
		model.addAttribute("batchs", batchService.getAll());
		return prefix + "/book/edit";
	}

	/**
	 * 修改电子书
	 * 
	 * @Title: edit
	 * @Description: TODO
	 * @param book
	 * @param ra
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/edit", method = RequestMethod.POST)
	public String edit(Book book, RedirectAttributes ra) {
		bookService.updateSelective(book);

		addSuccessMessage(I18nConstant.success_edit, ra);
		return redirect("/admin/book/list");
	}

	/**
	 * 
	 * @Title: add
	 * @Description: 添加电子书页面
	 * @param model
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String add(Model model) {
		List<Batch> list = batchService.getAll();
		model.addAttribute("batch", list);
		return prefix + "/book/add";
	}

	/**
	 * 新增电子书
	 * 
	 * @Title: add
	 * @Description: TODO
	 * @param book
	 * @param ra
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public String add(Book book, RedirectAttributes ra) {
		bookService.save(book);
		addSuccessMessage(I18nConstant.success_add, ra);
		return redirect("/admin/book/list");
	}
}
