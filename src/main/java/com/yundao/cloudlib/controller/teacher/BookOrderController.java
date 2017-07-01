package com.yundao.cloudlib.controller.teacher;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * 
 * @ClassName: BookOrderController
 * @Description: 老师电子书订购页面
 * @author: wf
 * @date: 2017年6月30日 下午2:24:26
 * @version 1.0
 */
@Controller
@RequestMapping("/teacher/bookOrder")
public class BookOrderController {
	
	@RequestMapping("/order")
	public String order(){
		return "/teacher/bookOrder/order";
	}
	
	@RequestMapping("/bookList")
	public String bookList(){
		return "/teacher/bookOrder/bookList";
	}
}
