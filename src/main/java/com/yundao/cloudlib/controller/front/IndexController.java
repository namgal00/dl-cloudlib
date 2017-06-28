package com.yundao.cloudlib.controller.front;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 
 * @ClassName: IndexController
 * @Description: 首页controller
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月14日 上午10:00:09
 */
@Controller("frontIndexController")
public class IndexController extends BaseController {

	/**
	 * 
	 * @Title: index
	 * @Description: 首页
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = { "/", "/index" })
	public String index() {
		return "/front/common/index";
	}

	/**
	 * 
	 * @Title: shuffling
	 * @Description: 轮播图
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/shuffling")
	public String shuffling() {
		return "/front/common/shuffling";
	}
}
