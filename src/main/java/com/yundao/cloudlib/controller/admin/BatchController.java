package com.yundao.cloudlib.controller.admin;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.yundao.cloudlib.I18nConstant;
import com.yundao.cloudlib.model.Batch;
import com.yundao.cloudlib.model.Book;
import com.yundao.cloudlib.service.BatchService;
import com.yundao.cloudlib.service.BookService;

import framework.mvc.Message;
import framework.page.Page;
import framework.page.SearchFilter;
import framework.util.ExcelUtil;
import framework.util.ServletUtil;

/**
 * 
 * @ClassName: BatchController
 * @Description: 批次controller
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月14日 下午1:10:36
 */
@Controller
@RequestMapping("/admin/batch")
public class BatchController extends BaseController {

	@Autowired
	private BatchService batchService;

	@Autowired
	private BookService bookService;

	/**
	 * 
	 * @Title: list
	 * @Description: 批次列表
	 * @return
	 * @return: String
	 */
	@SuppressWarnings({ "rawtypes", })
	@RequestMapping(value = "/list")
	public String list(Page page, Model model, HttpServletRequest request) {
		Map<String, Object> searchMap = ServletUtil.getParametersStartingWith(request);
		List<SearchFilter> filters = ServletUtil.parse(searchMap);
		page.setSearchFilters(filters);

		page = batchService.find(page);
		model.addAttribute(PAGE, page);
		model.addAllAttributes(searchMap);
		return prefix + "/batch/list";
	}

	/**
	 * 
	 * @Title: add
	 * @Description: 添加批次页面
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String add() {
		return prefix + "/batch/add";
	}

	/**
	 * 
	 * @Title: addBatch
	 * @Description: 添加批次
	 * @param name
	 * @param description
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public String add(Batch batch, RedirectAttributes ra) {
		batchService.save(batch);
		addSuccessMessage(I18nConstant.success_add, ra);
		return redirect("/admin/batch/list");
	}

	/**
	 * 
	 * @Title: checkName
	 * @Description: 检查重复输入批次名
	 * @param name
	 * @return
	 * @return: Batch
	 */
	@RequestMapping(value = "/checkName", method = RequestMethod.POST)
	@ResponseBody
	public Message checkName(String name, String oldName) {
		boolean unique = batchService.isUnique("name", oldName, name);
		if (unique) {
			return Message.success(I18nConstant.message_success);
		} else {
			return Message.error(I18nConstant.message_error);
		}
	}

	/**
	 * 
	 * @Title: edit
	 * @Description: 修改页面
	 * @param ids
	 *            页面上都是ids所以这边就是ids
	 * @param model
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String edit(Long ids, Model model) {
		model.addAttribute("batch", batchService.get(ids));
		return prefix + "/batch/edit";
	}

	/**
	 * 
	 * @Title: edit
	 * @Description: 修改批次
	 * @param batch
	 * @param ra
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/edit", method = RequestMethod.POST)
	public String edit(Batch batch, RedirectAttributes ra) {
		batchService.updateSelective(batch);
		addSuccessMessage(I18nConstant.success_edit, ra);
		return redirect("/admin/batch/list");
	}

	/**
	 * 
	 * @Title: delete
	 * @Description: 删除
	 * @param ids
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public String delete(Long ids, RedirectAttributes ra) {
		Book book = new Book();
		book.setBatchId(ids);
		int count = bookService.getCount(book);
		if (count <= 0) {
			// 执行删除
			batchService.remove(ids);
			addSuccessMessage(I18nConstant.success_delete, ra);
		} else {
			addErrorMessage(I18nConstant.error_delete_status, ra);
		}
		return redirect("/admin/batch/list");
	}

	/**
	 * 
	 * @Title: addBooks
	 * @Description: 批量添加电子书页面
	 * @param ids（因为页面的form中存在的是ids）
	 * @param model
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/addBooks", method = RequestMethod.GET)
	public String addBooks(Long ids, Model model) {
		model.addAttribute("batch", batchService.get(ids));
		return prefix + "/batch/addBooks";
	}

	/**
	 * 
	 * @Title: addBooks
	 * @Description: 批量导入电子书
	 * @param multipartFile
	 * @param batchId
	 * @param enable
	 * @param shelves
	 * @param enfree
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/addBooks", method = RequestMethod.POST)
	public String addBooks(@RequestParam("fileUpload") MultipartFile multipartFile, Long batchId, Boolean enable, Boolean shelves, Boolean enfree,
			RedirectAttributes ra) {
		try {
			List<Book> books = (List<Book>) ExcelUtil.getInstance().readExcel2ObjsByPath(multipartFile.getInputStream(), Book.class);
			for (Book book : books) {
				book.setBatchId(batchId);
				book.setEnable(enable);
				book.setFree(enfree);
				book.setShelves(shelves);
				//book.setPrice(price);
			}
			bookService.save(books);
		} catch (IOException e) {
			e.printStackTrace();
		}
		addSuccessMessage(I18nConstant.success_add, ra);
		return redirect("/admin/batch/list");
	}
	

}
