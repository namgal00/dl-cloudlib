$(function() {
	$(document).ready(function() {
		$('.list tr').addClass('odd');
		$('.list tr:even').addClass('even');
	});
	checkedTrCheckbox();
});

/**
 * 分页
 */
function goPage(pageNumber) {
	$("#pageNumber").val(pageNumber);
	var uri = $("#formId").attr("action");
	uri = uri.replace("/list", "/query");
	$("#formId").attr("action", uri);
	$("#formId").submit();
}

/**
 * 是否是整数
 * 
 * @param dom
 * @returns
 */
function checkNumber(dom) {
	var reg = /^\d*$/;
	return reg.test(dom);
}

/**
 * 是否是金额
 * 
 * @param dom
 * @returns
 */
function checkMoney(dom){	
	var reg =/^\d+\.?\d+$|^\d+$/;
	return reg.test(dom);
} 

/**
 * 分页跳转
 */
function forwardPage(totalPages) {
	var num = $("#forward").val();
	if (num == '') {
		alert("请输入页码");
		return;
	}
	var reg = /^[1-9]+[0-9]*$/;
	if (!reg.test(num)) {
		alert("页码必须为大于0的整数!");
		return;
	}
	if (parseInt(num) > totalPages) {
		alert("页码不能超出总页数!");
		return;
	}
	$("#pageNumber").val(num);
	var uri = $("#formId").attr("action");
	uri = uri.replace("/list", "/query");
	$("#formId").attr("action", uri);
	$("#formId").submit();
}

$(function() {
	$("#pageNum").keydown(function(event) {
		if (event.keyCode == 13)
			return false;
	});
});

/**
 * z3950下载分页
 * 
 * @param uri
 * @param offset
 */
function partPage(uri, number, urlMark) {
	uri = uri.replace("#number#", number);
	uri = uri.replace("#urlMark#", urlMark);
	window.location.href = uri;
}

/**
 * 带有iframe的局部分页
 * 
 * @param uri
 * @param number
 */
function framePage(uri, midUrl, pageNumber) {
	$('#pageNumber').val(pageNumber);
	uri = uri.replace("#midUrl#", midUrl);
	$('#formId').attr('action', uri);
	$('#formId').attr('target', 'biblioInfo');
	$('#formId').submit();
}

/**
 * z3950下载分页(跳转)
 * 
 * @param uri
 * @param number
 */
function partPageForward(uri, totalPages) {
	var num = $("#forward").val();
	if (num == '') {
		alert("请输入页码");
		return;
	}
	var reg = /^[1-9]+[0-9]*$/;
	if (!reg.test(num)) {
		alert("页码必须为大于0的整数!");
		return;
	}
	if (parseInt(num) > totalPages) {
		alert("页码不能超出总页数!");
		return;
	}
	partPage(uri, num);
}
function checkIds() {
	$("[name^='checks']").each(function() {
		if (!$(this).attr("checked")) {
			$(this).attr("checked", 'true');// 全选
		} else {
			$(this).removeAttr("checked");// 全不选
		}
	});
}

/**
 * 单选框修改
 * 
 * @param uri
 */
function modfiyRadio(uri) {
	var id = '';
	$("[name='radios']").each(function() {
		if ($(this).attr("checked")) {
			id = $(this).val();
		}
	});
	if (id == '') {
		alert("请选择一个记录！");
		return;
	}
	location.href = uri.replace(/#id#/, id);
}

/**
 * 单选框删除
 */
function removeRadio(uri) {
	var id = '';
	$("[name='radios']").each(function() {
		if ($(this).attr("checked")) {
			id = $(this).val();
		}
	});
	if (id == '') {
		alert("请选择一个记录！");
		return;
	}
	if (confirm('删除后将无法恢复，确认删除？')) {
		location.href = uri.replace(/#id#/, id);
	}

}
/**
 * 多选框修改
 * 
 * @param uri
 */
function modfiy(uri) {
	var flag = false;
	var id = '';
	var breakFuc = false;
	var ids = new Array();
	$("[name='ids']").each(function(i) {
		ids[i] = $(this).val();
	});
	$("[name='checks']").each(function(i) {
		if ($(this).attr("checked")) {
			if (!flag) {
				flag = true;
				id = ids[i];
			} else {
				alert('最多只能选择一条记录！');
				breakFuc = true;
				return false;
			}
		}
	});
	if (breakFuc) {
		return;
	}
	if (!flag) {
		alert('请选择一个记录！');
		return;
	}
	location.href = uri.replace(/#id#/, id);
}

/**
 * 多选框删除
 * 
 * @param uri
 */
function remove(uri) {
	var flag = false;
	var id = '';
	var breakFuc = false;
	var ids = new Array();
	$("[name='ids']").each(function(i) {
		ids[i] = $(this).val();
	});
	$("[name='checks']").each(function(i) {
		if ($(this).attr("checked")) {
			flag=true;
			/*
			if (!flag) {
				flag = true;
				id = ids[i];
			} else {
				alert('最多只能选择一条记录删除！');
				breakFuc = true;
				return false;
			}*/
		}
	});
	/*
	if (breakFuc) {
		return;
	}
	*/
	if (!flag) {
		alert('请选择一个记录！');
		return;
	}
	/*
	if (confirm('删除后将无法恢复，确认删除？')) {
		location.href = uri.replace(/#id#/, id);
	}*/
	prompt("请输入每本书要订购的数量：","1");
}

/**
 * 清空批次内容
 * 
 * @param uri
 */
function clearContent(uri, moreInfo, noInfo, confirmInfo) {
	var flag = false;
	var id = '';
	var breakFuc = false;
	var ids = new Array();
	$("[name='ids']").each(function(i) {
		ids[i] = $(this).val();
	});
	$("[name='checks']").each(function(i) {
		if ($(this).attr("checked")) {
			if (!flag) {
				flag = true;
				id = ids[i];
			} else {
				alert(moreInfo);
				breakFuc = true;
				return false;
			}
		}
	});
	if (breakFuc) {
		return;
	}
	if (!flag) {
		alert(noInfo);
		return;
	}

	if (confirm(confirmInfo)) {
		location.href = uri.replace(/#id#/, id);
	}
}

/**
 * 批次记录维护
 * 
 * @param uri
 * @param moreInfo
 * @param noInfo
 */
function managerContent(uri, moreInfo, noInfo) {
	var flag = false;
	var id = '';
	var breakFuc = false;
	var ids = new Array();
	$("[name='ids']").each(function(i) {
		ids[i] = $(this).val();
	});
	$("[name='checks']").each(function(i) {
		if ($(this).attr("checked")) {
			if (!flag) {
				flag = true;
				id = ids[i];
			} else {
				alert(moreInfo);
				breakFuc = true;
				return false;
			}
		}
	});
	if (breakFuc) {
		return;
	}
	if (!flag) {
		alert(noInfo);
		return;
	}
	location.href = uri.replace(/#id#/, id);
}

function doFormSubmit(formId, uri) {
	$("#pageNumber").val(1);
	$("#" + formId).attr("target", "_self");
	$("#" + formId).attr("action", uri);
	$("#" + formId).submit();
}

function doFormTargetSubmit(formId, uri, target) {
	$("#pageNumber").val(1);
	$("#" + formId).attr("target", target);
	$("#" + formId).attr("action", uri);
	$("#" + formId).submit();
}

/**
 * 批量导入数据
 * 
 * @param formId
 * @param uri
 * @param target
 * @returns
 */
function importData(formId, uri) {
	if (confirm('数据导入过程将持续一段时间，因文件大小而不同，确认导入？')) {
		ctDialog.show('reg', 'dom', 1);
		doFormSubmit(formId, uri);
	}
}

/**
 * 读取marc数据记录
 * 
 * @param uri
 * @param index
 */
function readRecord(uri, index) {

	/*
	 * $.ajax({ type : "post", url : uri, data:index, cache : false, async :
	 * false, dataType : "json", success : function(res) { var content = ''; for (
	 * var i = 0; i < res.length; i++) { content = content+"<tr><td>"+res[i].key+"</td><td>"+res[i].content+"</td></tr>"; }
	 * $("#marcRecord").html(content); }
	 * 
	 * });
	 */
	$.post(uri, {
		"index" : index
	}, function(data) {
		if (data == null || data == '') {
			alert("该文件不是Marc数据文件!");
			return;
		}
		var content = '';
		for ( var i = 0; i < data.length; i++) {
			content = content + "<tr><td>" + data[i].key + "</td><td>"
					+ data[i].content + "</td></tr>";
		}
		$("#marcRecord").html(content);

	}, "json");

}

/**
 * 馆藏处理公共方法
 * 
 * @param domInfo
 * @param formId
 * @param uri
 */
function editFormSubmit(domInfo, formId, uri) {
	if ($("#barcode").val() == '') {
		$("#" + domInfo).text("条形码不能为空!");
		return;
	}
	$("#pageNumber").val(1);
	$("#" + formId).attr("target", "_self");
	$("#" + formId).attr("action", uri);
	$("#" + formId).submit();
}

/**
 * 馆藏报表与统计公共方法
 * 
 * @param domInfo
 * @param formId
 * @param uri
 */
function billCountFormSubmit(domInfo, formId, uri) {
	if ($("#startDate").val() == '' || $("#endDate").val() == '') {
		$("#" + domInfo).text("起止日期不能为空!");
		return;
	}
	$("#pageNumber").val(1);
	$("#" + formId).attr("action", uri);
	$("#" + formId).submit();
}

/**
 * 馆藏清单公共方法
 * 
 * @param domInfo
 * @param formId
 * @param uri
 */
function collectionBillFormSubmit(domInfo, formId, uri) {
	if (($("#startDate").val() != '' && $("#endDate").val() != '')
			|| ($("#startDealDate").val() != '' && $("#endDealDate").val() != '')) {
		$("#pageNumber").val(1);
		$("#" + formId).attr("action", uri);
		$("#" + formId).submit();
		return;
	}
	$("#" + domInfo).text("请选择起止入馆日期或者起止处理日期!");
}

function doReturn(uri) {
	location.href = uri;
}

function loadingDiv() {
	$('#mainDiv').hide();
	$('#loading').show();
}

function getStatus(statusIndex) {
	var status = "";
	$("[name='checks']").each(function() {
		if ($(this).attr("checked")) {
			var tds = $(this).parent().parent().children();
			status = tds.eq(statusIndex).text();
			return;
		}
	});
	return status;
}

/**
 * 给选中的系统资源项赋值
 */
function formReset() {
	$("#formId").find(':input').not(':button, :submit, :reset').val('')
			.removeAttr('checked').removeAttr('selected');
}

function checkOne() {
	var flag = false;
	var idAndNum = new Array(2);
	var breakFuc = false;
	var ids = new Array();
	$("[name='ids']").each(function(i) {
		ids[i] = $(this).val();
	});
	$("[name='checks']").each(function(i) {
		if ($(this).attr("checked")) {
			if (!flag) {
				flag = true;
				idAndNum[0] = i;
				idAndNum[1] = ids[i];
			} else {
				alert('最多只能选择一条记录！');
				breakFuc = true;
				return false;
			}
		}
	});
	if (breakFuc) {
		return;
	}
	if (!flag) {
		alert('请选择一条记录！');
		return;
	}
	return idAndNum;
}

/**
 * 获取项目路径
 * 
 * @returns
 */
function getRootPath() {
	var curWwwPath = window.document.location.href;
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	var localhostPath = curWwwPath.substring(0, pos);
	// var projectName = pathName
	// .substring(0, pathName.substr(1).indexOf('/') + 1);
	// return (localhostPaht + projectName);
	return localhostPath;
}

/**
 * 失去焦点验证成功
 * 
 * @param domId
 */
function okOnBlur(domId) {
	$("#" + domId).html(
			"<img style='height:16px; width:20px' title=\"验证成功\"src=\""
					+ getRootPath() + "/images/icons/ok.gif\">");
}

/**
 * 判断单选框是否选中
 * 
 * @param radioName
 * @returns {Number}
 */
function judgeRadios(radioName) {
	var id = 0;
	$("[name=" + radioName + "]").each(function() {
		if ($(this).attr("checked")) {
			id = $(this).val();
			return id;
		}
	});
	return id;
}

/**
 * 选中单选框
 */
function checkRadios(dom) {
	var val = $(dom).children('td').find('#radios').val();
	$("[name='radios']").each(function(i) {
		if (val == $(this).val()) {
			$(this).attr("checked", true);
		} else {
			$(this).attr("checked", false);
		}
	});
}

/**
 * 统计单选款数量
 * 
 * @returns {Number}
 */
function countRadios() {
	var count = -1;
	$("[name='radios']").each(function() {
		count++;
	});
	return count;
}

/**
 * 打开窗口
 * 
 * @param openStr
 */
function windowOpen(openStr) {
	window.open(openStr);
}

/**
 * 关闭窗口
 */
function windowClose() {
	window.close();
}

function checkRadioShowIframe(dom, target, uri) {
	checkRadios(dom);
	$('#formId').attr('action', uri);
	$('#formId').attr('target', target);
	$('#formId').submit();
}

/**
 * 设置验收和馆藏信息显示的iframe
 * 
 * @param target
 * @param url
 */
function acquireInfo(target, uri) {
	$('#formId').attr('action', uri);
	$('#formId').attr('target', target);
	$('#formId').submit();
}

/**
 * 馆藏误删
 */
function listDeletedCollections(target, url) {
	var id = judgeRadios('aRadios');
	if (id == 0) {
		alert("请选择一个验收记录");
		return;
	}
	acquireInfo(target, url + id);
}

/**
 * 馆藏分配窗口
 * 
 * @param url
 */
function newAllot(url) {
	var copies = $("#copies").val();
	url = url.replace(/#copies#/, copies);
	window.open(url, '馆藏分配', 'height=200, width=760, top=200, left=200', false);
}

/**
 * 弹窗公共方法
 * 
 * @param url
 * @param title
 * @param width
 * @param height
 */
function openWindow(url, title, width, height) {
	window.open(url, title, 'width=' + width, 'height=' + height, false);
}

/**
 * 详细编目和简单编目切换
 * 
 * @param url
 */
function shiftBiblio(url) {
	$("#formId").attr("action", url);
	$("#formId").submit();
}

/**
 * 判断marc字段是否合法
 * 
 * @param domVal
 * @returns {Boolean}
 */
function marcIsLaw(dom, domVal) {
	var flag = true;
	var key = $(dom).val();
	if (key == '000' && domVal == '') {
		flag = false;
		return flag;
	}
	if (key == '001' && domVal == '') {
		flag = false;
		return flag;
	}
	if (key == '005' && domVal == '') {
		flag = false;
		return flag;
	}
	if (key == '010' || key == '092' || key == '100' || key == '101'
			|| key == '102' || key == '105' || key == '106' || key == '200'
			|| key == '210' || key == '215' || key == '326' || key == '690') {
		if (domVal.indexOf("▼") < 0) {
			flag = false;
			return flag;
		}
		var domArray = domVal.split("▼");
		for ( var i = 1; i < domArray.length; i++) {
			if (domArray[i].length < 2) {
				flag = false;
				break;
			}
		}
	}
	return flag;
}

/**
 * 不是必填marc字段是否合法
 * 
 * @param domVal
 * @returns {Boolean}
 */
function notMustIsLaw(dom, domVal) {
	var flag = true;
	var key = $(dom).val();
	if (key != '000' && key != '001' && key != '005') {
		if (domVal.indexOf("▼") < 0) {
			flag = false;
			return flag;
		}
		var domArray = domVal.split("▼");
		for ( var i = 1; i < domArray.length; i++) {
			if (domArray[i].length < 2) {
				flag = false;
				break;
			}
		}
	}
	return flag;
}

/**
 * 给marc字段赋值
 * 
 * @param from
 * @param to
 */
function setMarcFieldCValue(from, to) {
	$("#" + to).val($("#" + from).text());
}

/**
 * 条码只能是字母或数字
 * 
 * @param dom
 * @returns
 */
function checkCollectionBarcode(dom) {
	var reg = /^\w*\d+$/;
	return reg.test(dom);
}

/**
 * 打开弹出框公共方法
 * 
 * @param selector
 * @param options
 */
function openDialog(selector, options) {
	$(selector).dialog(options);
}
/**
 * 弹出窗口
 * 
 * @param uri
 * @param top
 * @param left
 * @param width
 * @param height
 */
function openDialogInformation(uri, top, left, width, height) {
	var info = "top="
			+ top
			+ ",left="
			+ left
			+ ",toolbar=yes, location=yes,directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no,copyhistory=yes, width="
			+ width + ", height=" + height;
	window.open(uri, "_blank", info, false);
}

/**
 * 关闭弹出框公共方法
 * 
 * @param selector
 */
function closeDialog(selector) {
	$(selector).dialog('close');
}

/**
 * 关闭嵌套iframe弹出框
 * 
 * @param selector
 */
function closeIframeDialog(selector) {
	$(selector).dialog('close');
}

function closeFrameDialog() {
	var parentWin = window.parent.document;
	$("#dialog", parentWin).hide();
}

/**
 * 设置纸张或书标宽度和高度
 * 
 * @param selector
 * @param height
 * @param width
 */
function setPageOrMark(selector, text, height, width, rightSize, bottomSize,
		align) {
	if (height != '')
		$(selector).css("height", height);
	if (width != '')
		$(selector).css("width", width);
	if (rightSize != '')
		$(text).css("margin-right", rightSize);
	if (bottomSize != '')
		$(text).css("margin-bottom", bottomSize);
	if (align != '')
		$(selector).css("text-align", align);
}

/**
 * 设置字体样式
 * 
 * @param selector
 * @param fontType
 * @param fontSize
 * @param fontBold
 */
function setFont(selector, fontType, fontSize, fontBold) {
	$(selector).css("font-family", fontType);
	$(selector).css("font-size", fontSize);
	$(selector).css("font-weight", fontBold);
}

function startAndEndFocus(dom, start, end, uri) {
	$("#" + dom).keydown(function(e) {
		if (e.keyCode == 13) {
			var sVal = $("#" + start).val();
			var eVal = $("#" + end).val();
			if (sVal == '') {
				alert('起始条码号不能为空');
				return;
			}
			if (eVal == '') {
				alert('终止条码号不能为空');
				return;
			}
			if (!checkNumber(sVal)) {
				alert('起始条码号必须是整数');
				return;
			}
			if (!checkNumber(eVal)) {
				alert('终止条码号必须是整数');
				return;
			}
			doFormSubmit("formId", uri);
		}
	});
}

/**
 * 聚焦提交表单
 * 
 * @param dom
 * @param uri
 */
function onFocusSubmit(dom, uri) {
	$("#" + dom).keydown(function(e) {
		if (e.keyCode == 13) {
			var val = $("#" + dom).val();
			if (val != '')
				doFormSubmit("formId", uri);
		}
	});
}

/**
 * radio
 * 
 * @param dom
 * @param uri
 */
function checkedTr(node) {
	var $input = $(node).children().first().next().children();
	$input.attr('checked', true);
	var inputClick = $input.attr("onclick");
	if (inputClick) {
		if (inputClick.search("this") > 0) {
			// 这边如果用this来传参数的话dom对象传过去报错
			var splits = inputClick.split("(");
			var method = splits[0];
			eval(method + "(" + input[0] + ")");
		} else {
			eval(inputClick);
		}
	} else {

	}
}
/**
 * checkbox
 * 
 * @param dom
 * @param uri
 */
function checkedTrCheckbox(node) {
	var $inputCheckBox = $("input[type='checkbox']");
	if ($inputCheckBox.attr("type")) {
		// 有checkbox
		$("tbody tr").each(function() {
			var $tds = $(this).children("td");// tds
			var $input = $(this).children("td").children("input");// input
			$tds.each(function() {// 循环td
				if ($(this).children("input").attr("type")) {
				} else {
					$(this).click(function() {// 没有input的时候点击操作,选中值
						var isChecked = $input.attr("checked");
						if (isChecked) {// 有的时候
							$input.attr("checked", false);
						} else {// 没有的时候
							$input.attr("checked", true);
						}
					});
				}
			});
		});
	}
}

/**
 * 价格打折
 * 
 * @param price
 * @param rate
 * @returns
 */
function discountRatePrice(price, rate) {
	var num = /^\d+\.?\d+$|^\d+$/;
	if (!num.test(price)) {
		return null;
	}
	var curPrice = price;
	if (num.test(rate)) {
		curPrice = curPrice * rate;
	}
	return curPrice;
}

/**
 * 数字四舍五入
 * 
 * @param number
 * @returns
 */
function rounding(number) {
	var whole = Math.floor(number);
	var pointIndex = number.toString().indexOf(".");
	var decStr = (number - whole).toString();
	if (pointIndex != -1 && decStr.length > 3) {
		var firstDec = parseFloat(decStr.substr(2, 1) / 10);
		var secondDec = parseFloat(decStr.substr(3, 1) / 100);
		if (secondDec >= 0.05) {
			firstDec = firstDec + 0.1;
		}
		return whole + firstDec;
	} else
		return number;
}

/**
 * 多选框选中提交
 * 
 * @param formId
 * @param uri
 */
function checkSubmit(formId, uri) {
	var flag = false;
	$("[name='checks']").each(function() {
		if ($(this).attr("checked"))
			flag = true;
	});
	if (!flag) {
		alert("请至少选中一项");
		return;
	}
	doFormSubmit(formId, uri);
}

function noCheckSubmit(formId, uri) {
	var isFind = false;
	$("[name='checks']").each(function() {
		isFind = true;
	});
	if (!isFind) {
		alert("没有记录被找到");
		return;
	}
	doFormSubmit(formId, uri);
}
/**
 * 完善信息
 * 
 * @param uri
 * @param isbn
 */
function fillInTheInformationByIsbn(uri, isbn) {
	$.ajax({
		url : uri,
		type : "POST",
		dataType : "json",
		data : {
			"isbn" : isbn
		},
		async : false,
		cache : false,
		success : function(data) {
			if (data != null) {
				// 这边传过来有2种格式：978-879-78和978-788-8787;出版社;
				$("#isbn").val(data.isbn);
				if (data.sysPublisher != null) {
					if (data.sysPublisher.name != null
							&& data.sysPublisher.name != '') {
						$("#publisher").val(data.sysPublisher.name);
					} else {
						$("#publisher").val('');
					}
					if (data.sysPublisher.cityName != null
							&& data.sysPublisher.cityName != '') {
						$("#address").val(data.sysPublisher.cityName);
					} else {
						$("#address").val('');
					}
				}
			}
		}
	});
}

function getAllSchools(url, name, conHtml) {
	$.post(url, {
		'name' : name
	}, function(data) {
		if (data != null && data != '') {
			var content = '';
			for ( var i = 0; i < data.length; i++) {
				content += data[i].schoolName + "          </br>";
			}
			$(conHtml).html(content);
		}
	}, 'json');
}
/**
 * 获取查询的学校
 * 
 * @param uri
 */
function getSchoolsByName(uri) {
	var $schoolNameSelect = $("input[name='schoolNameSelect']");
	var $schoolNameInput = $("input[name='schoolNameInput']");
	var $schoolNameSpan = $("#schoolNameSpan");
	$.ajax({
		url : uri,
		type : "POST",
		dataType : "json",
		data : {
			"name" : "%" + $schoolNameSelect.val() + "%"
		},
		async : false,
		cache : false,
		beforeSend : function() {
			$schoolNameInput.attr("disabled", true);
			$schoolNameSpan.html("数据加载中请稍候...");
			$schoolNameSpan.show();
		},
		success : function(data) {
			$schoolNameInput.attr("disabled", false);
			$("#schoolId").find("option").remove();
			for ( var i = 0; i < data.length; i++) {
				$("#schoolId").append(
						"<option value='" + data[i].id + "'>"
								+ data[i].schoolName + "</option>");

			}
			$schoolNameSpan.html("数据加载完毕");
			setInterval("hidenMessage();", 5000);
		}
	});
}
function hidenMessage() {
	var $schoolNameSpan = $("#schoolNameSpan");
	$schoolNameSpan.hide();
}

/**
 * 获取查询的一卡通版本号
 * 
 * @param uri
 */
function getVersionByName(uri) {
	var $oneCardName = $("#oneCardName");
	var $oneCardVersionInfo = $("#oneCardVersionInfo");
	$.ajax({
		url : uri,
		type : "POST",
		dataType : "json",
		data : {
			"oneCardName" : $oneCardName.val()
		},
		async : false,
		cache : false,
		beforeSend : function() {
			$oneCardVersionInfo.html("厂家版本号加载中请稍候...");
			$oneCardVersionInfo.show();
		},
		success : function(data) {
			$("#oneCardVersion").find("option").remove();
			for ( var i = 0; i < data.length; i++) {
				$("#oneCardVersion").append(
						"<option value='" + data[i] + "'>" + data[i]
								+ "</option>");
			}
			$oneCardVersionInfo.html("");
			setInterval("hidenMessage();", 5000);
		}

	});

}

/**
 * 上传html5中canvas画布到后台
 * 
 * @param uri
 */
function upLoadCanvas() {
	for ( var i = 0; i < 360; i++) {

		var data = canvas.toDataURL();
	}
}
/**
 * 检查邮箱
 * 
 * @param email
 */
function checkEmail(email) {
	var emailReg = /^[a-zA-Z0-9]([a-zA-Z0-9])+@([a-z0-9])+[\.][a-z]{2,3}$/;
	return emailReg.test(email);
}
/**
 * 判断是否为空
 * 
 * @param str
 * @returns {Boolean}
 */
function isBank(str) {
	if (str == undefined || str == null || $.trim(str) == '')
		return true;
	return false;
}

function copyMarcBiblio(url) {
	if (confirm('是否确定复制书目?')) {
		var marcCopy = '';
		$(".marcContent").each(
				function() {
					var key = $(this).children("td").children().find(
							"[name$='.key']").val();
					var sign = $(this).children("td").children().find(
							"[name$='.sign']").val();
					var value = $(this).children("td").find(".content_box")
							.text();
					marcCopy += key + "@" + sign + "@" + value + "#";
				});
		marcCopy = marcCopy.substring(0, marcCopy.length - 2);
		$.post(url, {
			"marcCopy" : marcCopy
		}, function(data) {
			if (data == 'success') {
				alert("书目数据复制成功");
				return;
			}
		}, "text");
	}
}

/**
 * 详细编目新增Marc字段后需要更新索引
 */
function updateMarcIndex() {
	$(".marcContent").each(
			function(i) {
				$(this).children("td").children().find("[name$='.marcMark']")
						.attr("name", "marcFields[" + i + "].marcMark");

				$(this).children("td").children().find("[name$='.key']").attr(
						"id", "key" + i);
				$(this).children("td").children().find("[name$='.key']").attr(
						"name", "marcFields[" + i + "].key");
				$(this).children("td").children().find("[name$='.sign']").attr(
						"name", "marcFields[" + i + "].sign");
				$(this).children("td").find(".content_box").attr("id",
						"content_box" + i);
				$(this).children("td").find(".content").attr("id",
						"content_ta" + i);
				$(this).children("td").find(".content").attr("name",
						"marcFields[" + i + "].content");
				$(this).children("td").find(".field_notice").attr("id",
						"field_notice" + i);
			});
}

/**
 * MARC拼音自动生成
 * 
 * @param dom
 * @param url
 * @param windowStr
 */

function pinYinAutoProduct(dom, e, pcp, marcType) {
	macrShortCutKey(dom, e, 'content_box');
	if (e.ctrlKey && e.altKey && e.keyCode == 13) {
		e.preventDefault();// 回车不换行
		return;
	}
	var key = $(dom).parent("td").find("[name$='.key']").val();
	var url = pcp + "/marcPinYin/autoProductPinYin";
	var txt = $(dom).text().trim();
	var content = txt;
	var index = txt.indexOf("▼a");
	if (e.keyCode == 13) {
		e.preventDefault();
		if (key != '200' && key != '210') {
			return;
		}
		if (index >= 0) {
			txt = txt.substr(2);
			if (txt != '') {
				var chinese = txt.substr(0, txt.indexOf("▼"));
				var author = txt.substr(txt.indexOf("▼f") + 2);
				$.post(url, {
					"chinese" : chinese,
					"marcType" : marcType,
					"key" : key,
					"content" : content,
					"author" : author
				}, function(data) {
					if (data != null && data != '') {
						if (data[2] > 0) {
							window.open('' + pcp
									+ '/marcPinYin/manyPinYinWindow/' + data[0]
									+ '/' + data[3] + '/' + data[4], '多音字',
									'width=760,height=350,top=500, left=400',
									false);
						} else {
							if ($(dom).text().indexOf("▼9") < 0
									&& data[5] == '200') {
								if (data[3] == 1) {
									$(dom).text(
											"▼a" + data[0] + "▼f" + data[4]
													+ "▼9 " + data[1]);
								} else {
									$(dom).text(
											"▼a" + data[0] + "▼9 " + data[1]
													+ "▼f" + data[4]);
								}
							} else if ($(dom).text().indexOf("▼9") < 0
									&& data[5] == '210') {
								var dTxt = $(dom).text();
								if (data[3] == 1) {
									$(dom).text(dTxt + "▼9 " + data[1]);
								} else {
									dTxt = dTxt.substr(0, dTxt.indexOf("▼c"))
											+ "▼9 " + data[1]
											+ dTxt.substr(dTxt.indexOf("▼c"));
								}
							}
						}
					}
					e.returnValue = false;
					return false;
				}, "json");
			}
		}
	}
}

function productMarcStandard(dom, pcp) {
	/*
	 * var value = $(dom).val(); $.ajax({ url:
	 * pcp+'/marcColumnAutoMatch/productMarcStandard', type: 'POST',
	 * data:{marcKey:value}, dataType: 'json', error:
	 * function(textStatus,errorThrown){ alert("==="+textStatus);
	 * alert("@@@"+errorThrown); }, success: function(result){alert(result);}
	 * });
	 */

	var url = pcp + "/marcColumnAutoMatch/productMarcStandard";
	var marcKey = $(dom).val();
	if (countMarcFieldNum(marcKey) > 1) {
		alert("该字段已经存在，不能重复添加");
		$(dom).val("");
		$(dom).focus();
		return;
	}
	$.post(url, {
		"marcKey" : marcKey
	}, function(data) {
		if (data != null) {
			$(dom).prev().val(data.codeDesc);
		}
	}, "json");
}

function iteratorGetIndex(targetKey) {
	$(".marcContent").each(function(index) {
		var key = $(this).children().children().find("[name$='.key']").val();
		if (key == targetKey) {
			return index;
		}
	});
}

Date.prototype.Format = function(fmt) { // author: meizz
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};

function create005Field(pcp, marcType) {
	var content = "<tr class=\"marcContent\"><td class=\"ft\"><div class=\"inp_left\"><input type=\"hidden\" name=\"marcFields[#index#].marcMark\"/>"
			+ "<input name=\"fieldName\" class=\"fieldName\" size=\"40\" value=\"#1\" style=\"width: 80px;\" disabled=\"disabled\" /> "
			+ "<input name=\"marcFields[#index#].key\" class=\"key\" onkeydown=\"macrShortCutKey(this,event)\" onfocus=\"doOnfocus(this,1)\" size=\"40\" maxlength=\"3\" value=\"#2\" id=\"key#index#"
			+ "\" style=\"width: 40px;\"/> "
			+ "<input name=\"marcFields[#index#].sign\" class=\"sign\" onkeydown=\"macrShortCutKey(this,event)\" onfocus=\"doOnfocus(this,2)\" maxlength=\"2\" value=\"\" style=\"width: 40px; letter-spacing: 10px;\"/></div>"
			+ "<div id=\"content_box#index#"
			+ "\" class=\"content_box\" contenteditable=\"true\" onkeyup=\"marcAutoProduct(this,event,'"
			+ pcp
			+ "','"
			+ marcType
			+ "')\" onkeydown=\"pinYinAutoProduct(this,event,'"
			+ pcp
			+ "','"
			+ marcType
			+ "')\"onfocus=\"doOnfocus2(this,3)\">#3</div> "
			+ "<textarea style=\"display: none;\" id=\"content_ta#index#"
			+ "\" name=\"marcFields[#index#].content\" class=\"content\">#3</textarea> "
			+ "<label class=\"field_notice\" id=\"field_notice#index#"
			+ "\" style=\"color: red\"></label></td></tr>";

	var index210 = -1;
	data = new Array();
	data[1] = "005";
	var date = new Date();
	var now = date.Format("yyyyMMddhhmmssS");
	data[3] = "100";
	data[2] = now;
	$(".marcContent").each(
			function(index) {
				var key = $(this).children().children().find("[name$='.key']")
						.val();
				if (!isExistMarcColumn('005')) {
					if (key == '000') {
						content = content.replace("#1", "处理时间标识");
						content = content.replace("#2", data[1]);
						content = content.replace(/#3/g, data[2]);
						content = content.replace(/#index#/g, index + 1);
						$(".marcContent").eq(0).after(content);
						updateMarcIndex();
					}
				}
				if (key == '100') {
					$(".marcContent").each(
							function(index) {
								var key = $(this).children().children().find(
										"[name$='.key']").val();
								if (key == '210') {
									index210 = index;
									return false;
								}
							});
					var value210 = $(".marcContent").eq(index210)
							.children("td").find(".content_box").text();
					var pubDate = '';
					if (value210.indexOf("▼9") < 0) {
						pubDate = value210.substr(value210.indexOf("▼d") + 2);
					} else {
						pubDate = value210.substring(
								value210.indexOf("▼d") + 2, value210
										.indexOf("▼9"));
					}
					data[4] = "▼ayyyymmddd" + pubDate + " em y0chiy0110 ea";
					data[4] = data[4].replace("yyyymmdd", data[2].substring(0,
							8));
					$(this).children("td").find(".content_box").text(data[4]);
					$(this).children("td").find(".content").text(data[4]);
				}
			});
}

function create702Filed(dom, marcValue, content, dataKey, data2, data3, index) {
	if (marcValue.indexOf("▼g") >= 0) {
		var content3 = content;
		var content4 = content;
		content3 = content3.replace("#1", "个人名称-次要责任者");
		content3 = content3.replace("#2", dataKey);
		content3 = content3.replace(/#3/g, data2);
		content3 = content3.replace(/#index#/g, index + 3);

		content4 = content4.replace("#1", "个人名称-次要责任者");
		content4 = content4.replace("#2", dataKey);
		content4 = content4.replace(/#3/g, data3);
		content4 = content4.replace(/#index#/g, index + 4);

		if (data3 != null) {
			if (countMarcFieldNum("701") == 1 && countMarcFieldNum("702") == 0) {
				$(".marcContent").eq(index + 1).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 2).after(content4);
				updateMarcIndex();
				$(".marcContent").eq(index + 2).children("td").children().find(
						"[name$='.sign']").val(0);
				$(".marcContent").eq(index + 3).children("td").children().find(
						"[name$='.sign']").val(0);
			} else if (countMarcFieldNum("701") == 2
					&& countMarcFieldNum("702") == 0) {
				$(".marcContent").eq(index + 2).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 3).after(content4);
				updateMarcIndex();
				$(".marcContent").eq(index + 3).children("td").children().find(
						"[name$='.sign']").val(0);
				$(".marcContent").eq(index + 4).children("td").children().find(
						"[name$='.sign']").val(0);
			} else if (countMarcFieldNum("701") == 1
					&& countMarcFieldNum("702") == 1) {
				$(".marcContent").eq(index + 2).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 1).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 2).after(content4);
				updateMarcIndex();
				$(".marcContent").eq(index + 2).children("td").children().find(
						"[name$='.sign']").val(0);
				$(".marcContent").eq(index + 3).children("td").children().find(
						"[name$='.sign']").val(0);
			} else if (countMarcFieldNum("701") == 2
					&& countMarcFieldNum("702") == 1) {
				$(".marcContent").eq(index + 3).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 2).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 3).after(content4);
				updateMarcIndex();
				$(".marcContent").eq(index + 3).children("td").children().find(
						"[name$='.sign']").val(0);
				$(".marcContent").eq(index + 4).children("td").children().find(
						"[name$='.sign']").val(0);
			} else if (countMarcFieldNum("701") == 1
					&& countMarcFieldNum("702") == 2) {
				$(".marcContent").eq(index + 2).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 2).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 1).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 2).after(content4);
				updateMarcIndex();
				$(".marcContent").eq(index + 2).children("td").children().find(
						"[name$='.sign']").val(0);
				$(".marcContent").eq(index + 3).children("td").children().find(
						"[name$='.sign']").val(0);
			} else if (countMarcFieldNum("701") == 2
					&& countMarcFieldNum("702") == 2) {
				$(".marcContent").eq(index + 3).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 3).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 2).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 3).after(content4);
				updateMarcIndex();
				$(".marcContent").eq(index + 3).children("td").children().find(
						"[name$='.sign']").val(0);
				$(".marcContent").eq(index + 4).children("td").children().find(
						"[name$='.sign']").val(0);
			}
		} else {
			if (countMarcFieldNum("701") == 1 && countMarcFieldNum("702") == 0) {
				$(".marcContent").eq(index + 1).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 2).children("td").children().find(
						"[name$='.sign']").val(0);
			} else if (countMarcFieldNum("701") == 2
					&& countMarcFieldNum("702") == 0) {
				$(".marcContent").eq(index + 2).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 3).children("td").children().find(
						"[name$='.sign']").val(0);
			} else if (countMarcFieldNum("701") == 1
					&& countMarcFieldNum("702") == 1) {
				$(".marcContent").eq(index + 2).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 1).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 2).children("td").children().find(
						"[name$='.sign']").val(0);
			} else if (countMarcFieldNum("701") == 2
					&& countMarcFieldNum("702") == 1) {
				$(".marcContent").eq(index + 3).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 2).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 3).children("td").children().find(
						"[name$='.sign']").val(0);
			} else if (countMarcFieldNum("701") == 1
					&& countMarcFieldNum("702") == 2) {
				$(".marcContent").eq(index + 2).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 2).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 1).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 2).children("td").children().find(
						"[name$='.sign']").val(0);
			} else if (countMarcFieldNum("701") == 2
					&& countMarcFieldNum("702") == 2) {
				$(".marcContent").eq(index + 3).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 3).remove();
				updateMarcIndex();
				$(".marcContent").eq(index + 2).after(content3);
				updateMarcIndex();
				$(".marcContent").eq(index + 3).children("td").children().find(
						"[name$='.sign']").val(0);
			}
		}
	}
}

function create801Field(pcp, marcType) {
	var content = "<tr class=\"marcContent\"><td class=\"ft\"><div class=\"inp_left\"><input type=\"hidden\" name=\"marcFields[#index#].marcMark\"/>"
			+ "<input name=\"fieldName\" class=\"fieldName\" size=\"40\" value=\"#1\" style=\"width: 80px;\" disabled=\"disabled\" /> "
			+ "<input name=\"marcFields[#index#].key\" class=\"key\" onkeydown=\"macrShortCutKey(this,event)\" onfocus=\"doOnfocus(this,1)\" size=\"40\" onblur=\"productMarcStandard(this,'"
			+ pcp
			+ "')\" maxlength=\"3\" value=\"#2\" id=\"key#index#"
			+ "\" style=\"width: 40px;\"/> "
			+ "<input name=\"marcFields[#index#].sign\" class=\"sign\" onkeydown=\"macrShortCutKey(this,event)\" onfocus=\"doOnfocus(this,2)\" maxlength=\"2\" value=\"\" style=\"width: 40px; letter-spacing: 10px;\"/></div>"
			+ "<div id=\"content_box#index#"
			+ "\" class=\"content_box\" contenteditable=\"true\" onkeyup=\"marcAutoProduct(this,event,'"
			+ pcp
			+ "','"
			+ marcType
			+ "')\" onkeydown=\"pinYinAutoProduct(this,event,'"
			+ pcp
			+ "','"
			+ marcType
			+ "')\"onfocus=\"doOnfocus2(this,3)\">#3</div> "
			+ "<textarea style=\"display: none;\" id=\"content_ta#index#"
			+ "\" name=\"marcFields[#index#].content\" class=\"content\">#3</textarea> "
			+ "<label class=\"field_notice\" id=\"field_notice#index#"
			+ "\" style=\"color: red\"></label></td></tr>";
	var date = new Date();
	var now = date.Format("yyyyMMdd");
	content = content.replace("#1", "记录来源");
	content = content.replace("#2", "801");
	content = content.replace(/#3/g, "▼aCN▼b#schoolCode#▼c" + now);
	content = content.replace(/#index#/g, $(".marcContent").length);
	var url = pcp + "/marcColumnAutoMatch/getSchoolCode";
	$.post(url, function(data) {
		content = content.replace("#schoolCode#", data);
		$(".marcContent").eq($(".marcContent").length - 1).after(content);
		updateMarcIndex();
	}, "json");
}

function getMarcKeyIndex(marcKey) {
	var index = -1;
	$("[name$='.key']").each(function(i) {
		if ($(this).val() == marcKey) {
			index = i;
			return index;
		}
	});
	return index;
}

function update801Field(pcp) {
	var date = new Date();
	var now = date.Format("yyyyMMdd");
	var content = "▼aCN▼b#schoolCode#▼c" + now;
	var url = pcp + "/marcColumnAutoMatch/getSchoolCode";
	$.post(url, function(data) {
		content = content.replace("#schoolCode#", data);
		var index = getMarcKeyIndex('801');
		$("#content_box" + index).text(content);
	}, "json");
}

function countMarcFieldNum(field) {
	var count = 0;
	$(".marcContent").each(function() {
		var key = $(this).children().children().find("[name$='.key']").val();
		if (key == field) {
			count += 1;
		}
	});
	return count;
}

/**
 * 按回车产生005字段
 * @param content
 */
function pressAuto005Field(content) {
	var date = new Date();
	var now = date.Format("yyyyMMddhhmmssS");
	var index001 = getMarcKeyIndex('001');
	var index = 0;
	if (index001 != -1) {
		index = index001;
	}
	if (!isExistMarcColumn('005')) {
		content = content.replace("#1", "处理时间标识");
		content = content.replace("#2", '005');
		content = content.replace(/#3/g,now);
		content = content.replace(/#index#/g, index + 1);
		$(".marcContent").eq(index).after(content);
		updateMarcIndex();
	} else {
		$("#content_box" + (index + 1)).text(now);
	}

}

/**
 * 对应Marc字段自动生成
 * 
 * @param dom
 * @param pcp
 * @param marcType
 */
function marcAutoProduct(dom, e, pcp, marcType) {
	if (e.ctrlKey && e.altKey && e.keyCode == 13) {
		e.preventDefault();// 回车不换行
		insertChar($(dom).attr("id"), "▼");
		return;
	}
	if (e.keyCode == 13) {
		e.preventDefault();// 回车不换行
		var marcKey = $(dom).prev().find("[name$='.key']").val();
		var marcValue = $(dom).text().trim();
		var pubDate = '';
		if (marcKey == '210' && marcValue.indexOf("▼d") >= 0) {
			if (marcValue.indexOf("▼9") < 0) {
				pubDate = marcValue.substr(marcValue.indexOf("▼d") + 2);
			} else {
				pubDate = marcValue.substring(marcValue.indexOf("▼d") + 2,
						marcValue.indexOf("▼9"));
			}
			if (pubDate.length < 4) {
				$(dom).next().next().text("出版时间位数必须大于等于4");
				return;
			}
			$(dom).next().next().text("");
		}
		var url = pcp + "/marcColumnAutoMatch/marcAutoProduct";
		var content = "<tr class=\"marcContent\"><td class=\"ft\"><div class=\"inp_left\"><input type=\"hidden\" name=\"marcFields[#index#].marcMark\"/>"
				+ "<input name=\"fieldName\" class=\"fieldName\" size=\"40\" value=\"#1\" style=\"width: 80px;\" disabled=\"disabled\" /> "
				+ "<input name=\"marcFields[#index#].key\" class=\"key\" onkeydown=\"macrShortCutKey(this,event)\" onfocus=\"doOnfocus(this,1)\" size=\"40\" onblur=\"productMarcStandard(this,'"
				+ pcp
				+ "')\" maxlength=\"3\" value=\"#2\" id=\"key#index#"
				+ "\" style=\"width: 40px;\"/> "
				+ "<input name=\"marcFields[#index#].sign\" class=\"sign\" onkeydown=\"macrShortCutKey(this,event)\" onfocus=\"doOnfocus(this,2)\" maxlength=\"2\" value=\"\" style=\"width: 40px; letter-spacing: 10px;\"/></div>"
				+ "<div id=\"content_box#index#"
				+ "\" class=\"content_box\" contenteditable=\"true\" onkeyup=\"marcAutoProduct(this,event,'"
				+ pcp
				+ "','"
				+ marcType
				+ "')\" onkeydown=\"pinYinAutoProduct(this,event,'"
				+ pcp
				+ "','"
				+ marcType
				+ "')\"onfocus=\"doOnfocus2(this,3)\">#3</div> "
				+ "<textarea style=\"display: none;\" id=\"content_ta#index#"
				+ "\" name=\"marcFields[#index#].content\" class=\"content\">#3</textarea> "
				+ "<label class=\"field_notice\" id=\"field_notice#index#"
				+ "\" style=\"color: red\"></label></td></tr>";

		var conTd = "<td class=\"ft\"><div class=\"inp_left\"><input type=\"hidden\" name=\"marcFields[#index#].marcMark\"/>"
				+ "<input name=\"fieldName\" class=\"fieldName\" size=\"40\" value=\"#1\" style=\"width: 80px;\" disabled=\"disabled\" /> "
				+ "<input name=\"marcFields[#index#].key\" class=\"key\" onkeydown=\"macrShortCutKey(this,event)\" onfocus=\"doOnfocus(this,1)\" size=\"40\" onblur=\"productMarcStandard(this,'"
				+ pcp
				+ "')\" maxlength=\"3\" value=\"#2\" id=\"key#index#"
				+ "\" style=\"width: 40px;\"/> "
				+ "<input name=\"marcFields[#index#].sign\" class=\"sign\" onkeydown=\"macrShortCutKey(this,event)\" onfocus=\"doOnfocus(this,2)\" maxlength=\"2\" value=\"\" style=\"width: 40px; letter-spacing: 10px;\"/></div>"
				+ "<div id=\"content_box#index#"
				+ "\" class=\"content_box\" contenteditable=\"true\" onkeyup=\"marcAutoProduct(this,event,'"
				+ pcp
				+ "','"
				+ marcType
				+ "')\" onkeydown=\"pinYinAutoProduct(this,event,'"
				+ pcp
				+ "','"
				+ marcType
				+ "')\"onfocus=\"doOnfocus2(this,3)\">#3</div> "
				+ "<textarea style=\"display: none;\" id=\"content_ta#index#"
				+ "\" name=\"marcFields[#index#].content\" class=\"content\">#3</textarea> "
				+ "<label class=\"field_notice\" id=\"field_notice#index#"
				+ "\" style=\"color: red\"></label></td>";
		$
				.post(
						url,
						{
							"marcKey" : marcKey,
							"marcValue" : marcValue,
							"marcType" : marcType
						},
						function(data) {
							if (data != null && data != '') {
								if (data[0] == '010') {
									$(".marcContent")
											.each(
													function(index) {
														var key = $(this)
																.children()
																.children()
																.find(
																		"[name$='.key']")
																.val();
														if (key == '010') {
															$(this)
																	.children(
																			"td")
																	.find(
																			".content_box")
																	.text(
																			data[2]);
															$(this)
																	.children(
																			"td")
																	.find(
																			".content")
																	.text(
																			data[2]);
														}
														
                                                      if(key=='102'){	
                                                      	$(this)
															.children(
																	"td")
															.find(
																	".content_box")
															.text(
																	data[3]);
													$(this)
															.children(
																	"td")
															.find(
																	".content")
															.text(
																	data[3]);
                                                      }
                                                      
														if (key == '210') {
															var marcTxt = $(
																	this)
																	.children(
																			"td")
																	.find(
																			".content_box")
																	.text();
															if (marcTxt
																	.indexOf("▼d") >= 0) {
																pubDate = marcTxt
																		.substr(marcTxt
																				.indexOf("▼d") + 2);
															}
															$(this)
																	.children(
																			"td")
																	.find(
																			".content_box")
																	.text(
																			data[1]
																					+ pubDate);
															$(this)
																	.children(
																			"td")
																	.find(
																			".content")
																	.text(
																			data[1]
																					+ pubDate);
														}
													});
								} else if (data[0] == '200') {
									$(".marcContent")
											.each(
													function(index) {
														var key = $(this)
																.children()
																.children()
																.find(
																		"[name$='.key']")
																.val();
														if (key == '690') {
															var content1 = content;
															var content2 = content;
															content1 = content1
																	.replace(
																			"#1",
																			"人名－等同责任者");
															content1 = content1
																	.replace(
																			"#2",
																			data[1]);
															content1 = content1
																	.replace(
																			/#3/g,
																			data[2]);
															content1 = content1
																	.replace(
																			/#index#/g,
																			index + 1);

															content2 = content2
																	.replace(
																			"#1",
																			"人名－等同责任者");
															content2 = content2
																	.replace(
																			"#2",
																			data[1]);
															content2 = content2
																	.replace(
																			/#3/g,
																			data[3]);
															content2 = content2
																	.replace(
																			/#index#/g,
																			index + 2);

															var conTd1 = conTd;
															var conTd2 = conTd;

															conTd1 = conTd1
																	.replace(
																			"#1",
																			"人名－等同责任者");
															conTd1 = conTd1
																	.replace(
																			"#2",
																			data[1]);
															conTd1 = conTd1
																	.replace(
																			/#3/g,
																			data[2]);
															conTd1 = conTd1
																	.replace(
																			/#index#/g,
																			index + 1);

															conTd2 = conTd2
																	.replace(
																			"#1",
																			"人名－等同责任者");
															conTd2 = conTd2
																	.replace(
																			"#2",
																			data[1]);
															conTd2 = conTd2
																	.replace(
																			/#3/g,
																			data[3]);
															conTd2 = conTd2
																	.replace(
																			/#index#/g,
																			index + 2);
															if (data[3] != null) {
																if (countMarcFieldNum('701') == 0) {
																	$(this)
																			.after(
																					content1);
																	updateMarcIndex();
																}
																if (countMarcFieldNum('701') == 1) {
																	$(
																			".marcContent")
																			.eq(
																					index + 1)
																			.after(
																					content2);
																	updateMarcIndex();
																} else {
																	$(
																			".marcContent")
																			.eq(
																					index + 1)
																			.html(
																					conTd1);
																	$(
																			".marcContent")
																			.eq(
																					index + 2)
																			.html(
																					conTd2);
																}
																$(
																		".marcContent")
																		.eq(
																				index + 1)
																		.children(
																				"td")
																		.children()
																		.find(
																				"[name$='.sign']")
																		.val(0);
																$(
																		".marcContent")
																		.eq(
																				index + 2)
																		.children(
																				"td")
																		.children()
																		.find(
																				"[name$='.sign']")
																		.val(0);
																create702Filed(
																		this,
																		marcValue,
																		content,
																		data[4],
																		data[5],
																		data[6],
																		index);
															} else {
																if (countMarcFieldNum("701") == 2) {
																	$(
																			".marcContent")
																			.eq(
																					index + 1)
																			.remove();
																	updateMarcIndex();
																	$(
																			".marcContent")
																			.eq(
																					index + 1)
																			.remove();
																	updateMarcIndex();
																} else if (countMarcFieldNum("701") == 1) {
																	$(
																			".marcContent")
																			.eq(
																					index + 1)
																			.remove();
																	updateMarcIndex();
																}
																$(this)
																		.after(
																				content1);
																updateMarcIndex();
																$(
																		".marcContent")
																		.eq(
																				index + 1)
																		.children(
																				"td")
																		.children()
																		.find(
																				"[name$='.sign']")
																		.val(0);
																create702Filed(
																		this,
																		marcValue,
																		content,
																		data[4],
																		data[5],
																		data[6],
																		index);
															}

														}
													});
								} else if (data[0] == '210') {
									$(".marcContent")
											.each(
													function(index) {
														var key = $(this)
																.children()
																.children()
																.find(
																		"[name$='.key']")
																.val();
														if (key == '100') {
															$(this)
																	.children(
																			"td")
																	.find(
																			".content_box")
																	.text(
																			data[4]);
															$(this)
																	.children(
																			"td")
																	.find(
																			".content")
																	.text(
																			data[4]);
														}
													});
								} else if (data[0] == '225') {
									$(".marcContent")
											.each(
													function(index) {
														var key = $(this)
																.children()
																.children()
																.find(
																		"[name$='.key']")
																.val();
														if (key == '225') {
															if (!isExistMarcColumn('461')) {
																var content1 = content;
																content1 = content1
																		.replace(
																				"#1",
																				"总集");
																content1 = content1
																		.replace(
																				"#2",
																				data[1]);
																content1 = content1
																		.replace(
																				/#3/g,
																				data[2]);
																content1 = content1
																		.replace(
																				/#index#/g,
																				index + 1);
																$(
																		".marcContent")
																		.eq(
																				index)
																		.after(
																				content1);
																updateMarcIndex();
																$(
																		".marcContent")
																		.eq(
																				index + 1)
																		.children(
																				"td")
																		.children()
																		.find(
																				"[name$='.sign']")
																		.val(0);
																if (marcValue
																		.indexOf("▼i") >= 0) {
																	if (!isExistMarcColumn('462')) {
																		var content2 = content;
																		content2 = content2
																				.replace(
																						"#1",
																						"分集");
																		content2 = content2
																				.replace(
																						"#2",
																						data[3]);
																		content2 = content2
																				.replace(
																						/#3/g,
																						data[4]);
																		content2 = content2
																				.replace(
																						/#index#/g,
																						index + 1);
																		$(
																				".marcContent")
																				.eq(
																						index + 1)
																				.after(
																						content2);
																		updateMarcIndex();
																		$(
																				".marcContent")
																				.eq(
																						index + 2)
																				.children(
																						"td")
																				.children()
																				.find(
																						"[name$='.sign']")
																				.val(
																						0);
																	} else {
																		$(
																				"#content_box"
																						+ (index + 2))
																				.text(
																						data[4]);
																	}
																}
															} else {
																$(
																		"#content_box"
																				+ (index + 1))
																		.text(
																				data[2]);
															}
														}

													});
								}
							}
							if (marcKey != '000') {
								pressAuto005Field(content);
								if (!isExistMarcColumn('801')) {
									create801Field(pcp, marcType);
								}else{	
									update801Field(pcp);
								}
							} 
						}, 'json');
	}
	e.returnValue = false;
	return false;
}

function isExistMarcColumn(code) {
	var flag = false;
	$("[name$='.key']").each(function() {
		if (code == $(this).val()) {
			flag = true;
		}
	});
	return flag;
}

function showMarcChildColumn(dom, pcp, marcType) {
	var url = pcp + "/marcModelColumnConfig/showMarcChildColumn";
	var code = $(dom).prev().find("[name$='.key']").val();
	window.open(url + '/' + marcType + '/' + code, 'MARC子字段',
			'width=760,height=350,top=500, left=400', false);
}
/**
 * 点击一级菜单的时候进行的动作
 * 
 * @param obj
 */
function click_f_menu(obj) {
	var $this = $(obj);
	var $s_input = $this.parent().children("ul").children("li").children(
			"input");
	var $t_input = $s_input.parent().children("ul").children("li").children(
			"input");
	if ($this.attr("checked")) {
		$s_input.attr("checked", "checked");
		$t_input.attr("checked", "checked");
	} else {
		$s_input.removeAttr("checked");
		$t_input.removeAttr("checked");
	}

}
/**
 * 点击二级菜单时候的动作
 * 
 * @param obj
 */
function click_s_menu(obj) {
	var $s_input = $(obj);
	var $t_input = $s_input.parent().children("ul").children("li").children(
			"input");
	var $f_input = $s_input.parent().parent().parent().children("input");
	if ($s_input.attr("checked")) {
		$t_input.attr("checked", "checked");
		$f_input.attr("checked", "checked");
	} else {
		$t_input.removeAttr("checked");
		var $s_input_all = $s_input.parent().prevAll().children("input");
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
}

function click_t_menu(obj) {
	var $t_input = $(obj);
	var $s_input = $t_input.parent().parent().parent().children("input");
	var $f_input = $s_input.parent().parent().parent().children("input");
	if ($t_input.attr("checked")) {
		$s_input.attr("checked", "checked");
		$f_input.attr("checked", "checked");
	}
}

function isHorse(fileName) {
	var count = 0;
	for ( var i = 0; i < fileName.length; i++) {
		var c = fileName.charAt(i);
		if (c == '.')
			count += 1;
		if (count > 1)
			return true;
	}
	return false;
}

/**
 * 记住账号和密码
 */
function rememberOrForget() {
	if ($("#remember").attr("checked")) {
		$("#remember").val(1);
	} else {
		$("#remember").val("");
	}
}

/**
 * 详细编目右键快捷菜单
 * 
 * @param dom
 * @param e
 * @param pcp
 */
function rightClickMenu(dom, e, pcp) {
	if (e.which == 3) {
		yjoption1 = {
			name : "操作1",
			offsetX : 2,
			offsetY : 2,
			textLimit : 10,
			beforeShow : $.noop,
			afterShow : $.smartMenu.remove()
		};
		yjdata1 = [ [
				{
					text : "字段帮助",
					func : function() {
						var code = $(dom).prev().children("[name$='.key']")
								.val();
						window.open(pcp + '/biblioTemp/columnHelp/' + code,
								'字段帮助', 'width=500, height=400', false);
					},
					readonly : true
				},
				{
					text : "使用指南",
					func : function() {
						window.open(pcp + '/biblioTemp/marcUseDirect', '使用指南',
								'width=500, height=500', false);
					},
					readonly : true

				} ] ];
	}
	$(dom).smartMenu(yjdata1, yjoption1);
}

