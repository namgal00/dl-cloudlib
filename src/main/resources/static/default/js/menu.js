/**
 * 选中一级菜单时候执行的方法
 */
function selected1() {
	$("#menu_icon_tr").show();
	$("#url_tr").show();
	$("#up_menu_tr").hide();

	$("#upMenuId").empty();
}

/**
 * 选中二级菜单时候执行的方法
 */
function selected2(val, url) {
	$("#up_menu_tr").show();
	$("#menu_icon_tr").hide();
	$("#url_tr").hide();

	$("#upMenuId").empty();
	getUpMenus(val, url);
	$("input[name='menuIcon']").val("");
	$("input[name='url']").val("");
}

/**
 * 选中三级菜单时候执行的方法
 */
function selected3(val, url) {
	$("#up_menu_tr").show();
	$("#menu_icon_tr").hide();
	$("#url_tr").show();

	$("#upMenuId").empty();
	getUpMenus(val, url);
	$("input[name='menuIcon']").val("");
}

/**
 * 一级菜单提交时候的验证
 */
function verify1() {
	if (checkName() && checkPriority() && checkMenuIcon() && checkUrl())
		return true;
	return false;
}

/**
 * 二级菜单提交时候的验证
 */
function verify2() {
	if (checkName() && checkPriority() && checkUpMenuId())
		return true;
	return false;
}

/**
 * 三级菜单提交时候的验证
 */
function verify3() {
	if (checkName() && checkPriority() && checkUpMenuId() && checkUrl())
		return true;
	return false;
}

// ---dao
/**
 * 验证名称
 */
function checkName() {
	return WD.check_null_add_notice($("input[name='name']"));
}
/**
 * 验证类型
 */
function checkMenuType() {
	return WD.check_null_add_notice($("#menu_type"));
}
/**
 * 验证上级菜单
 */
function checkUpMenuId() {
	return WD.check_null_add_notice($("#upMenuId"));
}
/**
 * 验证图标
 */
function checkMenuIcon() {
	return WD.check_null_add_notice($("input[name='menuIcon']"));
}

/**
 * 验证请求路径
 */
function checkUrl() {
	return WD.check_null_add_notice($("input[name='url']"));
}
/**
 * 验证排序字段
 */
function checkPriority() {
	return WD.check_null_add_notice($("#priority"));
}
/**
 * 获取上级菜单的数据 只有二 3 级菜单才有
 * 
 * @param type
 * @param url
 */
function getUpMenus(type, url) {
	WD.ajax({
		url : url,
		data : {
			"menuType" : type
		},
		dataType : "JSON",
		success : function(result) {
			for ( var i = 0; i < result.length; i++) {
				var id = result[i].id;
				var name = result[i].name;
				$("#upMenuId").append(
						'<option value="' + id + '">' + name + '</option>');
			}
		}

	});
}
