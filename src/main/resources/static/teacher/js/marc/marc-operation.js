var indexNum = -1;
var columNum = -1;
var GLOBAL_SUBFIELDSIGN = '▼';
var isChanged = false;
var autoPinyinField = "200a;60*a;610a;7**a";
var disableLoadFieldName = false;

document.onkeydown = function(event) {
	var e = event ? event : (window.event ? window.event : null);
	var keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;

	if (e.altKey && keyCode == 65) {
		appendOneRow();
	} else if (e.altKey && keyCode == 73) {
		insertOneRow();
	} else if (e.altKey && keyCode == 68) {
		deleteOneRow();
	} else if (e.altKey && keyCode == 83) {
		document.forms['biblioForm'].submit();
	}
	// 右
	else if (e.ctrlKey && keyCode == 39) {
		if (columNum == 1) {
			$(".marcContent").eq(indexNum).find("td").find(".sign").focus();
		} else if (columNum == 2) {
			$(".marcContent").eq(indexNum).find("td").find(".content_box")
					.focus();
		} else if (columNum == 3) {
			if (isLastLine()) {
				$(".marcContent").eq(0).find("td").find(".key").focus();
			} else {
				$(".marcContent").eq(indexNum + 1).find("td").find(".key")
						.focus();
			}
		}
	}
	// 左
	else if (e.ctrlKey && keyCode == 37) {
		if (columNum == 3) {
			$(".marcContent").eq(indexNum).find("td").find(".sign").focus();
		} else if (columNum == 2) {
			$(".marcContent").eq(indexNum).find("td").find(".key").focus();
		} else if (columNum == 1) {
			if (indexNum == 0) {
				$(".marcContent").eq($("#marcTable tbody tr").length - 1).find(
						"td").find(".content_box").focus();
			} else {
				$(".marcContent").eq(indexNum - 1).find("td").find(
						".content_box").focus();
			}
		}
	}
	// 下
	else if (e.ctrlKey && keyCode == 40) {
		if (columNum == 1) {
			disableLoadFieldName = true;

			var key = $(".marcContent").eq(indexNum).find("td").find(".key")
					.val();
			if ($.trim(key).length == 3) {
				var fieldName = getFieldNameByIdentify(key);
				if (fieldName != "") {
					$(".marcContent").eq(indexNum).find("td")
							.find(".fieldName").val(fieldName);
				}
			}
		}

		var nextLine = -1;
		if (isLastLine())
			nextLine = 0;
		else
			nextLine = indexNum + 1;
		if (columNum == 1) {
			$(".marcContent").eq(nextLine).find("td").find(".key").focus();
		} else if (columNum == 2) {
			$(".marcContent").eq(nextLine).find("td").find(".sign").focus();
		} else if (columNum == 3) {
			$(".marcContent").eq(nextLine).find("td").find(".content_box")
					.focus();
		}
	}
	// 上
	else if (e.ctrlKey && keyCode == 38) {
		if (columNum == 1) {
			disableLoadFieldName = true;

			var key = $(".marcContent").eq(indexNum).find("td").find(".key")
					.val();
			if ($.trim(key).length == 3) {
				var fieldName = getFieldNameByIdentify(key);
				if (fieldName != "") {
					$(".marcContent").eq(indexNum).find("td")
							.find(".fieldName").val(fieldName);
				}
			}
		}

		var nextLine = -1;
		if (indexNum == 0)
			nextLine = $("#marcTable tbody tr").length - 1;
		else
			nextLine = indexNum - 1;
		if (columNum == 1) {
			$(".marcContent").eq(nextLine).find("td").find(".key").focus();
		} else if (columNum == 2) {
			$(".marcContent").eq(nextLine).find("td").find(".sign").focus();
		} else if (columNum == 3) {
			$(".marcContent").eq(nextLine).find("td").find(".content_box")
					.focus();
		}
	}
};

function marc_keyEvent(event) {
	var e = event ? event : (window.event ? window.event : null);
	var keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;

	/*
	 * if (e.ctrlKey && (keyCode == 13 || keyCode == 10)) {
	 * AddText($(obj),GLOBAL_SUBFIELDSIGN); } else
	 */if (keyCode == 13) {
		var textStr = $(".marcContent").eq(indexNum).find("td").find(
				".content_box").text();
		$(".marcContent").eq(indexNum).find("td").find(".content_box").text(
				textStr);

		createOrUpdate005Field();
		isChanged = true;
		var key = $(".marcContent").eq(indexNum).find("td").find(".key").val();
		var marContent = $(".marcContent").eq(indexNum).find("td").find(
				".content_box").text();

		autoLoadPingyin(true);

		if (key == "010") {
			var subFieldVal = getSubFieldVal(marContent, GLOBAL_SUBFIELDSIGN
					+ "a");
			var pubStr = getPubStr(subFieldVal);
			$.ajax({
				type : "GET",
				dataType : "json",
				url : ctx + "/sys/sysPublisher/loadAjaxPublisher.htm?code="
						+ pubStr,
				success : function(msg) {
					if (msg != null) {
						var name = msg.name;
						var districtCode = msg.districtCode;
						var city = msg.city;
						if ($.trim(city) != "") {
							createOrUpdateSubField("210", city, "  ", "a");
						}
						if ($.trim(name) != "") {
							createOrUpdateSubField("210", name, "  ", "c");
						}
						if ($.trim(districtCode) != "") {
							createOrUpdateSubField("102", districtCode, "  ",
									"b");
						}
					}

					create810Field();
				}
			});

		} else if (key == "200") {
			var subFieldValD = getSubFieldVal(marContent, GLOBAL_SUBFIELDSIGN
					+ "d");

			if ($.trim(subFieldValD) != "") {
				createOrUpdateSubField("510", subFieldValD, "  ", "a");// 创建510a字段
			}
			var subFieldValE = getSubFieldVal(marContent, GLOBAL_SUBFIELDSIGN
					+ "e");
			if ($.trim(subFieldValE) != "") {
				autoCreate517AField(subFieldValE);
			}
			var subFieldValF = getSubFieldVal(marContent, GLOBAL_SUBFIELDSIGN
					+ "f");
			if ($.trim(subFieldValF) != "") {
				autoCreate701AField(subFieldValF);// 创建701a
			}
			var subFieldValG = getSubFieldVal(marContent, GLOBAL_SUBFIELDSIGN
					+ "g");
			if ($.trim(subFieldValG) != "") {
				autoCreate702AField(subFieldValG);// 创建702a
			}
			var subFieldValI = getSubFieldVal(marContent, GLOBAL_SUBFIELDSIGN
					+ "i");
			if ($.trim(subFieldValI) != "") {
				autoCreate517AField(subFieldValI);
			}

		} else if (key == "210") {
			var subFieldValD = getSubFieldVal(marContent, GLOBAL_SUBFIELDSIGN
					+ "d");

			if ($.trim(subFieldValD) != "") {
				autoCreateOrUpdate100AField(subFieldValD);
				// autoCreate100DField(subFieldValD);
			}

		}
	}

}

function isLastLine() {
	var lineCount = $("#marcTable tbody tr").length;
	if (indexNum + 1 == lineCount) {
		return true;
	} else {
		return false;
	}
}

function deleteOneRow() {
	if (indexNum != -1) {
		var key = $(".marcContent").eq(indexNum).children("td").children()
				.find("[name$='.key']").val();
		if (key == '010' || key=='092' || key == '100' || key == '101'
			|| key == '102' || key == '105' || key == '106' || key == '200'
				|| key == '210' || key == '215' || key=='326' || key == '690'){	
			alert("必备字段不能删除");
			return;
		}
		$(".marcContent").eq(indexNum).remove();

		indexNum = indexNum + 1;
		var totalTr = $(".marcContent").length;
		if (indexNum <= totalTr) {
			var key = $(".marcContent").eq(indexNum - 1).find("td")
					.find(".key");
			key.focus();

		} else {
			indexNum = -1;
		}
	}
	updateMarcIndex();
};
function createNewRow(fieldName, key, idx, cidx, marContent, pcp) {
	var content = "<tr class=\"marcContent\"><td class=\"ft\"><div class=\"inp_left\"><input type=\"hidden\" name=\"marcFields["+idx+"].marcMark\"/>"
			+ "<input name=\"fieldName\" class=\"fieldName\" size=\"40\" value=\""
			+ fieldName
			+ "\" style=\"width: 80px;\" disabled=\"disabled\"/> "
			+ "<input name=\"marcFields["
			+ idx
			+ "].key\" class=\"key\" onkeydown=\"macrShortCutKey(this,event)\" onfocus=\"doOnfocus(this,1)\" size=\"40\" onblur=\"productMarcStandard(this,'"+pcp+"')\" maxlength=\"3\" value=\""
			+ key
			+ "\" id=\"key"
			+ cidx
			+ ""
			+ "\" style=\"width: 40px;\"/> "
			+ "<input name=\"marcFields["
			+ idx
			+ "].sign\" class=\"sign\" onkeydown=\"macrShortCutKey(this,event)\" onfocus=\"doOnfocus(this,2)\" maxlength=\"2\" value=\"\" style=\"width: 40px; letter-spacing: 10px;\"/></div>"
			+ "<div id=\"content_box"
			+ cidx
			+ ""
			+ "\" class=\"content_box"
			+ cidx
			+ "\" contenteditable=\"true\" onkeyup=\"marcAutoProduct(this,event,'"+pcp+"','中文图书')\" onkeydown=\"pinYinAutoProduct(this,event,'"+pcp+"','中文图书')\"onfocus=\"doOnfocus2(this,3)\">"
			+ marContent
			+ "</div> "
			+ "<textarea style=\"display: none;\" id=\"content_ta"
			+ cidx
			+ ""
			+ "\" name=\"marcFields["
			+ idx
			+ "].content\" class=\"content\">"
			+ marContent
			+ "</textarea> "
			+ "<label class=\"field_notice\" id=\"field_notice"
			+ cidx
			+ ""
			+ "\" style=\"color: red\"></label></td></tr>";
	cidx++;
	return content;

};
function doOnfocus(obj, cn) {
	var tr = $(obj).parent().parent().parent();
	indexNum = tr.index();
	columNum = cn;
};
function doOnfocus2(obj, cn) {
	var tr = $(obj).parent().parent();
	indexNum = tr.index();
	columNum = cn;
};
function loadFieldName(obj) {
	if (!disableLoadFieldName) {
		var key = $(obj).val();
		if ($.trim(key).length == 3) {
			var fieldName = getFieldNameByIdentify(key);
			if (fieldName != "") {
				$(".marcContent").eq(indexNum).find("td").find(".fieldName")
						.val(fieldName);
			}
		}
	} else {
		disableLoadFieldName = false;
	}
};
function appendOneRow(pcp) {
	$(".marcContent").eq($(".marcContent").length - 1).after(
			createNewRow("undifined", "", "", "", "", pcp));
	updateMarcIndex();
};
function insertOneRow(pcp) {
	$(".marcContent").eq(indexNum).before(
			createNewRow("undifined", "", "", "", "", pcp));
	updateMarcIndex();
};

function createOrUpdate005Field() {
	var elements = getCertainElement("005");
	if (!elements[0]) {
		$(".marcContent").eq(elements[1]).before(
				createNewRow(getFieldNameByIdentify("005"), "005", "  ",
						getTime()));
		if (elements[1] <= indexNum) {
			indexNum++;
		}
	} else {
		var timeTmp = getTime();
		var content = $(".marcContent").eq(elements[1]).find("td").find(
				".content");
		content.val(timeTmp);
		$(".marcContent").eq(elements[1]).find("td").find(".content_box").text(
				timeTmp);
	}
};
function autoCreateOrUpdate100AField(subFieldValD) {// 100字段特殊处理
	if ($.trim(subFieldValD) != "") {
		if (subFieldValD.length < 4) {
			alert("对不起，输入的字段格式错误！");
		} else {
			subFieldValD = subFieldValD.substring(0, 4);
			if (isNaN(subFieldValD)) {
				alert("对不起，输入的字段格式错误！");
			} else {
				var elements = getCertainElement("100");
				var marcContent = GLOBAL_SUBFIELDSIGN + "a"
						+ getTime().substring(0, 8) + "d" + subFieldValD
						+ "    em y0chiy0120    ea";
				if (!elements[0]) {
					var totalElement = $(".marcContent").length;
					if (elements[1] == totalElement) {
						$(".marcContent").eq(elements[1] - 1).after(
								createNewRow(getFieldNameByIdentify("100"),
										"100", "  ", marcContent));
					} else {
						$(".marcContent").eq(elements[1]).before(
								createNewRow(getFieldNameByIdentify("100"),
										"100", "  ", marcContent));
					}

				} else {
					var content = $(".marcContent").eq(elements[1]).find("td")
							.find(".content_box");
					var contentValue = content.text();

					var certainSubFieldVal = getSubFieldVal(contentValue,
							GLOBAL_SUBFIELDSIGN + "a");

					certainSubFieldVal = $.trim(certainSubFieldVal);
					if (certainSubFieldVal == "") {
						contentValue = insertSubField(contentValue, "a",
								marcContent);
					} else {
						if (certainSubFieldVal.length != 36) {// 如果不是36位，更新a字段
							contentValue = updateSubField(contentValue, "a",
									getTime().substring(0, 8) + "d"
											+ subFieldValD
											+ "    em y0chiy0120    ea");
						} else {
							var dateContentValue = certainSubFieldVal
									.substring(0, 8);
							if (isNaN(dateContentValue)) {// 判断前8位是否为数字
								contentValue = updateSubField(contentValue,
										"a", getTime().substring(0, 8)
												+ "d"
												+ subFieldValD
												+ certainSubFieldVal
														.substring(13));
							} else {
								contentValue = updateSubField(contentValue,
										"a", dateContentValue
												+ "d"
												+ subFieldValD
												+ certainSubFieldVal
														.substring(13));
							}
						}
					}
					content.text(contentValue);
					$(".marcContent").eq(elements[1]).find("td").find(
							".content").val(contentValue);

				}
			}
		}

	}

};

function getMultiFieldParam(aimIdentify, comValue, subField) {
	var flag = false;
	var isExist = false;
	var hasEmptyRecord = false;
	var i = 0;
	var aimNum = parseInt(aimIdentify, 10);
	$(".marcContent").each(
			function(index) {
				i = index;

				var key = $(this).find("td").find(".key").val();
				var keyNum = parseInt(key, 10);
				if (keyNum == aimNum) {
					isExist = true;
					var contentValue = $(this).find("td").find(".content_box")
							.text();
					var aimSubValue = getSubFieldVal(contentValue,
							GLOBAL_SUBFIELDSIGN + subField);
					if ($.trim(aimSubValue) == "") {
						hasEmptyRecord = true;
						return false;
					}
					if (comValue == $.trim(aimSubValue)) {
						flag = true;
					}
				}
				if (keyNum > aimNum) {
					return false;
				}
			});

	var elements = [ flag, isExist, i, hasEmptyRecord ];
	return elements;

}
function getCertainElement(aimIdentify) {
	var flag = false;
	var i = 0;
	var aimNum = parseInt(aimIdentify, 10);

	$(".marcContent").each(function(index) {
		var key = $(this).find("td").find(".key").val();
		var keyNum = parseInt(key, 10);
		if (keyNum == aimNum) {
			flag = true;
			return false;
		}
		if (keyNum > aimNum) {
			return false;
		}
		i++;
	});
	var elements = [ flag, i ];
	return elements;
}

function autoCreate510AField(subFieldVal) {
	var elements = getCertainElement("510");
	if (!elements[0]) {
		$(".marcContent").eq(elements[1]).before(
				createNewRow(getFieldNameByIdentify("510"), "510", "  ",
						GLOBAL_SUBFIELDSIGN + "a" + subFieldVal));
	} else {
		var content = $(".marcContent").eq(elements[1]).find("td").find(
				".content");
		var contentValue = content.val();
		var A510 = getSubFieldVal(contentValue, GLOBAL_SUBFIELDSIGN + "a");
		if ($.trim(A510) == "") {
			contentValue = insertSubField(contentValue, "a", subFieldVal);
		} else {
			contentValue = updateSubField(contentValue, "a", subFieldVal);
		}
		content.val(contentValue);

	}

};
function autoCreate701AField(subFieldVal) {
	var elements_1 = getCertainElement("702");
	var elements_2 = getCertainElement("700");
	if (!elements_1[0] && !elements_2[0]) {
		createOrUpdateSubField("701", subFieldVal, "  ", "a");
	}
};
function autoCreate702AField(subFieldVal) {
	var elements_1 = getCertainElement("701");
	var elements_2 = getCertainElement("700");
	if (!elements_1[0] && !elements_2[0]) {
		createOrUpdateSubField("702", subFieldVal, "  ", "a");
	}
};
function createOrUpdateSubField(identify, subFieldVal, idx, subFieldSign) {
	var elements = getCertainElement(identify);
	if (!elements[0]) {
		var totalElement = $(".marcContent").length;

		if (elements[1] == totalElement) {
			$(".marcContent").eq(elements[1] - 1).after(
					createNewRow(getFieldNameByIdentify(identify), identify,
							idx, GLOBAL_SUBFIELDSIGN + subFieldSign
									+ subFieldVal));
		} else {
			$(".marcContent").eq(elements[1]).before(
					createNewRow(getFieldNameByIdentify(identify), identify,
							idx, GLOBAL_SUBFIELDSIGN + subFieldSign
									+ subFieldVal));
		}

	} else {
		var content = $(".marcContent").eq(elements[1]).find("td").find(
				".content_box");
		var contentValue = content.text();

		var certainSubFieldVal = getSubFieldVal(contentValue,
				GLOBAL_SUBFIELDSIGN + subFieldSign);
		if ($.trim(certainSubFieldVal) == "") {
			contentValue = insertSubField(contentValue, subFieldSign,
					subFieldVal);
		} else {
			contentValue = updateSubField(contentValue, subFieldSign,
					subFieldVal);
		}
		content.text(contentValue);
		$(".marcContent").eq(elements[1]).find("td").find(".content").val(
				contentValue);

	}

};
function autoCreate517AField(subFieldVal) {

	var elements = getMultiFieldParam("517", subFieldVal, "a");
	if (!elements[0] && !elements[1] && !elements[3]) {
		var marContent = GLOBAL_SUBFIELDSIGN + "a" + subFieldVal;
		$(".marcContent").eq(elements[2]).after(
				createNewRow(getFieldNameByIdentify("517"), "517", "1 ",
						marContent));
	} else if (!elements[0] && elements[1] && elements[3]) {
		var content = $(".marcContent").eq(elements[2] + 1).find("td").find(
				".content_box");
		var contentValue = content.text();
		contentValue = updateSubField(contentValue, "a", subFieldVal);
		content.text(contentValue);
		$(".marcContent").eq(elements[2] + 1).find("td").find(".content").val(
				contentValue);
	} else if (!elements[0] && elements[1] && !elements[3]) {
		var marContent = GLOBAL_SUBFIELDSIGN + "a" + subFieldVal;
		$(".marcContent").eq(elements[2]).after(
				createNewRow(getFieldNameByIdentify("517"), "517", "1 ",
						marContent));
	}
}
function create810Field() {
	var elements = getMultiFieldParam("801", $("#schoolCode").val(), "b");

	if (!elements[0] && !elements[1] && !elements[3]) {
		var marContent = GLOBAL_SUBFIELDSIGN + "aCN" + GLOBAL_SUBFIELDSIGN
				+ "b" + $("#schoolCode").val() + GLOBAL_SUBFIELDSIGN + "c"
				+ getTime().substring(0, 8);
		$(".marcContent").eq(elements[2]).after(
				createNewRow(getFieldNameByIdentify("801"), "801", " 0",
						marContent));
	} else if (!elements[0] && elements[1] && elements[3]) {

		var content = $(".marcContent").eq(elements[2]).find("td").find(
				".content_box");
		var contentValue = content.text();
		contentValue = updateSubField(contentValue, "b", $("#schoolCode").val());
		content.text(contentValue);
		$(".marcContent").eq(elements[2]).find("td").find(".content").val(
				contentValue);
	} else if (!elements[0] && elements[1] && !elements[3]) {
		var marContent = GLOBAL_SUBFIELDSIGN + "aCN" + GLOBAL_SUBFIELDSIGN
				+ "b" + $("#schoolCode").val() + GLOBAL_SUBFIELDSIGN + "c"
				+ getTime().substring(0, 8);
		$(".marcContent").eq(elements[2]).after(
				createNewRow(getFieldNameByIdentify("801"), "801", " 2",
						marContent));
	}
};
/**
 * var lengthOkConfigField;//定长字段配置信息。用来自动生成定长字段模版的XML document $(function(){
 * $.ajax({ type: "GET", dataType:"xml", url:
 * getRootPath()+"/sys/marcTemplate/loadFixLengConfigAjaxData.htm", error:
 * function(xml){
 * 
 * alert('Error loading XML document'+xml); }, success: function(data){
 * lengthOkConfigField=data; } });
 * 
 * });
 */
// 生成定长字段，在双击事件中触发
function marc_dblEvent(ev, obj) {
	// 加载模版自动生成的XMLDOM
	if (lengthOkConfigField == null) {
		return;
	}
	var rootEle = $(lengthOkConfigField).find("ROWSET");

	var nodeList = $(rootEle).find("ROW");

	if (nodeList.length < 1)
		return;
	var colName = $(obj).parent().find(".key").val();
	$(nodeList).each(
			function(i) {
				var tmp_colname = $(this).attr("key");
				if (tmp_colname.indexOf(colName) == 0) {
					if (tmp_colname.length == "3") {
						$(this).attr("oldvalue", $(obj).val());
						var ooWin = showModalDialog(ctx
								+ "/js/marc/MarcShortField.htm", $(this),
								"dialogWidth:550px;dialogHeight:500px");
						if (typeof (ooWin) == "string") {
							$(obj).val(ooWin);
						}
					} else if (tmp_colname.length > 3) {
						$(this).attr(
								"oldvalue",
								getSubFieldVal($(obj).val(), tmp_colname
										.substring(3)));
						var ooWin = showModalDialog(ctx
								+ "/js/marc/MarcShortField.htm", $(this),
								"dialogWidth:550px;dialogHeight:500px");
						if (typeof (ooWin) == "string") {
							$(obj).val(
									updateSubField($(obj).val(), tmp_colname
											.substring(3), ooWin));

						}
					} else {
						return true;
					}
				}

			});
};
function autoLoadPingyin(isLast) {
	var identify = $(".marcContent").eq(indexNum).find("td").find(".key").val();
	var contentValue = $(".marcContent").eq(indexNum).find("td").find(
			".content_box").text();
	var temField = getAutoPinyinField(autoPinyinField, identify);
	var pinYinSub = "a";
	if (temField == "") {
		return;
	} else if (temField.length == 3) {
		return;
	} else if (temField.length > 3) {
		pinYinSub = temField.substring(3);
	} else {
		return;
	}

	var subFieldVal = getSubFieldVal(contentValue, pinYinSub);
	if (($.trim(subFieldVal) == "" || contentValue.indexOf(GLOBAL_SUBFIELDSIGN
			+ "A") != -1)
			|| (contentValue.indexOf(GLOBAL_SUBFIELDSIGN + "9") != -1)) {
		return;
	} else {
		$.ajax({
			type : "post",
			contentType : "application/x-www-form-urlencoded; charset=utf-8",
			data : "content=" + subFieldVal,
			url : ctx + "/catalog/marc/loadAjaxPinyin.htm",
			success : function(data) {
				if ($.trim(data) != "") {
					if (isLast) {
						$(".marcContent").eq(indexNum).find("td").find(
								".content_box")
								.text(
										contentValue + GLOBAL_SUBFIELDSIGN
												+ "9" + data);
						$(".marcContent").eq(indexNum).find("td").find(
								".content")
								.val(
										contentValue + GLOBAL_SUBFIELDSIGN
												+ "9" + data);
					}
				}
			}
		});
	}

};
function closeWindows() {
	window.opener = null;
	if (isChanged) {
		if (confirm('您已经做了书目的修改，还没有保存，关闭本窗口后,您做的修改将会丢失,是否关闭本窗口?')) {
			window.close();
		}
	} else {
		window.close();
	}
}

/**
 * 详细编目快捷键
 * @param dom
 * @param e
 * @param nameValue
 */
function macrShortCutKey(dom,e){
	var classValue=$(dom).attr('name');
	var index=$(dom).parent().parent().parent().index();
	if(e.ctrlKey && e.keyCode==38){	//上
		if(index>0){
			if(classValue.indexOf('].key')>=0)
			$('#key'+(index-1)).focus();
			else
			$('.marcContent').eq(index-1).children().children().find(classValue).focus();
		}
		return;
	}
	else if(e.ctrlKey && e.keyCode==40){ //下
		if(index<$('.marcContent').length-1){
			if(classValue.indexOf('].key')>=0)
				$('#key'+(index+1)).focus();
			else
			$('.marcContent').eq(index+1).children().children().find(classValue).focus();
		}
		return;
	}
	else if(e.ctrlKey && e.keyCode==37){ //左
		if(classValue.indexOf('.sign')>=0){	
			$(dom).focus();
		}
		else if(classValue.indexOf('.content_box')>=0){	
			$(dom).prev().children().next().next().next().next().focus();
		}else{	
			if(index>0){
			$('.marcContent').eq(index-1).children('.content_box').focus();
			}
		}
		return;
	}
	else if(e.ctrlKey && e.keyCode==39){	//右
		if(classValue.indexOf('.key')>=0){
			$(dom).focus();
		}
		else if(classValue.indexOf('.sign')>=0){	
			$(dom).parent().focus();
		}else{	
			if(index<$('.marcContent').length-1){	
				$('.marcContent').eq(index+1).children('.key').focus();
			}
		}
		return;
	}
}