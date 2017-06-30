/**
 * 获取2位有效数字
 * 
 * @param x
 * @returns
 */
function changeTwoDecimal(x) {
	var f_x = parseFloat(x);
	if (isNaN(f_x)) {
		return false;
	}
	var f_x = Math.round(x * 100) / 100;
	return f_x;
}
/**
 * 初始化订购期数，
 */
function initSeriesNumTemplate(url1,url2) {
	var rate = 1;
	var $cycle = $("#cycleId option:selected");
	var $curprice = $("#curprice");

	var id = $cycle.val();
	if (id == '') {
		id = $("#cycleId option:first").val();
	}
	$
			.ajax({
				url : url1,
				type : "POST",
				dataType : "text",
				data : {
					"id" : id
				},
				async : false,
				cache : false,
				success : function(data) {
					$("#seriesNum").val(data);
				}
			});
	$.ajax({
		url : url2,
		type : "POST",
		dataType : "text",
		data : {
			"id" : $("#currencyId option:selected").val()
		},
		async : false,
		cache : false,
		success : function(data) {
			rate = parseFloat(data);
		}
	});
	$("#singlePrice").val(changeTwoDecimal($curprice.val() * rate));
	var wholePrice = $curprice.val() * rate * $("#seriesNum").val();
	$("#wholePrice").val(changeTwoDecimal(wholePrice));
}
/**
 * 价格变动
 */
function setPriceTempLate(url) {
	var rate = 1;
	var $curprice = $("#curprice");
	var $seriesNum = $("#seriesNum");
	if (!isNaN($curprice.val()) && $curprice.val() > 0) {
		okOnBlur("curpriceInfo");
	} else {
		$("#curpriceInfo").text("请输入正确的原价*");
		return;
	}
	if (!isNaN($seriesNum.val()) && $seriesNum.val() > 0) {
		okOnBlur("seriesNumInfo");
	} else {
		$("#seriesNumInfo").text("请输入正确期数*");
		return;
	}
	$.ajax({
		url : url,
		type : "POST",
		dataType : "text",
		data : {
			"id" : $("#currencyId option:selected").val()
		},
		async : false,
		cache : false,
		success : function(data) {
			rate = parseFloat(data);
		}
	});
	$("#singlePrice").val(changeTwoDecimal($curprice.val() * rate));
	$("#wholePrice").val(
			changeTwoDecimal($curprice.val() * rate * $("#seriesNum").val()));

}
/**
 * 打开馆藏分配信息窗口
 */
function doDistHoldingTemplate(url) {
	var $copies = $("#copies");
	if (!isNaN($copies.val()) && $copies.val() > 0) {

	} else {
		$("#copiesInfo").text("请输入正确的复本数*");
		return;
	}
	okOnBlur("copiesInfo");
	var copies = $copies.val();
	window.open(url+copies,"_blank","top=150,left=320,toolbar=yes, location=yes,directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no,copyhistory=yes, width=880, height=270");
	//myWindow = window.open(url + copies, "_blank", 150, 320, 1024, 400);
}

function opeanWindow(url, top, left, width, height) {
	window
			.open(
					url,
					"_blank",
					"top="
							+ top
							+ ",left="
							+ left
							+ ",toolbar=yes, location=yes,directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no,copyhistory=yes, width="
							+ width + ", height=" + height);
	// window.open(url,"_blank","top=150,left=320,toolbar=yes, location=yes,
	// directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no,
	// copyhistory=yes, width=1024, height=400");

}