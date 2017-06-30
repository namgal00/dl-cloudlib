
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- saved from url=(0042)https://wz.cloudlib.cn/bookOrderBatch/list -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">






<!-- css -->
<link rel="shortcut icon" href="https://wz.cloudlib.cn/images/favicon.ico">

<link rel="icon" href="https://wz.cloudlib.cn/images/favicon.ico" type="image/x-icon">
<link href="${base }/teacher-new/css/css.css" rel="stylesheet" type="text/css">
<link href="${base }/teacher-new/css/frame.css" rel="stylesheet" type="text/css">
<link href="${base }/teacher-new/css/smartMenu.css" rel="stylesheet" type="text/css">
<!-- js -->
<script src="${base }/teacher-new/js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/teacher-new/js/jquery.textSearch-1.0.js">
        </script>
<script src="${base }/teacher-new/js/jquery-smartMenu.js" type="text/javascript"></script>
<script src="${base }/teacher-new/js/ZeroClipboard.js" type="text/javascript"></script>
<script src="${base }/teacher-new/js/common_list.js" type="text/javascript"></script>
<script src="${base }/teacher-new/js/WdatePicker.js" type="text/javascript"></script><link href="js/WdatePicker.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
	var base = "";
	function closeHelp() {
		$("#fullbg1,#dialog1").hide();
	}
</script>

<title>预订批次列表</title>

<script type="text/javascript">
	function setWorkSatus() {
		var idAndNum = checkOne();
		var id = idAndNum[1];
		var status = $("#status").val();
		var row = idAndNum[0];
		var txt = $("#status option:selected").text();
		$
				.post(
						"/bookOrderBatch/setWorkStatus",
						{
							"id" : id,
							"status" : status
						}, function(data) {
							if (data == 'success') {
								$("#myTable01 tbody tr:eq(" + row + ")")
										.children("td").eq(4).text(txt);
								showMsg("批次状态已经改变", "success");
							}
						}, "text");
	}
</script>
<style>
 body {
  
 border-left: 1px solid #E7EBEF;
}

.path_module{

color: #222;
}
.path_right a{
font-weight:600;
color: #222;
}
.main{

border:0px solid #F7F3F7;
 
}

.main input[type="text"]{

background: #FFFFFF;
}

.search .search_button .btn_orange{

width: 100px;
height: 24px;
color: #fff;
letter-spacing: 1px;
background: #00A2DE;
border:0px solid #F7F3F7;
}

.search .search_button .btn_orange:hover{

width: 100px;
height: 24px;
color: #fff;
letter-spacing: 1px;
background: #6AD0F6;
border:0px solid #F7F3F7;
}

</style>

</head>
<body>
	<form action="https://wz.cloudlib.cn/bookOrderBatch/list" method="post" id="formId">
		

<input type="hidden" id="pageNumber" name="pageNumber" value="1">

<input type="hidden" id="properties" name="properties" value="id">
<input type="hidden" id="direction" name="direction" value="DESC">

<input type="hidden" id="pageSize" name="pageSize" value="10">
		<div class="main">
			<div class="path">
				<div class="path_left"></div>
				<div class="path_module">当前位置：采编管理→ 采访管理→ 图书预订管理</div>
				<div class="path_right">
					<a href="javascript:history.go(1);" class="btn_next">向前</a> <a href="javascript:history.go(-1);" class="btn_back">返回</a>
				</div>
			</div>
			<div class="main_content">
				


<link rel="stylesheet" href="${base }/teacher-new/css/dialog.css" type="text/css">
<script type="text/javascript">
	$(function() {

		$("#fullbg1,#dialog1").hide();
		var isFree = "";
		var isManadate = "false";
		if (isFree != "true" && isManadate == "true") {
			//不是免费  而且超期
			/**学校激活码过期的弹出框**/
			openHelp();
		}

		$("#close").click(function() {
			hideMessage();
		});
		if ('' != "") {
			$("#divmsg").removeClass();
			$("#divmsg").addClass("tip tRight");
			$("#pMsg")
					.text(
							'1');
			setTimeout('hideMessage()', 5000);
		} else if ('' != "") {
			$("#divmsg").removeClass();
			$("#divmsg").addClass("tip");
			$("#pMsg")
					.text(
							'2');
		} else if ('' != "") {
			$("#divmsg").removeClass();
			$("#divmsg").addClass("tip tError");
			$("#pMsg")
					.text(
							'3');
		} else {
			$("#divmsg").hide();
		}
	});
	function openHelp() {
		var bh = $("html").height();
		var bw = $("html").width();
		$("#fullbg1").css({
			height : bh,
			width : bw,
			display : "block"
		});
		$("#dialog1").show();
	}

	function hideMessage() {
		$(".tip .close").parents(".tip").animate({
			opacity : 'hide'
		}, "slow");
	}

	function showMsg(msg, msgType) {
		if (msgType == "warn") {
			$("#divmsg").removeClass();
			$("#divmsg").addClass("tip");
		} else if (msgType == "success") {
			$("#divmsg").removeClass();
			$("#divmsg").addClass("tip tRight");
			setTimeout('hideMessage()', 5000);
		} else {
			$("#divmsg").removeClass();
			$("#divmsg").addClass("tip tError");
		}
		$("#pMsg").text(msg);
		$("#divmsg").show();
	}
</script>

<div id="divmsg" style="display: none;">
	<div class="tipBox">
		<div class="ico"></div>
		<p id="pMsg"></p>
		<div class="close" id="close"></div>
		<div class="clear"></div>
	</div>
</div>

<div id="fullbg1" style="display: none;"></div>
<div id="dialog1" style="display: none;">
	
	<p class="close1" onclick="closeHelp();" style="margin-top: 340px;">关闭</p>
</div>
				<div class="search">
					<div class="search_condition">
						<span><font>批次名称：</font> <input name="name" type="text" value=""> </span> <span class="search_button" onclick="doFormSubmit(&#39;formId&#39;,&#39;/bookOrderBatch/query&#39;)">
							<input name="" type="button" value="查询" class="btn_orange">
						</span>
					</div>
				</div>
				<div class="list_table_title">
					<h3>预订批次列表</h3>
					<ul>
						<li><span class="btn_left"></span><a href="javascript:managerContent(&#39;/bookOrderBatch/listContent/#id#&#39;,&#39;最多只能选择一条记录&#39;,&#39;请选择一条记录&#39;)" class="btn btn_confirm">订单维护</a><span class="btn_right"></span></li>
						<li><font></font></li>

						<li><span class="btn_left"></span><a href="javascript:clearContent(&#39;/bookOrderBatch/clear/#id#&#39;,&#39;最多只能选择一条记录做清除&#39;,&#39;请选择一条记录&#39;,&#39;是否清除该批次没有验收和没有馆藏的退订记录和书目?&#39;)" class="btn btn_clean">清除多余预订数据</a><span class="btn_right"></span></li>
						<li><font></font></li>

						<li><span class="btn_left"></span><a href="${base }/teachernew/batch/addBatch" class="btn btn_new">新增</a><span class="btn_right"></span></li>
						<li><font></font></li>
						<li><span class="btn_left"></span><a href="javascript:modfiy(&#39;/bookOrderBatch/findOne/#id#&#39;)" class="btn btn_edit">修改</a><span class="btn_right"></span></li>
						<li><font></font></li>
						<li><span class="btn_left"></span><a href="javascript:remove(&#39;/bookOrderBatch/delete/#id#&#39;)" class="btn btn_delete">删除</a><span class="btn_right"></span></li>
						<li><font></font></li>

						<li><span class="btn_left"></span><a href="javascript:modfiy(&#39;/bookOrderBatch/setWorkBatch/#id#&#39;)" class="btn btn_confirm">设为当前批次</a><span class="btn_right"></span></li>
						<li><span class="btn_left"></span><a href="javascript:modfiy(&#39;/bookOrderBatch/download/#id#&#39;)" class="btn btn_office">报表导出</a><span class="btn_right"></span></li>
						<li><font style="width: 50px"><select name="status" id="status">
									
										<option value="1">预订</option>
									
										<option value="2">审核</option>
									
										<option value="3">完成</option>
									
										
									
							</select></font></li>

						
					</ul>
				</div>
				<div class="list" id="list1">
					<table id="myTable01" class="list_table" width="100%" border="0" cellspacing="0" cellpadding="0">
						<thead>
							<tr class="odd even">
								<th width="3%">选择</th>
								<th>批次名称</th>
								<th>书商名称</th>
								<th>预算名称</th>
								<th width="10%">批次状态</th>
								<th width="16%">创建日期</th>
								<th width="8%">详情</th>
							</tr>
						</thead>
						<tbody>
							
								<input name="ids" type="hidden" value="325">
								<tr class="odd">
									<td><input name="checks" type="checkbox" class="input_none" id="checks"></td>
									<td>
											
											新建批次测试
										</td>
									<td>教育书店&nbsp;</td>
									<td>2015qk &nbsp;</td>
									<td>
											预订
										
											
										
											
										
											
										</td>
									<td>&nbsp;2017-06-29</td>
									<td><a href="${base }/teachernew/batch/orderBookList">查看</a></td>
								</tr>
							
								<input name="ids" type="hidden" value="302">
								<tr class="odd even">
									<td><input name="checks" type="checkbox" class="input_none" id="checks"></td>
									<td>
											
												<span style="color: red">20170407</span>
											
											
										</td>
									<td>清华大学出版社&nbsp;</td>
									<td>2016516&nbsp;</td>
									<td>
											预订
										
											
										
											
										
											
										</td>
									<td>&nbsp;2017-04-07</td>
									<td><a href="${base }/teachernew/batch/orderBookList">查看</a></td>
								</tr>
							
								<input name="ids" type="hidden" value="122">
								<tr class="odd">
									<td><input name="checks" type="checkbox" class="input_none" id="checks"></td>
									<td>
											
											20160309
										</td>
									<td>2015书香工程&nbsp;</td>
									<td>2015书香工程&nbsp;</td>
									<td>
											
										
											验收
										
											
										
											
										</td>
									<td>&nbsp;2016-03-09</td>
									<td><a href="${base }/teachernew/batch/orderBookList">查看</a></td>
								</tr>
							
								<input name="ids" type="hidden" value="63">
								<tr class="odd even">
									<td><input name="checks" type="checkbox" class="input_none" id="checks"></td>
									<td>
											
											2015书香工程
										</td>
									<td>2015书香工程&nbsp;</td>
									<td>2015书香工程&nbsp;</td>
									<td>
											预订
										
											
										
											
										
											
										</td>
									<td>&nbsp;2015-11-16</td>
									<td><a href="${base }/teachernew/batch/orderBookList">查看</a></td>
								</tr>
							
						</tbody>
					</table>
				</div>
				

<!-- javascript:checkIds() -->
<div class="pager">
	<span style="margin-left: 10px; float: left;margin-top: 5px; "><input class="input_none" type="checkbox" onclick="javascript:checkIds();"> </span><span style="float: left;">全选/反选</span> <span>第1/1页
		共4条</span>

	
		<span class="page_gray">首页</span>
	

	

	
		<span class="page_gray">上一页</span>
	

	

	
		<span class="page_gray">下一页</span>
	

	

	
		<span class="page_gray">未页</span>
	

	
	<span>转至 <input id="forward" class="input_in" type="text"> <input type="button" class="input_btn" value="GO" id="pageNum" onclick="forwardPage(&#39;1&#39;)">
	</span>
</div>
			</div>
		</div>
	</form>

<div id="_my97DP" style="position: absolute; top: -1970px; left: -1970px;"><iframe style="width: 186px; height: 198px;" src="./预订批次列表_files/My97DatePicker.html" frameborder="0" border="0" scrolling="no"></iframe></div></body></html>