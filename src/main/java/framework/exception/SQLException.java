package  framework.exception;

/**
 * 
 * @ClassName: SQLException
 * @Description: 数据库操作异常
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月31日 下午11:04:39
 */
public class SQLException extends RuntimeException {

	public SQLException() {
		super();
	}

	public SQLException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public SQLException(String message, Throwable cause) {
		super(message, cause);
	}

	public SQLException(String message) {
		super(message);
	}

	public SQLException(Throwable cause) {
		super(cause);
	}

}
