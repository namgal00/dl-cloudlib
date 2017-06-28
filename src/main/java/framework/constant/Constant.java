package framework.constant;

/**
 * 
 * @ClassName: Constant
 * @Description: 常量类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月25日 上午10:17:10
 */
public class Constant {

	/**
	 * 日期处理的格式
	 */
	public static final String DATE_PATTERNS[] = { "yyyy", "yyyy-MM", "yyyyMM", "yyyy/MM", "yyyy-MM-dd", "yyyyMMdd", "yyyy/MM/dd", "yyyy-MM-dd HH:mm:ss", "yyyyMMddHHmmss", "yyyy/MM/dd HH:mm:ss" };

	/**
	 * shiro cookie 的名称
	 */
	public static final String SHIRO_COOKIE_NAME = "shiroCookieName";

	/**
	 * shiro cookie 保存的时间 以秒来计算
	 */
	public static final int SHIRO_COOKIE_DATE = 259200;

	public static final String SEARCH_PREFIX = "search_";// 查询的时候的前缀

}
