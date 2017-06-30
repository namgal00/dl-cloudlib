function onClick_btn_ok(url1, url2) {
	if ($("input[name='copies']").val() == '') {
		$("#copiesInfo").html("记到册数不能为空");
		return;
	}
	okOnBlur('copiesInfo');

	if ($("input[name='singlePrice']").val() == '') {
		$("#singlePriceInfo").html("记到册数不能为空");
		return;
	}

	if (isNaN($("input[name='singlePrice']").val())) {
		$("#singlePriceInfo").html("请输入正确的价格");
		return;
	}
	okOnBlur('singlePriceInfo');

	if ($("input[name='bookingYear']").val() == '') {
		$("#bookingYearInfo").html("记到年不能为空 ");
		return;
	}
	if (isNaN($("input[name='bookingYear']").val())) {
		$("#bookingYearInfo").html("请输入正确的记到年 ");
		return;
	}
	okOnBlur('bookingYearInfo');

	if ($("input[name='libLocal']").val() == '') {
		$("#libLocalInfo").html("馆藏分配不能为空");
		return;
	}
	okOnBlur('libLocalInfo');

	if ($("input[name='acceptDate']").val() == '') {
		$("#acceptDateInfo").html("日期不能为空");
		return;
	}
	okOnBlur('acceptDateInfo');

	if ($("input[name='intendDate']").val() == '') {
		$("#intendDateInfo").html("日期不能为空");
		return;
	}
	okOnBlur('intendDateInfo');
	doSubmit(url1, url2);
}

function doSubmit(url1, url2) {
	var id = $("#id").val();
	var copies = $("input[name='copies']").val();
	var noSum = $("input[name = 'noSum']").val();
	var vol = $("input[name='vol']").val();
	var libLocal = $("input[name='libLocal']").val();
	var remark = $("input[name='remark']").val();
	var acceptDate = $("#acceptDate").val();
	var intendDate = $("#intendDate").val();
	var status = $("#status").val();
	var serNo = $("input[name='serNo']").val();
	var bookingYear = $("input[name='bookingYear']").val();
	var singlePrice = $("input[name='singlePrice']").val();

	var data = {
		"bookingYear" : bookingYear,
		"singlePrice" : singlePrice,
		"status" : status,
		"id" : id,
		"copies" : copies,
		"noSum" : noSum,
		"vol" : vol,
		"libLocal" : libLocal,
		"remark" : remark,
		"acceptDate" : acceptDate,
		"intendDate" : intendDate,
		"serNo":serNo
	};
	$.ajax({
		url : url1,
		type : "POST",
		dataType : "text",
		data : data,
		async : false,
		cache : false,
		success : function(data) {
			if (data == "ok") {
				alert("操作成功");
				window.opener.parent.frames["seriesDeal"].location.href = url2;
				window.close();
			}
		}
	});
}

function updateLibLocalAndCopies() {
	var copies = new Number(0);
	var libLocal = "";
	$("input[name='actual']").each(
			function() {
				// if(new
				// Number($(this).parent().parent().childen().first().html) <
				// new Number($(this).val())){
				// }
				copies = copies + new Number($(this).val());
				var c = $("#copies").html();
				var actual = $(this).val();
				// 这里可以不用first 不过写这里为了保险旗舰
				var collectionPlace = $(this).parent().next().first().find(
						"select").find("option:selected").val();
				var bookCirculateType = $(this).parent().next().first().next()
						.first().find("select").find("option:selected").val();
				libLocal = libLocal + c + ":" + actual + ":" + collectionPlace
						+ ":" + bookCirculateType + ";";
			});
	$("input[name='libLocal']").val(libLocal);
	$("input[name='copies']").val(copies);

}