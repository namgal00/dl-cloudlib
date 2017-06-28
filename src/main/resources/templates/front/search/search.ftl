<!DOCTYPE html>
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
		<script type="text/javascript" src="${base}/front/js/baidumap.js"></script>
			<script type="text/javascript" src="${base}/front/js/resultList.js"></script>
		<script type="text/javascript" src="${base}/front/js/data/librariesCoordinates.js"></script>

		<link rel="stylesheet" type="text/css" href="${base}/front/css/bmap.css">

	</head>

	<body style="background-image: url(&quot;/pictures/wjBackground.jpg&quot;);">

		[#include "/front/include/header.htm"]

		<div id="bd_wrap">
			<div class="hd_shadow">
				<img alt="" src="${base }/front/images/hd_shadow.png" onload="fix(this)" />
			</div>
			<div id="bd">
				<link href="${base }/front/css/easyui.css" rel="stylesheet" type="text/css">
				<div class="bd_hd">
					<div class="s_wjSearch fn-clear">
						<div id="w_logo" class="w_logo">
							<a href="http://find.nlc.cn/">&nbsp;</a>
						</div>
						<div class="l_wjSearch_bd">
							<!-- target field select -->
							<div class="filter_item" style="display: none;">
								<div class="def fn-hide" id="targetFieldSlt">
									<a href="javascript:void(0);"><span id="targetFieldText" defaulttext="全部字段">全部字段</span><span class="l_arrowDown"></span></a>
								</div>
								<div class="subLst fn-hide" id="targetTypeOptns">
								</div>
							</div>
							<input type="text" class="submitInput ui-autocomplete-input" id="keywordIpt" btnid="instant-search-btn" name="actualQuery" defaultvalue="图书、论文、期刊报纸信息一步获取" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" style="color: rgb(0, 0, 0); width: 565px;">
						</div>
						<div class="l_search_btn"><input id="instant-search-btn" type="button" value=" " class="submitBtn" onclick="indexSearch()"></div>
						<div class="s_link s_link_s">
							<a href="http://find.nlc.cn/show/advancedSearch">高级检索</a>

						</div>
					</div>
				</div>

				<div id="hd"></div>

				<div class="searchResults fn-clear" id="searchresult-main">

					<!-- left filter panel (start) -->
					<div class="sideFilter fn-clear fl" id="searchresult-sidebar">
						<div id="curArea" style="display:none;"></div>
						<div class="item">
							<div class="hd fst_hd alignM">
								<span class="icoAll"></span><i>分类查询</i></div>
							<ul class="mNav" curarea="mediaType">
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="A" title="马克思列宁主义、毛泽东思想、邓小平理论"><span><label><input type="checkbox" aid="A" class="inputCheck mr5"><b>A类(马列主义.....)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="B" title="哲学、宗教"><span><label><input type="checkbox" aid="B" class="inputCheck mr5"><b>B类(哲学、宗教)</b></label></span></a>

								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="C" title="社会科学总论"><span><label><input type="checkbox" aid="C" class="inputCheck mr5"><b>C类(社会科学总论)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="D" title="政治、法律"><span><label><input type="checkbox" aid="D" class="inputCheck mr5"><b>D类(政治、法律)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="E" title="军事"><span><label><input type="checkbox" aid="E" class="inputCheck mr5"><b>E类(军事)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="F" title="经济"><span><label><input type="checkbox" aid="F" class="inputCheck mr5"><b>F类(经济)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="G" title="文化、科学、教育、体育"><span><label><input type="checkbox" aid="G" class="inputCheck mr5"><b>G类(文化、科学......)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="H" title="语言、文字"><span><label><input type="checkbox" aid="H" class="inputCheck mr5"><b>H类(语言、文字)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="I" title="文学"><span><label><input type="checkbox" aid="I" class="inputCheck mr5"><b>I类(文学)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="J" title="艺术"><span><label><input type="checkbox" aid="J" class="inputCheck mr5"><b>J类(艺术)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="K" title="历史、地理"><span><label><input type="checkbox" aid="K" class="inputCheck mr5"><b>K类(历史、地理)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="N" title="自然科学总论"><span><label><input type="checkbox" aid="N" class="inputCheck mr5"><b>N类(自然科学总论)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="O" title="数理科学和化学"><span><label><input type="checkbox" aid="O" class="inputCheck mr5"><b>O类(数理科学和化学)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="P" title="天文学、地球科学"><span><label><input type="checkbox" aid="P" class="inputCheck mr5"><b>P类(天文学、地球科学)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="Q" title="生物科学"><span><label><input type="checkbox" aid="Q" class="inputCheck mr5"><b>Q类(生物科学)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="R" title="医药、卫生"><span><label><input type="checkbox" aid="R" class="inputCheck mr5"><b>R类(医药、卫生)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="S" title="农业科学"><span><label><input type="checkbox" aid="S" class="inputCheck mr5"><b>S类(农业科学)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="T" title="工业技术"><span><label><input type="checkbox" aid="T" class="inputCheck mr5"><b>T类(工业技术)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="U" title="交通运输"><span><label><input type="checkbox" aid="U" class="inputCheck mr5"><b>U类(交通运输)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="V" title="航空、航天"><span><label><input type="checkbox" aid="X" class="inputCheck mr5"><b>V类(航空、航天)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="X" title="环境科学、安全科学"><span><label><input type="checkbox" aid="X" class="inputCheck mr5"><b>X类(环境科学.....)</b></label></span></a>
								</li>
								<li class="b">
									<a class="b_t" href="javascript:void(0);" mattr="Z" title="综合性图书"><span><label><input type="checkbox" aid="Z" class="inputCheck mr5"><b>Z类(综合性图书)</b></label></span></a>
								</li>
							</ul>
						</div>
						<div class="blk20" style="background:#f3f3f3"></div>

						<!-- item start -->
						<!--
						<div class="item">
							<div class="hd alignM"><span class="icoArea"></span><i>缩小检索范围</i></div>

							<div class="subHd">年份</div>
							<ul class="mNav" curarea="year">

								<li style="display:block" title="2015">
									<a href="javascript:void(0);"><span><label><input id="chk_23" aid="65d2ea03425887a717c435081cfc5dbb" type="checkbox" class="inputCheck mr5" field="yearint" code="2015">

		2015

	<script type="text/javascript">$("#chk_23").attr("aid", $.md5("2015"));</script>

	</label></span></a>
								</li>
								<li style="display:block" title="2015">
									<a href="javascript:void(0);"><span><label><input id="chk_23" aid="65d2ea03425887a717c435081cfc5dbb" type="checkbox" class="inputCheck mr5" field="yearint" code="2015">

		2015

	<script type="text/javascript">$("#chk_23").attr("aid", $.md5("2015"));</script>

	</label></span></a>
								</li>

								<li style="display:block" title="2014">
									<a href="javascript:void(0);"><span><label><input id="chk_24" aid="cee8d6b7ce52554fd70354e37bbf44a2" type="checkbox" class="inputCheck mr5" field="yearint" code="2014">

		2014

	<script type="text/javascript">$("#chk_24").attr("aid", $.md5("2014"));</script>

	</label></span></a>
								</li>

								<li style="display:block" title="2013">
									<a href="javascript:void(0);"><span><label><input id="chk_25" aid="8038da89e49ac5eabb489cfc6cea9fc1" type="checkbox" class="inputCheck mr5" field="yearint" code="2013">

		2013

	<script type="text/javascript">$("#chk_25").attr("aid", $.md5("2013"));</script>

	</label></span></a>
								</li>

								<li style="display:block" title="2012">
									<a href="javascript:void(0);"><span><label><input id="chk_26" aid="253614bbac999b38b5b60cae531c4969" type="checkbox" class="inputCheck mr5" field="yearint" code="2012">

		2012

	<script type="text/javascript">$("#chk_26").attr("aid", $.md5("2012"));</script>

	</label></span></a>
								</li>

								<li style="display:block" title="2011">
									<a href="javascript:void(0);"><span><label><input id="chk_27" aid="c8758b517083196f05ac29810b924aca" type="checkbox" class="inputCheck mr5" field="yearint" code="2011">

		2011

	<script type="text/javascript">$("#chk_27").attr("aid", $.md5("2011"));</script>

	</label></span></a>
								</li>
							</ul>
							<div id="more" field="yearint" onclick="initShowMoreClick(this)" class="more" style="cursor:pointer">
								<a>更多…</a>
							</div>

							<div class="subHd">著者</div>
							<ul class="mNav" curarea="firstcreator">
								[#list book as b]
								<li style="display:block" title="${b.author }">
									<a href="javascript:void(0);"><span><label><input id="chk_73" aid="0aabc587ad7dc3aba3cf65b985ef887a" type="checkbox" class="inputCheck mr5" field="firstcreator" code="556E69746564205374617465732E" do="clean">

		${b.author }

	<script type="text/javascript">$("#chk_73").attr("aid", $.md5("United States."));</script>

	</label></span></a>
								</li>
								[/#list]
							</ul>
							<div id="more" field="firstcreator" onclick="initShowMoreClick(this)" class="more" style="cursor:pointer">
								<a>更多…</a>
							</div>

						</div>
-->
					</div>
					<!-- left filter panel (end) -->

					<div class="wjResults fl" id="searchresult-list">
						<div class="viewFilter">
							<span class="fr viewPage">




							<span><b>1</b>/9300</span>

							<a href="javascript:void(turnSearchResultPage(2));">下一页</a>

							</span>
							<span class="viewSelect">
			<a id="resultFldSlt" href="javascript:void(0);"><span id="resultFldText">全部检索字段</span><i class="ioc_arrow_v"></i></a>
							</span>
							<ul class="select_lst" id="resultFldOptns" style="display:none;">
								<a id="all-fields-opt" href="javascript:void(0);" code="all">全部检索字段</a>
							</ul>
							<i>&nbsp;包含检索词的结果</i>
							<span class="viewOrder">
			<i>排序：</i>
			<a id="orderBySlt" href="javascript:void(0);"><span id="orderByText">相关性</span><i class="ioc_arrow_v"></i></a>
							</span>
							<ul class="select_lst select_lst_vo" id="orderByOptns" style="display: none; left: 313.25px;">
								<a href="javascript:void(0);" code="RELATIVE">相关性</a>
								<a href="javascript:void(0);" code="TITLE">题名A-Z</a>
								<a href="javascript:void(0);" code="AUTHOR">作者A-Z</a>
								<a href="javascript:void(0);" code="PUBLISHER">出版单位A-Z</a>
								<a href="javascript:void(0);" code="PUBLISH_DATE_DESC">出版日期（最近的排在前面）</a>
								<a href="javascript:void(0);" code="PUBLISH_DATE_ASC">出版日期（最老的排在前面）</a>
							</ul>
						</div>
						<div class="viewResult"><span>找到相关结果约&nbsp;<b id="totalCnt">93000</b>&nbsp;个，当前显示:&nbsp;<b id="curCnt">1-10</b></span></div>
						<div class="fn-clear"></div>

						<div class="bd">
							<div id="correctionWords"></div>

							<div id="resultitem-box">

								<div id="fldText" style="display:none;">全部检索字段</div>
								<div id="searchresult-items">

									<div class="lineDashed"></div>

									<div class="item">
										<div class="num">1.</div>
										<div class="img">
											<a href="javascript:void(0);" onclick="makeDetailUrl(this, &#39;/search/showDocDetails?&#39;, &#39;-4993779832919073729&#39;, &#39;ucs01&#39;, &#39;111&#39;);" target="_blank"><img src="./文津搜索_files/0.jpg"></a>
										</div>
										<div class="info" extended="false">
											<h4>
			<a id="-4993779832919073729" istitle="true" href="javascript:void(0);" onclick="makeDetailUrl(this, &#39;/search/showDocDetails?&#39;, &#39;-4993779832919073729&#39;, &#39;ucs01&#39;, &#39;111&#39;);" target="_blank">

		过好日子的111句箴言
			</a>

			</h4>
											<p>文献类型：<em>专著</em> </p>
											<p>著者：<em>
		陈梓琪
</em></p>
											<p>
												<span class="pubDate">出版年份：<em>
		2002
</em></span>
												<span class="pub">出版社：<em>
		华文网公司
</em></span>
											</p>
											<p>来源数据库：<em>馆藏中文资源</em></p>
											<div class="moreNav" style="float:left;">
												<span><i class="ico_summary_g"></i>摘要</span>
												<span><i class="ico_catalog_g"></i>目次</span>
												<a id="collection" name="collection" href="javascript:void(0);" onclick="toggleDocExpandInfo(this, &#39;collection&#39;, &#39;-4993779832919073729&#39;, &#39;馆藏中文资源&#39;, &#39;ucs01&#39;)">
													<i class="ico_collection_b"></i>馆藏信息
												</a>
											</div>
											<img src="./文津搜索_files/ajax-loader.gif" style="display:none;">
										</div>

									</div>

									<div class="lineDashed"></div>

									<div class="page">

										<span class="current">1</span>

										<a href="javascript:void(turnSearchResultPage(2));">2</a>

										<a href="javascript:void(turnSearchResultPage(3));">3</a>
										<a href="javascript:void(turnSearchResultPage(4));">4</a>
										<a href="javascript:void(turnSearchResultPage(5));">5</a>
										<a href="javascript:void(turnSearchResultPage(6));">6</a>
										<a href="javascript:void(turnSearchResultPage(7));">7</a>
										<a href="javascript:void(turnSearchResultPage(8));">8</a>
										<a href="javascript:void(turnSearchResultPage(9));">9</a>
										<a href="javascript:void(turnSearchResultPage(10));">10</a>

										<a href="javascript:void(turnSearchResultPage(2));" class="pre">下一页</a>
									</div>

								</div>
							</div>

						</div>
					</div>

				</div>

			</div>
		</div>

		[#include "/front/include/footer.htm"]
	</body>

</html>