package com.yundao.cloudlib.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import com.yundao.cloudlib.model.Suggest;
import com.yundao.cloudlib.service.MailService;

import framework.mail.MailSenderInfo;
import framework.mail.SimpleMailSender;
import freemarker.template.Configuration;
import freemarker.template.Template;

/**
 * 
 * @ClassName: MailServiceImpl
 * @Description: 邮件发送
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月22日 下午3:59:34
 */
@Service
public class MailServiceImpl implements MailService {

	@Autowired
	private FreeMarkerConfigurer freeMarkerConfigurer;

	/**
	 * 
	 * @Title: sendDealSuggest
	 * @Description: 反馈邮件发送
	 * @param tempLatePhone
	 * @param suggest
	 * @see com.yundao.cloudlib.service.MailService#sendDealSuggest(java.lang.String,
	 *      com.yundao.cloudlib.model.Suggest)
	 */
	@Override
	public void sendDealSuggest(String templatePath, Suggest suggest) {
		// FreeMarker通过Map传递动态数据
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("name", suggest.getName());
		// 封装数据
		MailSenderInfo mailInfo = new MailSenderInfo();
		mailInfo.setToAddress(suggest.getEmail());
		mailInfo.setSubject("意见反馈");
		mailInfo.setContent(getMailText(templatePath, map));
		// 发送html格式
		SimpleMailSender.sendHtmlMail(mailInfo);

	}
	

	/**
	 * 
	 * @Title: getMailText
	 * @Description: 将数据放入模板，返回内容
	 * @param templateFilePath
	 * @param dataMap
	 * @return
	 * @return: String
	 */
	@SuppressWarnings("rawtypes")
	private String getMailText(String templateFilePath, Map dataMap) {
		String htmlText = "";
		try {
			// 通过指定模板名获取FreeMarker模板实例
			Configuration configuration = freeMarkerConfigurer.getConfiguration();
			// freemarkerManager.
			Template template = configuration.getTemplate(templateFilePath, "utf-8");
			// 解析模板并替换动态数据，最终数据将替换模板文件中的${}标签。
			htmlText = FreeMarkerTemplateUtils.processTemplateIntoString(template, dataMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return htmlText;
	}

}
