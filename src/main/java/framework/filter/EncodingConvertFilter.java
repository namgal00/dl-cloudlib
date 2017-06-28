package  framework.filter;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Iterator;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.OncePerRequestFilter;

/**
 * 
 * @ClassName: MyFilter
 * @Description: @WebFilter将一个实现了javax.servlet.Filter接口的类定义为过滤器
 * 
 *               属性filterName声明过滤器的名称,可选
 * 
 *               属性urlPatterns指定要过滤的URL模式,也可使用属性value来声明.(指定要过滤的URL模式是必选属性)
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月30日 下午7:03:10
 */
@WebFilter(filterName = "encodingConvertFilter", urlPatterns = "/*")
public class EncodingConvertFilter extends OncePerRequestFilter {
	/**
	 * 页面过来的编码
	 */
	private static String fromEncoding = "ISO8859-1";
	/**
	 * 要转变的编码
	 */
	private static String toEncoding = "UTF-8";

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		if (request.getMethod().equalsIgnoreCase("GET")) {
			for (Iterator<String[]> iterator = request.getParameterMap().values().iterator(); iterator.hasNext();) {
				String as[] = (String[]) iterator.next();
				for (int i = 0; i < as.length; i++) {
					try {
						as[i] = new String(as[i].trim().getBytes(fromEncoding), toEncoding);
					} catch (UnsupportedEncodingException unsupportedencodingexception) {
						unsupportedencodingexception.printStackTrace();
					}
				}
			}
		}
		try {
			filterChain.doFilter(request, response);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ServletException e) {
			e.printStackTrace();

		}
	}
}