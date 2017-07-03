$(function() {
	judgeShow();// 判断是否显示信息
});
/*******************************************************************************
 * 判断是否显示提示信息
 ******************************************************************************/
function judgeShow() {
	var message_prompt_title = $("#message_prompt_title").html();
	if ($.trim(message_prompt_title) != "") {
		showBg();
	}

}

/*******************************************************************************
 * 显示灰色 jQuery 遮罩层
 ******************************************************************************/
function showBg() {
	var bh = $("html").height();
	var bw = $("html").width();
	$("#fullbg").css({
		height : bh,
		width : bw,
		display : "block"
	});
	$("#dialog").show();
}
/*******************************************************************************
 * 关闭灰色 jQuery 遮罩
 ******************************************************************************/
function closeBg() {
	$("#fullbg,#dialog").hide();
}

/*******************************************************************************
 * 获取焦点动作:清空提示
 ******************************************************************************/
function cleanNotice(obj) {
	var $obj = $(obj);
	var $nextObj = $obj.next();
	$nextObj.text("*");
}

/*******************************************************************************
 * 分页
 ******************************************************************************/
function goPage(pageNumber) {
	$("#pageNum").val(pageNumber);
	// var uri = $("#formId").attr("action");
	// uri = uri.replace("/list", "/queryData");
	// $("#formId").attr("action", uri);
	$("#formId").submit();
}

/*******************************************************************************
 * 查询开始时间和结束时间
 ******************************************************************************/
function goSETime() {
	// $("#pageNumber").val(pageNumber);
	// var uri = $("#formId").attr("action");
	// uri = uri.replace("/list", "/queryData");
	// $("#formId").attr("action", uri);
	$("#formId").submit();
}

/*******************************************************************************
 * 分页跳转
 ******************************************************************************/
function forwardPage(pageCount) {
	var num = $("#goName").val();
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
/*******************************************************************************
 * 全选或者全不选
 ******************************************************************************/
function checkIds() {
	$("input[name='ids']").each(function() {
		if (!$(this).attr("checked")) {
			$(this).attr("checked", 'true');// 全选
		} else {
			$(this).removeAttr("checked");// 全不选
		}
	});
}
/*******************************************************************************
 * 获取多选框的选中的ids
 ******************************************************************************/
function getCheckIds() {
	var ids = new Array();
	$("input[name='ids']").each(function(i) {
		if ($(this).attr("checked")) {
			ids.push($(this).val());
		}
	});
	return ids;

}
/*******************************************************************************
 * 删除check---一个id
 * 
 ******************************************************************************/
function deleteDataByCheckId(url) {
	if (confirm('删除后将无法恢复，确认删除？')) {
		var ids = getCheckIds();
		var length = ids.length;
		if (length != 1) {
			alert("请选择一条记录");
			return;
		} else {
			$("#form_ids").attr("action", url);
			$("#form_ids").submit();
		}
	}
}
/*******************************************************************************
 * 选择一条记录修改
 ******************************************************************************/
function editDataByCheckId(url) {
	var ids = getCheckIds();
	var length = ids.length;
	if (length != 1) {
		alert("请选择一条记录");
		return;
	} else {

		$("#form_ids").attr("action", url);
		$("#form_ids").attr("method", "GET");
		$("#form_ids").submit();
	}
}
/*******************************************************************************
 * 新增
 ******************************************************************************/
function addDataByForm(url) {
	$("#form_ids").attr("action", url);
	$("#form_ids").attr("method", "GET");
	$("#form_ids").submit();
}

/*******************************************************************************
 * 获取随机数
 ******************************************************************************/
function generateMixed(n) {
	var res = "";
	for ( var i = 0; i < n; i++) {
		var id = Math.ceil(Math.random() * 16);
		res += chars[id];
	}
	return res;
}