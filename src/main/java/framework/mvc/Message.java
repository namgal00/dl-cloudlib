package  framework.mvc;

import java.io.Serializable;

import  framework.util.InternationalUtil;

/**
 * 
 * @ClassName: Message
 * @Description: 消息<br/>
 *               这个是用来做请求提示的
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月25日 上午9:31:27
 */
public class Message implements Serializable {

	private static final long serialVersionUID = 2557891928459271003L;

	/**
	 * 消息类型
	 */
	private MessageTypeEnum messageType;
	/**
	 * 内容提示
	 */
	private String content;

	/**
	 * 
	 * @Title:Message
	 * @Description:获取消息
	 * @param messageType
	 * @param content
	 * @param args
	 */
	public Message(MessageTypeEnum messageType, String content, Object args[]) {
		this.messageType = messageType;
		this.content = InternationalUtil.getMessage(content, args);
	}

	/**
	 * 
	 * @Title: success
	 * @Description: 成功消息
	 * @param content
	 * @param args
	 * @return
	 * @return: Message
	 */
	public static Message success(String content, Object args[]) {
		return new Message(MessageTypeEnum.SUCCESS, content, args);
	}

	/**
	 * 
	 * @Title: success
	 * @Description: 成功消息
	 * @param content
	 * @return
	 * @return: Message
	 */
	public static Message success(String content) {
		return success(content, null);
	}

	/**
	 * 
	 * @Title: warn
	 * @Description: 警告消息
	 * @param content
	 * @param args
	 * @return
	 * @return: Message
	 */
	public static Message warn(String content, Object args[]) {
		return new Message(MessageTypeEnum.WARN, content, args);
	}

	/**
	 * 
	 * @Title: warn
	 * @Description: 警告消息
	 * @param content
	 * @return
	 * @return: Message
	 */
	public static Message warn(String content) {
		return warn(content, null);
	}

	/**
	 * 
	 * @Title: error
	 * @Description: 错误消息
	 * @param content
	 * @param args
	 * @return
	 * @return: Message
	 */
	public static Message error(String content, Object args[]) {
		return new Message(MessageTypeEnum.ERROR, content, args);
	}

	/**
	 * 
	 * @Title: error
	 * @Description: 错误消息
	 * @param content
	 * @return
	 * @return: Message
	 */
	public static Message error(String content) {
		return error(content, null);
	}

	/* get and set */
	public MessageTypeEnum getMessageType() {
		return messageType;
	}

	public void setMessageType(MessageTypeEnum messageType) {
		this.messageType = messageType;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

}
