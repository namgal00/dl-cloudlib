//自定义的jquery插件
(function($) {
	// 全局系统变量
	window["WD"] = {};
	/**
	 * ajax 请求
	 * 
	 * @param options
	 */
	WD.ajax = function(options) {
		var p = options || {};
		var url = p.url || base + "/" + p.action + "!" + p.method + ".do";
		$.ajax({
			cache : false,
			async : p.async == undefined ? false : p.async,
			url : url,
			data : p.data,
			dataType : p.dataType,
			type : 'post',
			beforeSend : function() {
				// 发送前的操作
				if (p.beforeSend) {
					p.beforeSend();
				} else {

				}

			},
			complete : function() {
				// 请求或者失败都调用的函数
				if (p.complete) {
					p.complete();
				} else {

				}
			},
			success : function(result) {
				if (!result)
					return;
				if (p.success)
					p.success(result);
			},
			error : function(xhr, status) {
				if (p.error) {
					p.error();
				} else {
					if (xhr.status == 404) {
						alert("请求路径" + url + "无法找到");
					} else if (eval(xhr.responseText)) {
						alert(eval(xhr.responseText));
					} else {
						alert('发现系统错误 <BR>错误码：' + status);
					}
				}
			}
		});
	};

	/**
	 * 判断字符串不为空
	 */
	WD.isNotBlank = function(str) {
		if (str == "undefined" || str == null || $.trim(str) == "") {
			return false;
		} else {
			return true;
		}
	};
	/**
	 * 禁用button
	 */
	WD.disabledBtn = function($obj) {
		$obj.attr("disabled", "disabled");
	};

	/**
	 * 移除禁用button
	 */
	WD.rmDisabledBtn = function($obj) {
		$obj.removeAttr("disabled");
	};
	/**
	 * 表单提交
	 */
	WD.submit = function(formId, url) {
		$("#" + formId).attr("action", url);
		$("#" + formId).submit();
	};

	/**
	 * 验证是否为空的公共方法  这个必须是配合span 用的
	 */
	WD.check_null_add_notice = function check($obj) {
		var value = $obj.val();
		if (WD.isNotBlank(value)) {
			return true;
		} else {
			$obj.next().html("该字段不允许为空*");
			return false;
		}
	};

})(jQuery);