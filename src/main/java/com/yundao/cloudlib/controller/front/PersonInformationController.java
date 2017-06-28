package com.yundao.cloudlib.controller.front;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 
 * @ClassName: PersonInformationController
 * @Description: 个人中心
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月26日 下午9:54:31
 */
@Controller
@RequestMapping("/person")
public class PersonInformationController extends BaseController {
	@RequestMapping(value = { "", "/" })
	public String personalInformation() {
		return "/front/personalInformation/personalInformation";
	}
}
