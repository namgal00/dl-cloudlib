/*******************************************************************************
 * 点击变化事件first
 ******************************************************************************/
function changeFirst(obj, url) {
	var $obj = $(obj);
	var id = $obj.val();
	if (WD.isNotBlank(id)) {
		WD.disabledBtn($obj);// 禁用下拉框
		WD.ajax({
					url : url,
					data : {
						"id" : id
					},
					dataType : "JSON",
					success : function(result) {
						$("#secone_menuId").empty();// 移除
						$("#third_menuId").empty();
						$("#third_menuId").append(
								'<option value="">' + '请选择菜单' + '</option>');
						$("#secone_menuId").append(
								'<option value="">' + '请选择菜单' + '</option>');
						for ( var i = 0; i < result.length; i++) {
							var id = result[i].id;
							var name = result[i].name;
							$("#secone_menuId").append(
									'<option value="' + id + '">' + name
											+ '</option>');
						}
					}

				});
		WD.rmDisabledBtn($obj);
	}
}
/*******************************************************************************
 * 二级菜单的change事件
 ******************************************************************************/
function changeSecone(obj, url) {
	var $obj = $(obj);
	var id = $obj.val();
	if (WD.isNotBlank(id)) {
		WD.disabledBtn($obj);// 禁用下拉框
		WD
				.ajax({
					url : url,
					data : {
						"id" : id
					},
					dataType : "JSON",
					success : function(result) {
						$("#third_menuId").empty();// 移除
						$("#third_menuId").append(
								'<option value="">' + '请选择菜单' + '</option>');
						for ( var i = 0; i < result.length; i++) {
							var id = result[i].id;
							var name = result[i].name;
							$("#third_menuId").append(
									'<option value="' + id + '">' + name
											+ '</option>');
						}
					}

				});
		WD.rmDisabledBtn($obj);
	}

}
function checkSubmit() {
	if (checkThird_menuId() && checkName() && checkPriority() && checkHtml()
			&& checkUrl()) {
		return true;
	} else {
		return false;
	}
}

/*******************************************************************************
 * 验证3级菜单是否为null
 * 
 ******************************************************************************/
function checkThird_menuId() {
	return check($("#third_menuId"));
}
/*******************************************************************************
 * 验证名称是否为空
 ******************************************************************************/
function checkName() {
	return check($("#name"));
}
/*******************************************************************************
 * 
 * 验证排序字段是否为空
 ******************************************************************************/

function checkPriority() {
	return check($("#priority"));
}
/*******************************************************************************
 * 验证html是否为空
 ******************************************************************************/
function checkHtml() {
	return check($("#html"));
}
/*******************************************************************************
 * 验证url是否为空
 ******************************************************************************/
function checkUrl() {
	return check($("#url"));
}
/*******************************************************************************
 * 验证是否为空的公共方法
 ******************************************************************************/
function check($obj) {
	var value = $obj.val();
	if (WD.isNotBlank(value)) {
		return true;
	} else {
		$obj.next().html("该字段不允许为空*");
		return false;
	}
}
/*******************************************************************************
 * 列表页面：一级菜单的变化动作
 ******************************************************************************/
function changeBySearch_first_menuId($obj, url) {
	var id = $obj.val();
	if (WD.isNotBlank(id)) {
		WD.disabledBtn($obj);// 禁用下拉框
		WD
				.ajax({
					url : url,
					data : {
						"id" : id
					},
					dataType : "JSON",
					success : function(result) {
						$("#search_secone_menuId").empty();
						$("#search_secone_menuId").append(
								'<option value="">' + '请选择菜单' + '</option>');
						$("#search_third_menuId").empty();
						$("#search_third_menuId").append(
								'<option value="">' + '请选择菜单' + '</option>');
						for ( var i = 0; i < result.length; i++) {
							var id = result[i].id;
							var name = result[i].name;
							$("#search_secone_menuId").append(
									'<option value="' + id + '">' + name
											+ '</option>');
						}
					}

				});
		WD.rmDisabledBtn($obj);
	}
}
/*******************************************************************************
 * 列表页面：二级菜单的change动作
 ******************************************************************************/
function changeBySearch_secone_menuId($obj, url) {
	var id = $obj.val();
	if (WD.isNotBlank(id)) {
		WD.disabledBtn($obj);// 禁用下拉框
		WD
				.ajax({
					url : url,
					data : {
						"id" : id
					},
					dataType : "JSON",
					success : function(result) {
						$("#search_third_menuId").empty();
						$("#search_third_menuId").append(
								'<option value="">' + '请选择菜单' + '</option>');
						for ( var i = 0; i < result.length; i++) {
							var id = result[i].id;
							var name = result[i].name;
							$("#search_third_menuId").append(
									'<option value="' + id + '">' + name
											+ '</option>');
						}
					}

				});
		WD.rmDisabledBtn($obj);
	}

}
