package  framework.mvc;


/**
 * 
 * @ClassName: AjaxMessage
 * @Description: ajax传送的信息
 * @author: jinzhaopo
 * @date: 2015-6-15 上午9:44:45
 */
public class AjaxMessage {
	private Boolean isSuccessed;// 是否成功 是：true 否：false
	private String content;// 提示的内容
	private Object obj;

	public Boolean getIsSuccessed() {
		return isSuccessed;
	}

	public void setIsSuccessed(Boolean isSuccessed) {
		this.isSuccessed = isSuccessed;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Object getObj() {
		return obj;
	}

	public void setObj(Object obj) {
		this.obj = obj;
	}

	public AjaxMessage() {
		super();
	}

	public AjaxMessage(Boolean isSuccessed, String content, Object obj) {
		super();
		this.isSuccessed = isSuccessed;
		this.content = content;
		this.obj = obj;
	}
	/**
	 * 
	 * @Title: success
	 * @Description: 成功
	 * @param content
	 * @param obj
	 * @return
	 * @return: AjaxMessage
	 */
	public static AjaxMessage success(String content,Object obj){
		return new AjaxMessage(true,content,obj);
	}
	
	public static AjaxMessage success(String content){
		return success(content, null);
	}
	
	public static AjaxMessage success(Object obj){
		return success(null, obj);
	}
	/**
	 * 
	 * @Title: fail
	 * @Description: 失败
	 * @param content
	 * @param obj
	 * @return
	 * @return: AjaxMessage
	 */
	public static AjaxMessage fail(String content,Object obj){
		return new AjaxMessage(false, content, obj);
	}
	
	public static AjaxMessage fail(String content){
		return fail(content,null);
	}
	
	public static AjaxMessage fail(Object obj){
		return fail(null, obj);
	}
	
	
	
	


}
