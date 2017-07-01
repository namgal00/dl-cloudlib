package com.yundao.cloudlib.controller.teacher;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 
 * @ClassName: BookOrderBatchController
 * @Description: 订购批次列表
 * @author: wf
 * @date: 2017年6月30日 下午2:52:42
 * @version 1.0
 */
@Controller
@RequestMapping("/teacher/batch")
public class BookOrderBatchController {
	
	/**
	 * 
	 * @Title: bookOrderBatch
	 * @Description: 批次列表页面
	 * @return
	 * @return: String
	 */
	@RequestMapping("/bookOrderBatch")
	public String bookOrderBatch(){
		return "/teacher/orderBatch/bookOrderBatch";
	}
	
	/**
	 * 
	 * @Title: addBatch
	 * @Description: 新增批次页面
	 * @return
	 * @return: String
	 */
	@RequestMapping("/addBatch")
	public String addBatch(){
		return "/teacher/orderBatch/addBatch";
	}
	
	/**
	 * 
	 * @Title: orderBookList
	 * @Description: 查看批次里面所包含的书
	 * @return
	 * @return: String
	 */
	@RequestMapping("/orderBookList")
	public String orderBookList(){
		return "/teacher/orderBatch/orderBookList";
	}

}
