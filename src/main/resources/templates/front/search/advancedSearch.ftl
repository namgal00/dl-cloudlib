<!DOCTYPE html>
<!-- saved from url=(0038)http://find.nlc.cn/show/advancedSearch -->
<html>

	<head>
		[#include "/front/include/head.htm"]
		<script type="text/javascript">
			var contextPath = '';
			var locale = 'zh_CN';
			var isSSOBackendValid = 'false';
			var userName = '';
			var isHomePage = 'false';
			var defaultOrderBy = 'RELATIVE';
		</script>
		<script src="${base}/front/js/MSIE.PNG.js"></script>

		<script type="text/javascript" src="${base}/front/js/common.js"></script>

		<script type="text/javascript" src="${base}/front/js/data/categories_index_zh.js"></script>
		<script type="text/javascript" src="${base}/front/js/common/translate/translate.js"></script>
		<script type="text/javascript" src="${base}/front/js/advancedSearch.js"></script>

	</head>

	<body style="background-image: url(&quot;/pictures/wjBackground.jpg&quot;);">

		<!-- header -->
		[#include "/front/include/header.htm"]
		<!-- header end -->

		<div class="wjSearch_wrap">
			<div class="w1024 fc">
				<div id="l_wjLogo" style="background-image: url(&quot;/images/skin.png&quot;);">
					<a href="${base}/search/advancedSearch"></a>
				</div>
				<div class="advanceSearch">
					<div class="advanceSearchStep"></div>
					<div class="advanceSearch_bd">
						<div class="a_tit a_tit_frst">选择文献类型</div>
						<fieldset>
							<div class="document_type">
								<label>指定文献类型：</label>
								<select name="criteria-docTypeSlt" id="docTypeSlt" onchange="setFieldSlt(this);">
									<option value="图书">图书</option>
									<option value="古文献">古文献</option>
									<option value="论文">论文</option>
									<option value="期刊报纸">期刊报纸</option>
									<option value="多媒体">多媒体</option>
									<option value="缩微文献">缩微文献</option>
									<option value="文档">文档</option>
									<option value="词条">词条</option>
								</select>
							</div>
						</fieldset>
						<div class="a_tit">选择高级检索方式</div>
						<fieldset id="criteriaFieldSet">
							<div>
								<label class="lable">检索类型：</label>
								<label style="margin-right:10px"><input type="radio" name="searchtype" checked="checked" value="logicsearch">逻辑检索</label>
								<label><input type="radio" name="searchtype" value="fulltextsearch">在全文中检索</label>
							</div>
							<div class="blk5"></div>
							<div id="logicSearchTab">
								<div class="item fn-clear">
									<div class="feeds fl">
										<select class="w120 fieldSlt" name="criteria-fieldSlt-0" id="fieldSlt-0">
											<option value="全部字段">全部字段</option>
											<option value="题名">题名</option>
											<option value="责任者">责任者</option>
											<option value="关键词">关键词</option>
											<option value="出版商">出版商</option>
											<option value="ISBN">ISBN</option>
										</select>
									</div>
									<div class="feeds fl">
										<p>
											<input type="text" maxlength="60" class="inputTxt w408" name="criteria-criteriaIpt-0" id="criteriaIpt-0">
										</p>
										<p class="translate" toen="翻译成英文" toch="翻译成中文">
											<a href="javascript:void(0);" onclick="translate2zh(this)">翻译成中文</a>&nbsp;-&nbsp;&nbsp;
											<a href="javascript:void(0);" onclick="translate2en(this)">翻译成英文</a>
										</p>
									</div>
									<div class="feeds fl">
										<p>
											<input type="button" class="formBtn" value="添加检索条件" id="addSearchCriteriaBtn">
										</p>
									</div>
								</div>

								<div class="item fn-clear" style="display:none;" id="logicSltDiv">
									<select class="w120 aOR">
										<option value="AND">与</option>
										<option value="OR">或</option>
										<option value="-">非</option>
									</select>
									<div class="blk5"></div>
								</div>

								<div style="display:none;">
									<div id="andText">与</div>
									<div id="orText">或</div>
									<div id="notText">非</div>
									<div id="toENText">翻译成英文</div>
									<div id="toCHText">翻译成中文</div>
									<div id="delConText">去除检索条件</div>
								</div>

								<div id="searchCriteriaBottom"></div>
							</div>

							<div class="item fn-clear" style="display:none" id="fullTextSearchTab">
								<div class="feeds fl">
									<select class="w120 fieldSlt" disabled="true">

										<option value="全部字段">全部字段</option>
										<option value="题名">题名</option>
										<option value="责任者">责任者</option>
										<option value="关键词">关键词</option>
										<option value="出版商">出版商</option>
										<option value="ISBN">ISBN</option>
									</select>
								</div>
								<div class="feeds fl">
									<p>
										<input type="text" maxlength="60" class="inputTxt w408" id="fullTextSearchInput">
									</p>
								</div>
							</div>

						</fieldset>

						<div class="a_tit">选择高级检索范围</div>
						<fieldset>
							<div class="label">出版年份：</div>
							<ul>
								<li>
									<input type="text" maxlength="4" class="inputTxt w70" value="" name="criteria-yearCriteriaFrom" id="yearCriteriaFrom">&nbsp;&nbsp;年
									<span class="gray mlr10">—</span>
									<input type="text" maxlength="4" class="inputTxt w70" value="" name="criteria-yearCriteriaTo" id="yearCriteriaTo">&nbsp;&nbsp;年
								</li>
							</ul>
							<div class="blk10"></div>
							<div class="label">只显示：</div>
							<ul class="labelCon lstBlock">
								<li><label><input type="checkbox" class="inputCheck" name="criteria-showTarget" value="text">&nbsp;可提供全文</label></li>
							</ul>

						</fieldset>

						<fieldset style="display:none;">
							<div>
								<label>检索命令行查看修改</label>
							</div>
							<div class="blk5"></div>
							<div class="item fn-clear">
								<input type="text" class="inputTxt w542" id="searchExpression">
							</div>
						</fieldset>
					</div>
					<div class="btnWrap">
						<input type="button" class="submitBtn" value="" onclick="searchCriteria();">
					</div>
					<div class="blk40"></div>
				</div>

			</div>

			<!-- footer -->
			[#include "/front/include/footer.htm"]
	</body>

</html>