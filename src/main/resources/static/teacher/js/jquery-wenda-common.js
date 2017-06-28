$(function() {
	disaply_prompt();
	input_WdatePicker_init();

});
function disaply_prompt() {
	var message = $("#message_prompt").html();
	if (WD.isNotBlank(message)) {
		setTimeout("dp()", 5000);
	}
}
function dp() {
	$("#message_prompt").hide();
}
/**
 * 获取屏幕的长宽
 */
function findDimensions() // 函数：获取尺寸
{
	// 获取窗口宽度
	if (window.innerWidth)
		winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
		winWidth = document.body.clientWidth;
	// 获取窗口高度
	if (window.innerHeight)
		winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight))
		winHeight = document.body.clientHeight;
	// 通过深入Document内部对body进行检测，获取窗口大小
	if (document.documentElement && document.documentElement.clientHeight
			&& document.documentElement.clientWidth) {
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	}
	// 结果输出至两个文本框
	// document.form1.availHeight.value = winHeight;
	// document.form1.availWidth.value = winWidth;
}
/**
 * 清空错误提示
 */
function clean_error_label(obj) {
	var $obj = $(obj);
	var $label = $obj.parent().find("label");
	var $span = $label.find("span");
	$label.removeAttr("style");
	$span.html("");

}
/**
 * 添加错误提示
 * 
 * @param obj
 * @param message
 */
function add_error_label($obj, message) {
	var $label = $obj.parent().find("label");
	var $span = $label.find("span");
	$label.attr("style", "color:red;");
	$span.html(message);
}
/**
 * 判断
 * 
 * @param $obj
 * @param message
 */
function check_input($obj, message) {
	var value = $obj.val();
	if (!WD.isNotBlank(value)) {
		if (WD.isNotBlank(message)) {
			add_error_label($obj, message);
		} else {
			add_error_label($obj, "不允许为空");
		}
		return false;
	} else {
		return true;
	}
}
/**
 * 判断手机
 * 
 * @param $obj
 * @param message
 */
function check_input_phone($obj, message) {
	var value = $obj.val();
	if (!WD.test(value, /^1\d{10}$/)) {
		if (WD.isNotBlank(message)) {
			add_error_label($obj, message);
		} else {
			add_error_label($obj, "手机不匹配");
		}
		return false;
	}
	return true;
}
/**
 * 判断手机
 * 
 * @param $obj
 * @param message
 */
function check_input_email($obj, message) {
	var value = $obj.val();
	if (!WD.test(value, /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/)) {
		if (WD.isNotBlank(message)) {
			add_error_label($obj, message);
		} else {
			add_error_label($obj, "邮箱不匹配");
		}
		return false;
	}
	return true;
}

function check_regex($obj, pattern, message) {
	var value = $obj.val();
	if (!WD.isNotBlank(value) && !WD.test(value, pattern)) {
		if (WD.isNotBlank(message)) {
			add_error_label($obj, message);
		} else {
			add_error_label($obj, "不允许为空");
		}
		return false;
	}
	return true;
}

/**
 * 清空提示框
 * 
 * @param obj
 */
function clean_validation(obj) {
	WD.clean_validation($(obj).parent(), "form-group");
}
/**
 * 上一页下一页
 * 
 * @param pageNumber
 */
function goPage(pageNumber) {
	$("#pageNumber").val(pageNumber);
	$("#formId").submit();
}
/**
 * 跳转
 * 
 * @param pageCount
 */
function forwardPage(pageCount) {
	var num = $("#goPager").val();
	if (num == '') {
		alert("请输入页码");
		return;
	}
	var reg = /^[1-9]+[0-9]*$/;
	if (!reg.test(num)) {
		alert("页码必须为大于0的整数!");
		return;
	}
	if (parseInt(num) > pageCount) {
		alert("页码不能超出总页数!");
		return;
	}
	goPage(num);
}
/**
 * 验证邮箱
 * 
 * @returns
 */
function checkEmail() {
	var email = $("#email").val();
	var judge = WD.test(email,
			/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
	if (!judge) {
		WD.add_error($("#email"));
	}
	return judge;
}
/**
 * 公共的操作方法
 * 
 * @param obj
 * @param url
 */
function operator_fn(obj, url) {
	var $obj = $(obj);
	var operatorId = $obj.parent().find("input").val();
	$("#id").val(operatorId);
	$("#formId").attr("action", url);
	$("#formId").submit();
}
/**
 * 公共的删除方法
 * 
 * @param obj
 * @param url
 */
function operator_fn_delete(obj, url) {
	var k = window.confirm('确定要删除此条数据?');
	if (k) {
		operator_fn(obj, url);
	}
}
/**
 * 将select选中
 * 
 * @param $obj
 * @param val
 */
function selected_option($obj, val) {
	if (WD.isNotBlank(val)) {
		$obj.val(val);
	}
}

/**
 * 判断str1字符串是否以str2为结束
 * 
 * @param str1
 *            原字符串
 * @param str2
 *            子串
 * @author pansen
 * @return 是-true,否-false
 */
function endWith(str1, str2) {
	if (str1 == null || str2 == null) {
		return false;
	}
	if (str1.length < str2.length) {
		return false;
	} else if (str1.toUpperCase() == str2.toUpperCase()) {
		return true;
	} else if (str1.substring(str1.length - str2.length).toUpperCase() == str2
			.toUpperCase()) {
		return true;
	}
	return false;
}

/**
 * 日期插件的初始化
 */
function input_WdatePicker_init() {
	$("input.WdatePicker").click(function() {
		WdatePicker();
	});
}
/**
 * 清空错误提示
 */
function clean_class_html(obj){
	var $obj = $(obj);
	var $label = $obj.parent().find("label");
	var $span = $label.find("span");
	$span.html("");
	WD.clean_validation($(obj).parent(), "form-group");
}
