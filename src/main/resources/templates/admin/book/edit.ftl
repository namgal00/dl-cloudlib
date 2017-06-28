<!DOCTYPE>
<html>

	<head>
		[#include "/admin/include/head.htm"]
		<script type="text/javascript">
			function submitForm(obj) {
				$obj = $(obj);
				WD.disabledBtn($obj); // 禁用按钮
				if(!WD.check_null_add_notice($("#path"))) {
					WD.rmDisabledBtn($obj);
					return false;
				}
				if(!WD.check_null_add_notice($("#isbn"))) {
					WD.rmDisabledBtn($obj);
					return false;
				}
				
				if($("#batchId").val() == 0){
					$("#batchId_notice").html("请选择批次*");
					return false;
				}
				if(!WD.check_null_add_notice($("#title"))) {
					WD.rmDisabledBtn($obj);
					return false;
				}
				if(!WD.check_null_add_notice($("#author"))) {
					WD.rmDisabledBtn($obj);
					return false;
				}
				if(!WD.check_null_add_notice($("#press"))) {
					WD.rmDisabledBtn($obj);
					return false;
				}
				if(!WD.check_null_add_notice($("#publicationDate"))) {
					WD.rmDisabledBtn($obj);
					return false;
				}
				if(!WD.check_null_add_notice($("#classification"))) {
					WD.rmDisabledBtn($obj);
					return false;
				}
				$("#formId").submit();
				
			}
			
		</script>
	</head>

	<body>
		<article class="main">
			<div class="title">
				<section>
					<a href="javascript:history.go(-1);"><b class=icon-arrow-left-thick></b>返回</a>
					<a href="javascript:history.go(1);">向前<b class=icon-arrow-right-thick></b></a>
				</section>
				<span>当前位置：</span>
				<a href="#">电子书管理</a>
				<a href="#" class="on">电子书管理</a>
			</div>
			<div class="nav">修改电子书</div>
			<div class="pubFormTable">
				<form action="${base}/admin/book/edit" method="post" id="formId">
					<input type="hidden" name="id" value="${book.id}" />
					
					<table cellpadding="0" cellspacing="0" border="0">
						<tr>
							<td>文件路径</td>
							<td><input name="path" value="${book.path}" id="path" onfocus="cleanNotice(this)" placeholder="请输入文件路径" /><span id="path_notice" class="field_notice">*</span></td>
						</tr>
						<tr>
							<td>ISBN:</td>
							<td><input name="isbn" value="${book.isbn}" id="isbn" onfocus="cleanNotice(this)" placeholder="请输入ISBN" /><span id="isbn_notice" class="field_notice">*</span></td>
						</tr>
						<tr>
							<td>批次名:</td>
							<td>
								<select name="batchId" id="batchId" onfocus="cleanNotice(this)">
									<option value="0" >请选择批次</option>
									[#list batchs as b]
									<option [#if book.batchId == b.id ] selected="selected" [/#if] value="${b.id }">${b.name }</option>
									[/#list]
								</select>
								<span id="batchId_notice" class="field_notice">*</span>
							</td>
						</tr>
						<tr>
							<td>题名:</td>
							<td><input name="title" value="${book.title}" id="title" placeholder="请填写题名" /><span id="title_notice" class="field_notice">*</span>
							</td>
						</tr>

						<tr>
							<td>作者:</td>
							<td><input name="author" id="author" value="${book.author}" placeholder="请填写作者" /><span id="author_notice" class="field_notice">*</span>
							</td>
						</tr>

						<tr>
							<td>出版社:</td>
							<td><input name="press" id="press" value="${book.press}" placeholder="请填写出版社" /><span id="press_notice" class="field_notice">*</span>
							</td>
						</tr>

						<tr>
							<td>出版时间:</td>
							<td><input name="publicationDate" value="${book.publicationDate}" id="publicationDate" placeholder="请填写出版时间" /><span id="publicationDate_notice" class="field_notice">*</span>
							</td>
						</tr>

						<tr>
							<td>分类号:</td>
							<td><input name="classification" value="${book.classification}" id="classification" placeholder="请填写分类号" /><span id="classification_notice" class="field_notice">*</span>
							</td>
						</tr>

						<tr>
							<td>启用:</td>
							<td>
								<input type="radio" class="radioClass" name="enable" value="true" [#if (book.enable)] checked="checked" [/#if]  /> 是<br />
								<input type="radio" class="radioClass" name="enable" value="false"  [#if !(book.enable)] checked="checked" [/#if]  /> 否<br />
							</td>
						</tr>

						<tr>
							<td>上架:</td>
							<td>
								<input type="radio" class="radioClass" name="shelves" value="true" [#if (book.shelves)] checked="checked" [/#if]  /> 是<br />
								<input type="radio" class="radioClass" name="shelves" value="false" [#if !(book.shelves)] checked="checked" [/#if] /> 否<br />
							</td>
						</tr>
						<tr>
							<td>免费:</td>
							<td>
								<input type="radio" class="radioClass" name="free" value="true" [#if (book.free)] checked="checked" [/#if]  /> 是<br />
								<input type="radio" class="radioClass" name="free" value="false" [#if !(book.free)] checked="checked" [/#if]  /> 否<br />
							</td>
						</tr>

						<tr>
							<td></td>
							<td>
								<button type="button" onclick="submitForm(this);">确 认</button>
								<button type="reset">重 置</button>
								<button type="button">返 回</button>
							</td>
						</tr>
					</table>
				</form>
			</div>
		</article>
	</body>

</html>