/*******************************************************************************
 * 省份变化事件
 ******************************************************************************/
function change_province(url) {
	$obj = $("#province_id");
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
						$("#city_id").empty();
						$("#county_id").empty();
						$("#city_id").append(
								"<option value=''>---所属城市---</option>");
						$("#county_id").append(
								"<option value=''>---所属区县---</option>");
						for ( var i = 0; i < result.length; i++) {
							var id = result[i].id;
							var name = result[i].name;
							$("#city_id").append(
									'<option value="' + id + '">' + name
											+ '</option>');
						}
					}

				});
		WD.rmDisabledBtn($obj);
	}
}

/*******************************************************************************
 * 城市变化事件
 ******************************************************************************/
function change_city(url) {
	$obj = $("#city_id");
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
						$("#county_id").empty();
						$("#county_id").append(
								"<option value=''>---所属区县---</option>");
						for ( var i = 0; i < result.length; i++) {
							var id = result[i].id;
							var name = result[i].name;
							$("#county_id").append(
									'<option value="' + id + '">' + name
											+ '</option>');
						}
					}

				});
		WD.rmDisabledBtn($obj);
	}
}
/*******************************************************************************
 * 验证省份
 ******************************************************************************/
function checkProvince() {
	return check($("#province_id"));
}

/*******************************************************************************
 * 验证城市
 ******************************************************************************/
function checkCity() {
	return check($("#city_id"));
}

/*******************************************************************************
 * 验证区县
 ******************************************************************************/
function checkCounty() {
	return check($("#county_id"));
}
/*******************************************************************************
 * 验证名称
 ******************************************************************************/
function checkName() {
	return check($("#name"));
}

/*******************************************************************************
 * 提交时候的验证
 ******************************************************************************/
function checkSubmit(level) {
	if (level == 1) {// 验证省和name
		if (checkProvince() && checkName()) {
			return true;
		} else {
			return false;
		}
	} else if (level == 2) {
		if (checkProvince() && checkCity() && checkName()) {
			return true;
		} else {
			return false;
		}
	} else {
		if (checkProvince() && checkCity() && checkCounty() && checkName()) {
			return true;
		} else {
			return false;
		}
	}

}

/*******************************************************************************
 * 验证的公共方法
 ******************************************************************************/
function check($obj) {
	return WD.check_null_add_notice($obj);
}
