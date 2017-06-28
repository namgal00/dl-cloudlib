package com.yundao.cloudlib.service;

import com.yundao.cloudlib.model.Suggest;

/**
 * 
 * @ClassName: MailService
 * @Description: 邮件发送
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月22日 下午3:49:59
 */
public interface MailService {

	/**
	 * 
	 * @Title: sendDealSuggest
	 * @Description: 反馈邮件发送
	 * @param tempLatePhone
	 * @param suggest
	 * @return: void
	 */
	public void sendDealSuggest(String templatePath, Suggest suggest);
}
