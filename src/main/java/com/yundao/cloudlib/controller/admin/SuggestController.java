package com.yundao.cloudlib.controller.admin;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.yundao.cloudlib.I18nConstant;
import com.yundao.cloudlib.model.Suggest;
import com.yundao.cloudlib.model.enumType.SuggestType;
import com.yundao.cloudlib.service.MailService;
import com.yundao.cloudlib.service.SuggestService;

import framework.page.Page;
import framework.page.SearchFilter;
import framework.util.ServletUtil;

/**
 * 
 * @ClassName: SuggestController
 * @Description: 客户意见处理
 * @author: wf
 * @date: 2017年6月22日 上午9:42:44
 * @version 1.0
 */
@Controller
@RequestMapping("/admin/suggest")
public class SuggestController extends BaseController {

	@Autowired
	private SuggestService suggestService;
	
	@Autowired
	private MailService mailService;

	/**
	 * 
	 * @Title: suggest
	 * @Description: 列表
	 * @param page
	 * @param model
	 * @param request
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/list")
	public String suggest(Page page, Model model, HttpServletRequest request) {
		Map<String, Object> searchMap = ServletUtil.getParametersStartingWith(request);
		String value = (String) searchMap.get("EQ_type");
		if (StringUtils.isNotBlank(value) && value.indexOf("全部") > 0) {
			searchMap.remove("EQ_type");
		}
		List<SearchFilter> filters = ServletUtil.parse(searchMap);

		page.setSearchFilters(filters);
		page = suggestService.find(page);
		model.addAttribute(PAGE, page);
		model.addAllAttributes(searchMap);
		return prefix + "/suggest/list";
	}

	/**
	 * 
	 * @Title: edit
	 * @Description: 查看页面
	 * @param ids
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String edit(Long ids, Model model) {
		model.addAttribute("suggest", suggestService.get(ids));
		return prefix + "/suggest/edit";
	}

	/**
	 * 
	 * @Title: ignore
	 * @Description: 意见忽略
	 * @param ids
	 * @param ra
	 * @return
	 * @return: String
	 */
	@RequestMapping("/ignore")
	public String ignore(Long id, RedirectAttributes ra) {
		Suggest suggest = suggestService.get(id);
		suggest.setType(SuggestType.processed);
		suggestService.updateSelective(suggest);
		addSuccessMessage(I18nConstant.success_edit, ra);
		return redirect("/admin/suggest/list");
	}

	/**
	 * 
	 * @Title: deal
	 * @Description: 处理并且发送邮件
	 * @param id
	 * @param ra
	 * @return
	 * @return: String
	 */
	@RequestMapping("/deal")
	public String deal(Long id, RedirectAttributes ra) {
		Suggest suggest = suggestService.get(id);
		suggest.setType(SuggestType.processed);
		suggestService.updateSelective(suggest);
		// 发送邮件
		mailService.sendDealSuggest("/fmTemp/dealSuggest.ftl", suggest);
		addSuccessMessage(I18nConstant.success_edit, ra);
		return redirect("/admin/suggest/list");
	}

}
