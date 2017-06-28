package  framework.mvc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import  framework.constant.MvcConstant;
import  framework.util.InternationalUtil;
import  framework.util.JsonUtil;
import  framework.util.ResponseUtil;

/**
 * 
 * @ClassName: Error
 * @Description: 错误<br/>
 *               这个是 用来做错误拦截的
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月25日 上午9:31:07
 */
public class WebError {

	private List<String> errors;

	/**
	 * 通过HttpServletRequest创建error
	 * 
	 * @param request
	 *            从request中获得MessageSource和Locale，如果存在的话。
	 * @return 如果LocaleResolver存在则返回国际化WebErrors
	 */
	public static WebError create() {
		return new WebError();
	}

	/**
	 * 
	 * @Title: addErrorCode
	 * @Description: 添加错误代码
	 * @param code
	 * @param args
	 * @return: void
	 */
	public void addErrorCode(String code, Object... args) {
		getErrors().add(InternationalUtil.getMessage(code, args));
	}

	/**
	 * 
	 * @Title: addErrorCode
	 * @Description: 添加错误代码
	 * @param code
	 * @return: void
	 */
	public void addErrorCode(String code) {
		getErrors().add(InternationalUtil.getMessage(code));
	}

	/**
	 * 
	 * @Title: addErrorString
	 * @Description: 添加错误字符串
	 * @param error
	 * @return: void
	 */
	public void addErrorString(String error) {
		getErrors().add(error);
	}

	/**
	 * 
	 * @Title: hasErrors
	 * @Description: 是否存在错误
	 * @return
	 * @return: boolean
	 */
	public boolean hasErrors() {
		return errors != null && errors.size() > 0;
	}

	/**
	 * 
	 * @Title: getCount
	 * @Description: 错误数量
	 * @return
	 * @return: int
	 */
	public int getCount() {
		return errors == null ? 0 : errors.size();
	}

	/**
	 * 
	 * @Title: getErrors
	 * @Description: 错误列表
	 * @return
	 * @return: List<String>
	 */
	public List<String> getErrors() {
		if (errors == null) {
			errors = new ArrayList<String>();
		}
		return errors;
	}

	/**
	 * 
	 * @Title: showErrorAjax
	 * @Description: 将错误信息保存到返回的信息中，以ajax现实
	 * @param response
	 * @return
	 * @return: String
	 */
	public String showErrorAjax(HttpServletResponse response) {
		String json = JsonUtil.toJson(getErrors());
		response.setStatus(400);
		response.addHeader("Error-Json", json);
		return ResponseUtil.renderJSON("{error:" + json + "}", response);
	}

	/**
	 * 
	 * @Title: showFrontErrorAjax
	 * @Description: 返回错误信息到ajax中
	 * @param response
	 * @return
	 * @return: String
	 */
	public String showFrontErrorAjax(HttpServletResponse response) {
		String json = JsonUtil.toJson(getErrors());
		response.setStatus(400);
		response.addHeader("errorStatus", "systemError");
		return ResponseUtil.renderJSON("{error:" + json + "}", response);
	}

	/**
	 * 
	 * @Title: toModel
	 * @Description: 将错误信息提交到model中
	 * @param model
	 * @return: void
	 */
	public void toModel(Map<String, Object> model) {
		if (!hasErrors()) {
			throw new IllegalStateException("no errors found!");
		}
		model.put(getErrorAttrName(), getErrors());
	}

	/**
	 * 
	 * @Title: getErrorAttrName
	 * @Description: 获取页面获取错误的标识
	 * @return
	 * @return: String
	 */
	protected String getErrorAttrName() {
		return MvcConstant.ERROR_ATTR_NAME;
	}

	/* get and set */
	public void setErrors(List<String> errors) {
		this.errors = errors;
	}

}
