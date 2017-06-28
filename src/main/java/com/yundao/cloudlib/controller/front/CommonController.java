package com.yundao.cloudlib.controller.front;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yundao.cloudlib.I18nConstant;
import com.yundao.cloudlib.model.Suggest;
import com.yundao.cloudlib.model.enumType.SuggestType;
import com.yundao.cloudlib.service.SuggestService;

import framework.mvc.Message;

/**
 * 
 * @ClassName: CommonController
 * @Description: TODO
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月21日 下午2:24:31
 */
@Controller("frontCommonController")
public class CommonController extends BaseController {

	@Autowired
	private SuggestService suggestService;

	/**
	 * 
	 * @Title: help
	 * @Description: 帮助
	 * @return
	 * @return: String
	 */
	@RequestMapping("/help")
	public String help() {
		return "front/common/help";
	}

	/**
	 * 
	 * @Title: suggest
	 * @Description: 意见
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/suggest", method = RequestMethod.GET)
	public String suggest() {
		return "front/common/suggest";
	}

	/**
	 * 
	 * @Title: suggest
	 * @Description: 意见
	 * @param suggest
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/suggest", method = RequestMethod.POST)
	@ResponseBody
	public Message suggest(Suggest suggest) {
		suggest.setType(SuggestType.untreated);
		suggestService.save(suggest);
		return Message.success(I18nConstant.success_add);
	}

}
