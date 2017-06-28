package framework.mvc;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import framework.constant.MvcConstant;
import framework.util.DateEditor;
import framework.util.RequestUtil;

/**
 * 
 * @ClassName: StandardController
 * @Description: baseController的父类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月30日 下午5:30:17
 */
public abstract class StandardController {
	/**
	 * 公共的错误页面
	 */
	public static final String WEBERRORS_URL = "/common/error";
	/**
	 * 页面的page对象
	 */
	public static final String PAGE = "page";
	/**
	 * 消息提示
	 */
	public static final String MESSAGE_PROMPT = "message_prompt";

	/**
	 * 
	 * @Title: initBinder
	 * @Description: 数据处理Date
	 * @param webdatabinder
	 * @return: void
	 */
	@InitBinder
	protected void initBinder(WebDataBinder webdatabinder) {
		webdatabinder.registerCustomEditor(String.class, new StringTrimmerEditor(true));
		webdatabinder.registerCustomEditor(Date.class, new DateEditor(true));
	}

	/**
	 * 
	 * @Title: addSuccessMessage
	 * @Description: 操作成功提示
	 * @param content
	 * @param args
	 * @param model
	 * @return: void
	 */
	public void addSuccessMessage(String content, Object[] args, Model model) {
		if (model instanceof RedirectAttributes) {
			model = (RedirectAttributes) model;
			((RedirectAttributes) model).addFlashAttribute(MvcConstant.MESSAGE_PROMPT, Message.success(content, args));
		} else {
			model.addAttribute(MvcConstant.MESSAGE_PROMPT, Message.success(content, args));
		}
	}

	/**
	 * 
	 * @Title: addSuccessMessage
	 * @Description: 操作成功提示
	 * @param content
	 * @param mode
	 * @return: void
	 */
	public void addSuccessMessage(String content, Model model) {
		addSuccessMessage(content, null, model);
	}

	/**
	 * 
	 * @Title: addErrorMessage
	 * @Description: 操作错误提示
	 * @param content
	 * @param args
	 * @param model
	 * @return: void
	 */
	public void addErrorMessage(String content, Object[] args, Model model) {
		if (model instanceof RedirectAttributes) {
			model = (RedirectAttributes) model;
			((RedirectAttributes) model).addFlashAttribute(MvcConstant.MESSAGE_PROMPT, Message.error(content, args));
		} else {
			model.addAttribute(MvcConstant.MESSAGE_PROMPT, Message.error(content, args));
		}
	}

	/**
	 * 
	 * @Title: addErrorMessage
	 * @Description: 操作错误提示
	 * @param content
	 * @param model
	 * @return: void
	 */
	public void addErrorMessage(String content, Model model) {
		addErrorMessage(content, null, model);
	}

	/**
	 * 
	 * @Title: addWarnMessage
	 * @Description: 操作警告提示
	 * @param content
	 * @param args
	 * @param model
	 * @return: void
	 */
	public void addWarnMessage(String content, Object[] args, Model model) {
		if (model instanceof RedirectAttributes) {
			model = (RedirectAttributes) model;
			((RedirectAttributes) model).addFlashAttribute(MvcConstant.MESSAGE_PROMPT, Message.warn(content, args));
		} else {
			model.addAttribute(MvcConstant.MESSAGE_PROMPT, Message.warn(content, args));
		}
	}

	/**
	 * 
	 * @Title: addWarnMessage
	 * @Description: 操作警告提示
	 * @param content
	 * @param model
	 * @return: void
	 */
	public void addWarnMessage(String content, Model model) {
		addWarnMessage(content, null, model);
	}

	/**
	 * @Title: getErrors
	 * @Description: 获取错误
	 * @return
	 * @return: WebErrors
	 */
	public WebError getErrors() {
		HttpServletRequest request = RequestUtil.getRequest();
		WebError errors = (WebError) request.getAttribute(MvcConstant.WEBERRORS);
		return errors;
	}

	/**
	 * 
	 * @Title: addActionError
	 * @Description: 添加错误信息
	 * @param message
	 * @return: void
	 */
	public void addActionError(String message) {
		HttpServletRequest request = RequestUtil.getRequest();
		WebError errors = (WebError) request.getAttribute(MvcConstant.WEBERRORS);
		if (errors == null) {
			errors = WebError.create();
			request.setAttribute(MvcConstant.WEBERRORS, errors);
		}
		errors.addErrorString(message);
	}

	/**
	 * 
	 * @Title: addActionError
	 * @Description: 添加错误信息
	 * @param code
	 * @param objects
	 * @return: void
	 */
	public void addActionError(String code, Object[] objects) {
		HttpServletRequest request = RequestUtil.getRequest();
		WebError errors = (WebError) request.getAttribute(MvcConstant.WEBERRORS);
		if (errors == null) {
			errors = WebError.create();
			request.setAttribute(MvcConstant.WEBERRORS, errors);
		}
		errors.addErrorCode(code, objects);
	}

	/**
	 * 
	 * @Title: forward
	 * @Description: 重定向
	 * @param url
	 * @return
	 * @return: String
	 */
	public String forward(String url) {
		return "forward:" + url;
	}

	/**
	 * 
	 * @Title: redirect
	 * @Description: 重定向
	 * @param url
	 * @return
	 * @return: String
	 */
	public String redirect(String url) {
		return "redirect:" + url;
	}

	/**
	 * 
	 * @Title: getSessionAttr
	 * @Description: 获取session中的某个值
	 * @param name
	 * @return
	 * @return: Object
	 */
	public Object getSessionAttr(String name) {
		return RequestUtil.getSessionAttr(name);
	}

	/**
	 * 
	 * @Title: setSessionAttr
	 * @Description: 将某个值设置到session中
	 * @param key
	 * @param value
	 * @return: void
	 */
	public void setSessionAttr(String key, Object value) {
		RequestUtil.setSessionAttr(key, value);
	}

}
