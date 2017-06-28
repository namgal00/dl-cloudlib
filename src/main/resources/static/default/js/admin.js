/*******************************************************************************
 * 验证的公共方法
 ******************************************************************************/
function check($obj) {
	return WD.check_null_add_notice($obj);
}
/*******************************************************************************
 * 验证 行政区
 ******************************************************************************/
function checkDept() {
	return check($("#dept_id"));
}
/*******************************************************************************
 * 验证用户姓名
 ******************************************************************************/
function checkRealName() {
	return check($("#realName"));
}
/*******************************************************************************
 * 验证名称
 ******************************************************************************/
function checkName() {
	return check($("#name"));
}
/*******************************************************************************
 * 验证密码
 ******************************************************************************/
function checkPassword() {
	return check($("#passWord"));
}
/*******************************************************************************
 * 验证重复密码
 ******************************************************************************/
function checkRepeat_pw() {
	return check($("#repeat_pw"));
}
/*******************************************************************************
 * 验证角色
 ******************************************************************************/
function checkRole() {
	return check($("#role_id"));
}
/*******************************************************************************
 * 表单提交验证
 ******************************************************************************/
function checkSubmit() {
	// 先验证是否为空
	if (checkDept() && checkRealName() && checkName() && checkPassword()
			&& checkRepeat_pw() && checkRole()) {
		// 验证2次密码是否一样
		var ps = $("#passWord").val();
		var re_ps = $("#repeat_pw").val();
		if (ps != re_ps) {
			$("#repeat_pw_notice").html("两次密码不一致*");
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function checkSubmit_edit() {
	// 先验证是否为空 去掉对密码和重复密码的验证
	if (checkDept() && checkRealName() && checkName() && checkRole()) {
		// 验证2次密码是否一样
		var ps = $("#passWord").val();
		var re_ps = $("#repeat_pw").val();
		if (ps != re_ps) {
			$("#repeat_pw_notice").html("两次密码不一致*");
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}

}

/*******************************************************************************
 * 根据schoolName查询学校
 ******************************************************************************/
function getByNameAndRegion($obj, url) {
	var schoolName = $("#schoolName").val();
	var province_id = $("#province_id").val();
	var city_id = $("#city_id").val();
	var county_id = $("#county_id").val();
	if (!WD.isNotBlank(province_id) && !WD.isNotBlank(city_id)
			&& !WD.isNotBlank(county_id)) {
		$("#notice").text("请选择行政区*");
		return;
	}
	WD.disabledBtn($obj);// 禁用按钮
	WD.ajax({
		url : url,
		data : {
			"schoolName" : schoolName,
			"province_id" : province_id,
			"city_id" : city_id,
			"county_id" : county_id
		},
		dataType : "JSON",
		success : function(result) {
			$("#school_id").empty();
			$("#school_id").append("<option value=''>---请选择学校---</option>");
			for ( var i = 0; i < result.length; i++) {
				var id = result[i].id;
				var name = result[i].name;
				$("#school_id").append(
						'<option value="' + id + '">' + name + '</option>');
			}
		}

	});
	WD.rmDisabledBtn($obj);
}
/*******************************************************************************
 * 清空搜索的提示信息
 ******************************************************************************/
function cleanMess(obj) {
	$obj = $(obj);
	$obj.next().next().text("");
}