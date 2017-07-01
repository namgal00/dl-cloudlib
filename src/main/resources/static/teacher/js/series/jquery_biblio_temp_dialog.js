$(function() {

});

function opeanDialogSeries(uri, top, left, width, height) {
	var info = "top="
			+ top
			+ ",left="
			+ left
			+ ",toolbar=yes, location=no,directories=no, status=no, menubar=yes, scrollbars=yes, resizable=yes,copyhistory=yes, width="
			+ width + ", height=" + height;
	window.open(uri, "_blank", info,false);
}

function ajaxAddBiblioTemp(uri) {
	var id = $("#id").val();
	var isbn = $("#isbn").val();
	var classNo = $("#classNo").val();
	var orderNo = $("#orderNo").val();
	var price = $("#price").val();
	var totalPrice = $("#totalPrice").val();
	var title = $("#title").val();
	var author = $("#author").val();
	var address = $("#address").val();
	var publisher = $("#publisher").val();
	var publishDate = $("#publishDate").val();
	var frequency = $("#frequency").val();
	var unionNo = $("#unionNo").val();
	var isShare = $("#isShare").val();
	var data = {
		"id" : id,
		"isbn" : isbn,
		"classNo" : classNo,
		"orderNo" : orderNo,
		"price" : price,
		"totalPrice" : totalPrice,
		"title" : title,
		"author" : author,
		"address" : address,
		"publisher" : publisher,
		"publishDate" : publishDate,
		"frequency" : frequency,
		"unionNo" : unionNo,
		"isShare" : isShare
	};
	$.ajax({
		url : uri,
		type : "POST",
		dataType : "text",
		data : data,
		async : false,
		cache : false,
		success : function(data) {
			if (data == "ok") {
				alert("操作成功");
				self.opener.location.reload();
				window.close();
			}
		}
	});

}

function addMarcDialog(uri){
	var x = $("#formId").serializeArray();
	var str = "";
	$.each(x, function(i, field) {
		str = str + '"' + field.name + '"' + ':' +'"' +  field.value + '"'  + ',';
	});
	data = $.parseJSON('{'+str.substr(0,str.length -1)+'}');
	$.ajax({
		url : uri,
		type : "POST",
		dataType : "text",
		data : data,
		async : false,
		cache : false,
		success : function(data) {
			if (data == "ok") {
				alert("操作成功");
				self.opener.location.reload();
				window.close();
			}
		}
	});
	
	
}

function editDialog(uri){
	var id = '';
	$("[name='checks']").each(function() {
		if ($(this).attr("checked")) {
			id = $(this).val();
		}
	});
	if (id == '') {
		alert("请选择一个记录！");
		return;
	}
	opeanDialogSeries(uri.replace(/#id#/, id),50,200,1200,600);
	
}











