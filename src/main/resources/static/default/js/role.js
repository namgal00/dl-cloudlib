$(function() {
	f_input_click();
	s_input_click();
	t_input_click();
});

/*******************************************************************************
 * 三级菜单点击选中的时候执行的动作 TODO
 ******************************************************************************/
function t_input_click() {
	$(".t_input").click(function() {
		var $t_input = $(this);
		var $s_input = $t_input.parent().parent().parent().children("input");
		var $f_input = $s_input.parent().parent().parent().children("input");
		if ($t_input.attr("checked")) {
			$s_input.attr("checked", "checked");
			$f_input.attr("checked", "checked");
		}

	});

}

/*******************************************************************************
 * 一级菜单点击的时候执行的动作
 * 
 ******************************************************************************/
function f_input_click() {
	$(".f_input").click(
			function() {
				var $f_input = $(this);
				var $s_input = $f_input.parent().children("ul").children("li")
						.children("input");
				var $t_input = $s_input.parent().children("ul").children("li")
						.children("input");
				if ($f_input.attr("checked")) {
					$s_input.attr("checked", "checked");
					$t_input.attr("checked", "checked");
				} else {
					$s_input.removeAttr("checked");
					$t_input.removeAttr("checked");
				}

			});
}
/*******************************************************************************
 * 二级菜单点击的时候
 ******************************************************************************/
function s_input_click() {
	$(".s_input").click(
			function() {
				var $s_input = $(this);
				var $t_input = $s_input.parent().children("ul").children("li")
						.children("input");
				var $f_input = $s_input.parent().parent().parent().children(
						"input");
				if ($s_input.attr("checked")) {
					// 执行子元素的操作
					$t_input.attr("checked", "checked");
					// 执行父元素的操作 --- 直接将父元素选中 就选是已经选中也可以继续选中的
					$f_input.attr("checked", "checked");
				} else {
					// 执行子元素的操作
					$t_input.removeAttr("checked");
					// 执行父元素的操作 若同级的元素中也是没有被选举那种的 那么就将父元素也去除
					var $s_input_all = $s_input.parent().parent().prevAll()
							.children("li").children("input");
					var judge = false;
					$s_input_all.each(function() {
						if ($(this).attr("checked")) {
							judge = true;
						}
					});
					if (!judge) {
						$f_input.removeAttr("checked");
					}
				}

			});
}

/*******************************************************************************
 * 表单提交时候的验证
 ******************************************************************************/
function checkSubmit() {
	if (checkName() && checkPriority()) {
		return true;
	}
	return false;
}
/*******************************************************************************
 * 验证名称是否为空
 ******************************************************************************/
function checkName() {
	return WD.check_null_add_notice($("input[name='name']"));
}
/*******************************************************************************
 * 验证排序是否为空
 ******************************************************************************/
function checkPriority() {
	return WD.check_null_add_notice($("input[name='priority']"));

}
/*******************************************************************************
 * 初始化选中框
 ******************************************************************************/
function initCheckbox(roleMenus,roleOperates) {
	for ( var i = 0; i < roleMenus.length; i++) {
		$("#navigation input[value=" + roleMenus[i].menuId + "]").attr(
				"checked", "checked");
	};
	for ( var i = 0; i < roleOperates.length; i++) {
		$("#navigation2 input[value=" + roleOperates[i].operateId + "]").attr(
				"checked", "checked");
	};
	for ( var i = 0; i < roleOperates.length; i++) {
		$("#navigation3 input[value=" + roleOperates[i].operateId + "]").attr(
				"checked", "checked");
	};
}