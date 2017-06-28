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
	 * 验证文件后缀名
	 */
	WD.check_file = function($obj) {
		var judge = WD.check_notBlank($obj);
		if (judge) {
			var fileName = $obj.val();
			var ldot = fileName.lastIndexOf(".");
			var type = fileName.substring(ldot + 1);
			if (type != "jpg" && type != "png") {
				WD.add_error($obj);
				judge = false;
			}
		}
		return judge
	}
	/**
	 * 验证
	 */
	WD.check_notBlank = function($obj) {
		var value = $obj.val();
		var judge = WD.isNotBlank(value);
		if (!judge) {
			WD.add_error($obj);
			judge = false;
		}
		return judge;
	}
	/**
	 * 验证是否匹配
	 */
	WD.check_regex = function($obj, pattern) {
		var value = $obj.val();
		var judge = WD.isNotBlank(value);
		if (!judge) {
			WD.add_error($obj);
			judge = false;
		}
		if (!judge) {
			judge = WD.test(value, pattern);
		}
		return judge;
	}

	/**
	 * 正则表达式验证
	 */
	WD.test = function(value, pattern) {
		return pattern.test(value);
	};

	/**
	 * 禁用
	 */
	WD.disabled = function($obj) {
		var val = $obj.attr("disabled");
		if (!WD.isNotBlank(val)) {
			$obj.attr("disabled", "disabled");
		}
	};

	/**
	 * 移除禁用
	 */
	WD.rmDisabled = function($obj) {
		$obj.removeAttr("disabled");
	};

	/**
	 * 清空select中的内容
	 */
	WD.empty_add = function($obj) {
		$obj.empty();
		$obj.prepend("<option value=''>---请选择---</option>"); // 为Select插入一个Option(第一个位置)
	};
	/**
	 * 消除提示
	 */
	WD.clean_validation = function($obj, value) {
		$obj.attr("class", value);
	};
	/**
	 * 添加错误的提示
	 */
	WD.add_error = function($obj) {
		$obj.parent().attr("class", "form-group has-error");
		$obj.parent().find("span").html("：填写错误！");
	};

	/**
	 * 表单提交
	 */
	WD.submit = function(formId, url) {
		$("#" + formId).attr("action", url);
		$("#" + formId).submit();
	};

})(jQuery);