package com.yundao.cloudlib.controller.teacher;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.yundao.cloudlib.I18nConstant;
import com.yundao.cloudlib.bean.Teacher;
import com.yundao.cloudlib.model.enumType.BookBatchType;
import com.yundao.cloudlib.model.teacher.BookBatch;
import com.yundao.cloudlib.service.TeacherOrderBatchService;

import framework.page.Page;
import framework.page.SearchFilter;
import framework.util.ServletUtil;

/**
 * 
 * @ClassName: BookOrderBatchController
 * @Description: 老师订购批次
 * @author: wf
 * @date: 2017年6月30日 下午2:52:42
 * @version 1.0
 */
@Controller
@RequestMapping("/teacher/batch")
public class BookOrderBatchController extends BaseController {
	@Autowired
	private TeacherOrderBatchService teacherOrderBatchService;

	/**
	 * 
	 * @Title: bookOrderBatch
	 * @Description: 老师批次列表页面
	 * @return
	 * @return: String
	 */
	@RequestMapping("/bookOrderBatch")
	public String bookOrderBatch(Page page, Model model, HttpServletRequest request) {
		Map<String, Object> searchMap = ServletUtil.getParametersStartingWith(request);
		List<SearchFilter> filters = ServletUtil.parse(searchMap);
		filters.add(SearchFilter.eq("schoolId", getTeacher().getSchoolId()));
		page.setSearchFilters(filters);

		page = teacherOrderBatchService.find(page);
		model.addAttribute(PAGE, page);
		model.addAllAttributes(searchMap);
		return "/teacher/orderBatch/bookOrderBatch";
	}

	/**
	 * 
	 * @Title: addBatch
	 * @Description: 新增批次页面
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/addBatch", method = RequestMethod.GET)
	public String addBatch() {
		return "/teacher/orderBatch/addBatch";
	}

	/**
	 * 
	 * @Title: addBatch
	 * @Description: 新增批次页面处理页面
	 * @param bookBatch
	 * @return
	 * @return: String
	 */
	@RequestMapping(value = "/addBatch", method = RequestMethod.POST)
	public String addBatch(BookBatch bookBatch, HttpSession session, RedirectAttributes ra) {
		Teacher t = (Teacher) session.getAttribute(TEACHER_SESSION);
		bookBatch.setSchoolId(t.getSchoolId());
		bookBatch.setStatus(BookBatchType.onunit);
		teacherOrderBatchService.save(bookBatch);
		addSuccessMessage(I18nConstant.success_add, ra);
		return redirect("/teacher/batch/bookOrderBatch");
	}

	/**
	 * 
	 * @Title: editBatch
	 * @Description: 修改页面
	 * @return
	 * @return: String
	 */
	@RequestMapping(value="/editBatch",method=RequestMethod.GET)
	public String editBatch(Long ids,Model model,RedirectAttributes ra){
		BookBatch bookBatch=teacherOrderBatchService.get(ids);
		if(bookBatch.getStatus().equals(BookBatchType.onunit)){
			
			model.addAttribute("bookBatch",bookBatch);
			return "/teacher/orderBatch/editBatch";
		}
		addErrorMessage(I18nConstant.message_error,ra);
		return redirect("/teacher/batch/bookOrderBatch");
	}
	
	/**
	 * 
	 * @Title: editBatch
	 * @Description: 修改批次处理
	 * @return
	 * @return: String
	 */
	@RequestMapping(value="/editBatch",method=RequestMethod.POST)
	public String editBatch(BookBatch bookBatch, RedirectAttributes ra){
		bookBatch.setModifyDate(new Date());
		teacherOrderBatchService.updateSelective(bookBatch);
		addSuccessMessage(I18nConstant.success_edit,ra);
		return redirect("/teacher/batch/bookOrderBatch");
	}
	
	/**
	 * 
	 * @Title: reserveBatch
	 * @Description: 修改批次状态，预定
	 * @param ids
	 * @param ra
	 * @return
	 * @return: String
	 */
	@RequestMapping("/reserveBatch")
	public String reserveBatch(Long ids, RedirectAttributes ra){
		List<BookBatch> list=teacherOrderBatchService.getAll();
		boolean flag=true;
		for(BookBatch b:list){
			if(b.getStatus().equals(BookBatchType.reserve)){
				flag=false;
				break;
			}
		}
		BookBatch bookBatch=teacherOrderBatchService.get(ids);
		if(flag){
			bookBatch.setStatus(BookBatchType.reserve);
			bookBatch.setModifyDate(new Date());
			teacherOrderBatchService.updateSelective(bookBatch);
			addSuccessMessage(I18nConstant.success_edit,ra);
		}else{
			addErrorMessage(I18nConstant.message_error,ra);
		}
		
		return redirect("/teacher/batch/bookOrderBatch");
	}
	
	/**
	 * 
	 * @Title: orderBookList
	 * @Description: 查看批次里面所包含的书
	 * @return
	 * @return: String
	 */
	@RequestMapping("/orderBookList")
	public String orderBookList() {
		return "/teacher/orderBatch/orderBookList";
	}

	/**
	 * 
	 * @Title: getOrderBookBatch
	 * @Description: 获取预定状态的批次
	 * @return
	 * @return: BookBatch
	 */
	@RequestMapping("/getOrderBookBatch")
	@ResponseBody
	public BookBatch getOrderBookBatch() {
		return teacherOrderBatchService.getOrderBatch(getTeacher().getSchoolId(), BookBatchType.reserve);
	}

}
