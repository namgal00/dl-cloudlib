/**
 * 代理类型变化
 * 
 * @returns
 */
function agentLevel_change() {
	var value = $("#agentLevel").val();
	// 判断如果是省级代理
	if (value == 'province') {
		$("#province_sr").val(-1);
		WD.disabled($("#city_sr"));
		WD.disabled($("#county_sr"));
	} else if (value == 'city') {
		$("#province_sr").val(-1);
		WD.rmDisabled($("#city_sr"));
		WD.empty_add($("#city_sr"));
		WD.disabled($("#county_sr"));
	} else if (value == "county") {
		$("#province_sr").val(-1);
		WD.rmDisabled($("#city_sr"));
		WD.empty_add($("#city_sr"));
		WD.rmDisabled($("#county_sr"));
		WD.empty_add($("#county_sr"));
	}
}

/**
 * 根据上级添加下级
 * 
 * @param $obj1
 * @param $obj2
 */
function chooseUpPFchild($obj1, $obj2, url) {
	var val1 = $obj1.val();
	WD.ajax({
		url : url,
		data : {
			"parentId" : val1
		},
		dataType : "json",
		cache : false,
		success : function(data) {
			WD.empty_add($obj2);
			for (sr in data) {
				var id = data[sr].id;
				var name = data[sr].name;
				$obj2.append("<option value=" + id + ">" + name + "</option>");
			}
		}
	});

}
function check(url, url_phone, url_email) {
	return (checkUserName(url) & checkPhone_url(url_phone)
			& checkEmail_url(url_email) & checkRealName() & checkRealPhone() & checkPassword() & checkPassword_again()
			& checkIDCard() & checkAgentLevel()
			& WD.check_notBlank($("#company"))
			& WD.check_notBlank($("#address"))
			& WD.check_notBlank($("#licenseCode"))
			& WD.check_notBlank($("#trcCode"))
			& WD.check_notBlank($("#organizationCode"))
			& WD.check_file($("#license_file")) & WD.check_file($("#trc_file")) & WD
			.check_file($("#organizationCode_file")))
			& WD.check_file($("#idCardCopy_file"));

}
/**
 * 验证手机
 * 
 * @param url
 * @returns {Boolean}
 */
function checkPhone_url(url) {
	var phone = $("#phone").val();
	var judge = checkPhone(phone);
	if (!judge) {
		WD.add_error($("#phone"));
		return judge;
	}
	if (judge) {
		WD.ajax({
			url : url,
			data : {
				"phone" : phone
			},
			dataType : "text",
			cache : false,
			success : function(data) {
				if(data == "false"){
					judge = false;
				}
			}
		});
	}
	if (!judge) {
		$("#phone").parent().attr("class", "form-group has-error");
		$("#phone").parent().find("span").html("：手机已存在！");
	}
	return judge;
}
/**
 * 验证邮箱
 * 
 * @param url
 * @returns {Boolean}
 */
function checkEmail_url(url) {
	var email = $("#email").val();
	var judge = checkEmail(email);
	if(!judge)return judge;
	if (judge) {
		WD.ajax({
			url : url,
			data : {
				"email" : $("#email").val()
			},
			dataType : "text",
			cache : false,
			success : function(data) {
				if(data == "false"){
					judge = false;
				}
			}
		});
	}
	if (!judge) {
		$("#email").parent().attr("class", "form-group has-error");
		$("#email").parent().find("span").html("：邮箱已存在！");
	}
	return judge;
}
function checkRegister(url0, url1) {
	return checkSchoolName(url0) & checkSchoolCode(url1)
			& WD.check_notBlank($("#address"))
			& WD.check_notBlank($("#schoolCode"))
			& checkAgentLevel_enum($("#province_sr"))
			& checkAgentLevel_enum($("#city_sr"))
			& checkAgentLevel_enum($("#county_sr"))
			& WD.check_notBlank($("#userName"))
			& checkPhone_MobilePhone($("#phone")) & checkEmail();
}
function checkSchoolName(url0) {
	var schoolName = $("#schoolName").val();
	var judge = WD.isNotBlank(schoolName);
	if (judge) {
		WD.ajax({
			url : url0,
			data : {
				"schoolName" : schoolName
			},
			dataType : "json",
			cache : false,
			success : function(data) {
				judge = data;
			}
		});
	}
	if (!judge) {
		WD.add_error($("#schoolName"));
	}
	return judge;

}

function checkSchoolCode(url1) {
	var schoolCode = $("#schoolCode").val();
	var judge = WD.isNotBlank(schoolCode);
	if (judge) {
		WD.ajax({
			url : url1,
			data : {
				"schoolCode" : schoolCode
			},
			dataType : "json",
			cache : false,
			success : function(data) {
				judge = data;
			}
		});
	}
	if (!judge) {
		WD.add_error($("#schoolCode"));
	}
	return judge;

}

/**
 * 验证用户名
 * 
 * @param url
 */
function checkUserName(url) {
	var userName = $("#userName").val();
	var judge = WD.isNotBlank(userName);
	if (judge) {
		WD.ajax({
			url : url,
			data : {
				"userName" : userName
			},
			dataType : "text",
			cache : false,
			success : function(data) {
				if(data == "false"){
					judge = false;
				}
			}
		});
	}
	if (!judge) {
		$("#userName").parent().attr("class", "form-group has-error");
		$("#userName").parent().find("span").html(":用户名不能重复！");
	}
	return judge;

}
/**
 * 验证密码
 */
function checkPassword() {
	var password = $("#password").val();
	var judge = WD.isNotBlank(password);
	if (!judge) {
		WD.add_error($("#password"));
	}
	return judge;
}
/**
 * 焦点失去的时候执行 验证2次密码是否一只
 * 
 * @param obj
 */
function check_eq(obj) {
	var pw1 = $("#password").val();
	var pw2 = $(obj).val();
	if (pw1 != pw2) {
		WD.add_error($(obj));
	}
}
/**
 * 验证重复密码
 */
function checkPassword_again() {
	var judge = true;
	var pw1 = $("#password").val();
	var pw2 = $("#password_again").val();
	if (!WD.isNotBlank(pw2) || pw1 != pw2) {
		WD.add_error($("#password_again"));
		judge = false;
	}
	return judge;
}
/**
 * 验证手机或者是移动电话
 * 
 * @param $obj
 */
function checkPhone_MobilePhone($obj) {
	var phone = $obj.val();
	var judge = WD.test(phone, /(^(\d{3,4}-)?\d{7,8})$|(1[0-9]{10})/);
	var judge1 = WD.test(phone, /^1[3|4|5|8]\d{9}$/);
	if (judge || judge1) {
		return true;
	} else {
		WD.add_error($obj);
		return false;
	}
}
/**
 * 验证电话
 */
function checkPhone() {
	var phone = $("#phone").val();
	var judge = WD.test(phone, /(^(\d{3,4}-)?\d{7,8})$|(1[0-9]{10})/);
	if (!judge) {
		WD.add_error($("#phone"));
	}
	return judge;
}
/**
 * 验证身份证
 */
function checkIDCard() {
	var idCard = $("#idCard").val();
	var judge = WD.test(idCard,
			/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/);
	if (!judge) {
		WD.add_error($("#idCard"));
	}
	return judge;
}
/**
 * 验证移动电话
 * 
 * @returns
 */
function checkMobilePhone() {
	var mobilePhone = $("#mobilePhone").val();
	var judge = WD.test(mobilePhone, /(^(\d{3,4}-)?\d{7,8})$|(13[0-9]{9}) /);
	if (!judge) {
		WD.add_error($("#mobilePhone"));
	}
	return judge;
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
 * 验证企业法人
 * 
 * @returns
 */
function checkRealName() {
	var realName = $("#realName").val();
	var judge = WD.isNotBlank(realName);
	if (!judge) {
		WD.add_error($("#realName"));
	}
	return judge;
}
/**
 * 验证企业法人的电话
 * 
 * @returns
 */
function checkRealPhone() {
	var realPhone = $("#realPhone").val();
	var judge = WD.test(realPhone, /^1[3|4|5|8]\d{9}$/);
	if (!judge) {
		WD.add_error($("#realPhone"));
	}
	return judge;
}
/**
 * 验证授权等级
 * 
 * @returns {Boolean}
 */
function checkAgentLevel() {
	var judge = true;
	var agentLevel = $("#agentLevel").val();
	if (agentLevel < 0) {
		judge = false;
		WD.add_error($("#agentLevel"));
	} else {
		if (agentLevel == 'province') {
			judge = checkAgentLevel_enum($("#province_sr"));
		} else if (agentLevel == 'city') {
			judge = (checkAgentLevel_enum($("#province_sr")) & checkAgentLevel_enum($("#city_sr")));
		} else {
			judge = (checkAgentLevel_enum($("#province_sr"))
					& checkAgentLevel_enum($("#city_sr")) & checkAgentLevel_enum($("#county_sr")));
		}
	}
	return judge;

}

function checkAgentLevel_enum($obj) {
	var value = $obj.val();
	var judge = true;
	if (value < 0) {
		WD.add_error($obj);
		judge = false;
	}
	return judge;
}
