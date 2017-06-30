package com.yundao.cloudlib.controller.teachernew;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * 
 * @ClassName: IndexController
 * @Description: 教师平台的首页
 * @author: wf
 * @date: 2017年6月30日 下午2:05:03
 * @version 1.0
 */
@Controller("teacherNewIndexController")
@RequestMapping("/teachernew/common")
public class IndexController {
	
	@RequestMapping("/index")
	public String index(){
		return "/teacher-new/common/index";
	}
	@RequestMapping("/top")
	public String top(){
		return "/teacher-new/common/top";
	}
	@RequestMapping("/print")
	public String print(){
		return "/teacher-new/common/print";
	}
	
	@RequestMapping("/left")
	public String left(){
		return "/teacher-new/common/left";
	}
	
	@RequestMapping("/swich")
	public String swich(){
		return "/teacher-new/common/swich";
	}
}
