/*******************************************************************************
 * 点击选择方式的时候执行的动作
 ******************************************************************************/
function choose_way($obj) {
	var value = $obj.val();
	if ("ONE" == value) {
		/* 单个查询 */
		action_of_ONE();

	} else if ("MORE" == value) {
		/* 多个查询 */
		action_of_MORE();
	}

}
/*******************************************************************************
 * 单个查询的动作
 ******************************************************************************/
function action_of_ONE() {
	/* 隐藏显示 */
	hide_dateTR();
	hide_shcoolNamesTR();
	show_schoolNameTR();
	show_datesTR();
	/* 清空添加 */
	clean_schoolNameTR();// 清空
	clean_datesTR();// 清空
	add_datesTR();// 赋值

}
/*******************************************************************************
 * 多个查询的动作
 ******************************************************************************/
function action_of_MORE() {
	/* 隐藏显示 */
	show_dateTR();
	show_schoolNamesTR();
	hide_schoolNameTR();
	hide_datesTR();
	/* 清空添加 */
	add_dateTR();// 初始化日期
	clean_schoolNamesTR();// 清空
	add_schoolNamesTR();// 赋值

}
/*******************************************************************************
 * 添加动作addDates
 ******************************************************************************/
function action_of_addDates() {
	add_datesTR();
}
/*******************************************************************************
 * 添加动作addSchoolNames
 ******************************************************************************/
function action_of_addSchoolNames() {
	add_schoolNamesTR();

}
/*******************************************************************************
 * 删除一行
 ******************************************************************************/
function deleteLine(obj) {
	var $obj = $(obj);
	$obj.next().remove();// 删除br
	$obj.prev().prev().prev().remove();
	$obj.prev().prev().remove();
	$obj.prev().remove();
	$obj.remove();

}
/*******************************************************************************
 * 筛选动作
 ******************************************************************************/
function screen(obj) {
	var $obj = $(obj);
	var $input = $obj.prev().prev();
	var $select = $obj.prev();
	var url = base + "/admin/getSchool.do";
	var schoolName = $input.val();
	if (!WD.isNotBlank(schoolName)) {
		$select.append("<option>未找到数据</option>");
		return;
	}
	WD.ajax({
		url : url,
		data : {
			"schoolName" : schoolName
		},
		dataType : "JSON",
		success : function(result) {
			if (result.length > 0) {
				$select.empty();
				$select.append("<option>---请选择---</option>");
				for ( var i = 0; i < result.length; i++) {
					$select.append("<option>" + result[i] + "</option>");
				}
			} else {
				$select.append("<option>未找到数据</option>");
			}
		}

	});

}
/*******************************************************************************
 * 
 * 清空schoolNamesTR
 ******************************************************************************/
function clean_schoolNamesTR() {
	$("#addSchoolNames").prevAll().remove();
}

/*******************************************************************************
 * 补全schoolNamesTR
 ******************************************************************************/
function add_schoolNamesTR() {
	$("#addSchoolNames")
			.before(
					'<input type="text" placeholder="请填写学校/地区名称" name="schoolNames" /><select onchange="well(this);"><option>---请选择---</option></select><button type="button" onclick="screen(this);">筛选</button><button type="button" onclick="deleteLine(this);">删除</button><br />');
}
/*******************************************************************************
 * 补全add_dateTR
 ******************************************************************************/
function add_dateTR() {
	$("#startDate").val(startDate);
	$("#endDate").val(endDate);

}
/*******************************************************************************
 * 清空schoolNameTR
 ******************************************************************************/
function clean_schoolNameTR() {
	$("#schoolName").val("");
	$("#schoolNameSelect option").each(function() {
		var $obj = $(this);
		if ($obj.index() != 0) {
			$obj.remove();
		}
	});
}
/*******************************************************************************
 * 选中select的动作
 ******************************************************************************/
function well(obj) {
	var $obj = $(obj);
	var text = $obj.find("option:selected").text();
	$obj.prev().val(text);
}
/*******************************************************************************
 * 添加datesTR
 ******************************************************************************/
function add_datesTR() {
	var i = $("#addDates").prevAll("br").length + 1;
	var str = "<input placeholder=\"请选择开始时间\" class=\"length-one\" name=\"startDates\" type=\"text\" id=\"startDate"
			+ i
			+ "\" "
			+ "value=\""
			+ startDate
			+ "\""
			+ "onclick=\"WdatePicker({skin:'blueFresh',dateFmt:'yyyy-MM-dd',el:'startDate"
			+ i
			+ "',maxDate:'#F{$dp.$D(\\'endDate"
			+ i
			+ "\\')}'})\" />"
			+ "<span style=\"color: black;\">至</span> <input placeholder=\"请选择结束时间\" class=\"length-one\" name=\"endDates\" type=\"text\" id=\"endDate"
			+ i
			+ "\""
			+ "value=\""
			+ endDate
			+ "\""
			+ "onclick=\"WdatePicker({skin:'blueFresh',dateFmt:'yyyy-MM-dd',el:'endDate"
			+ i
			+ "',minDate:'#F{$dp.$D(\\'startDate"
			+ i
			+ "\\')}'})\" /><button type=\"button\" onclick=\"deleteLine(this);\">删除</button><br>";
	$("#addDates").before(str);
}
/*******************************************************************************
 * 清空datesTR
 ******************************************************************************/
function clean_datesTR() {
	$("#addDates").prevAll().remove();
}

/*******************************************************************************
 * 隐藏schoolNameTR
 ******************************************************************************/
function hide_schoolNameTR() {
	hide_obj($("#schoolNameTR"));
}
/*******************************************************************************
 * 隐藏dateTR
 ******************************************************************************/
function hide_dateTR() {
	hide_obj($("#dateTR"));
}

/*******************************************************************************
 * 隐藏shcoolNamesTR
 ******************************************************************************/
function hide_shcoolNamesTR() {
	hide_obj($("#shcoolNamesTR"));
}
/*******************************************************************************
 * 隐藏datesTR
 ******************************************************************************/
function hide_datesTR() {
	hide_obj($("#datesTR"));

}
/*******************************************************************************
 * 显示schoolNameTR
 ******************************************************************************/
function show_schoolNameTR() {
	show_obj($("#schoolNameTR"));
}
/*******************************************************************************
 * 显示dateTR
 ******************************************************************************/
function show_dateTR() {
	show_obj($("#dateTR"));
}

/*******************************************************************************
 * 显示shcoolNamesTR
 ******************************************************************************/
function show_schoolNamesTR() {
	show_obj($("#shcoolNamesTR"));
}
/*******************************************************************************
 * 显示datesTR
 ******************************************************************************/
function show_datesTR() {
	show_obj($("#datesTR"));

}
/*******************************************************************************
 * 隐藏
 ******************************************************************************/
function hide_obj($obj) {
	$obj.hide();
}
/*******************************************************************************
 * 显示
 ******************************************************************************/
function show_obj($obj) {
	$obj.show();
}
/*******************************************************************************
 * 检测查询内用
 ******************************************************************************/
function checkQueryContent() {
	return WD.check_null_add_notice($("#queryContent"));
}
/*******************************************************************************
 * 检测查询学校
 ******************************************************************************/
function checkSchoolName() {
	var ra = $("input[type='radio']:checked").val();
	if(ra == "ONE"){
		var value = $("#schoolName").val();
		if (WD.isNotBlank(value)) {
			return true;
		} else {
			$("#schoolName").next().next().next().html("该字段不允许为空*");
			return false;
		}
	}else{
		return true;
	}
	//return WD.check_null_add_notice($("input[name='schoolName']"));

}
/*******************************************************************************
 * 检测查询日期
 ******************************************************************************/
function checkDate() {
	var startDate = $("#startDate").val();
	var endDate = $("#endDate").val();
	if(WD.isNotBlank(startDate) && WD.isNotBlank(endDate)){
		return true;
	}else{
		$("#dateSapn").html("请填写日期*");
	}
}

function cleanSchoolNameNotice(obj){
	var $obj = $(obj);
	$obj.next().next().next().html("*");
}

function cleanDate(){
	$("#dateSapn").html("*");
}
