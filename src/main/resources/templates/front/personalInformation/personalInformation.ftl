<!doctype html>

<html>

	<head>
		[#include "/front/include/head.htm"]
		<script type="text/javascript">
			var contextPath = '';
			var locale = 'zh_CN';
			var isSSOBackendValid = 'true';
			var userName = 'namgal00';
			var isHomePage = 'false';
			var defaultOrderBy = 'RELATIVE';
		</script>
		<script src="${base}/js/MSIE.PNG.js"></script>

		<script type="text/javascript" src="${base}/js/common.js"></script>

		<script type="text/javascript" src="${base}/js/data/categories_index_zh.js"></script>
		<script type="text/javascript" src="${base}/js/searchHistory.js"></script>

	</head>

	<body>

		<!-- header -->
		[#include "/front/include/header.htm"]
		<!-- header end -->

		<div id="bd_wrap">
			<div class="hd_shadow"><img src="${base}/images/hd_shadow.png" onload="fix(this)"></img>
			</div>
			<div id="bd">
				<div class="bd_hd">
					<div class="s_wjSearch fn-clear">
						<div id="w_logo" class="w_logo">
							<a href="/">&nbsp;</a>
						</div>
						<div class="l_wjSearch_bd">
							<!-- target field select -->
							<div class="filter_item">
								<div class="def fn-hide" id="targetFieldSlt">
									<a href="javascript:void(0);"><span id="targetFieldText" defaultText="全部字段">全部字段</span><span class="l_arrowDown"></span></a>
								</div>
								<div class="subLst fn-hide" id="targetTypeOptns">
								</div>
							</div>
							<input type="text" class="submitInput" id="keywordIpt" btnId="instant-search-btn" name="actualQuery" defaultValue="图书、论文、期刊报纸信息一步获取" />
						</div>
						<div class="l_search_btn"><input id="instant-search-btn" type="button" value="&nbsp;" class="submitBtn" onclick="indexSearch()" /></div>
						<div class="s_link s_link_s">
							<a href="/show/advancedSearch">高级检索</a>
						</div>
					</div>
				</div>
				<script type="text/javascript">
					var iptValue = "";
				</script>
				<div class="searchResults fn-clear unionSearch">

					<div class="sideFilter fn-clear fl">
						<div class="item ">
							<ul class="sideTab">
								<li>
									<a href="/user/searchHistory" class="current">
										<i>我的检索历史</i>
									</a>
								</li>
								<li>
									<a href="/user/showSettings">
										<i>我的搜索设定</i>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class=" wjResults fl ">
						<div class="userCenter fn-clear">
							<div class="userCenterCon fl">
								<div class="hd alignM"><span class="m_tit"><i>我的检索历史</i></span></div>
								<div class="bd">
									<div class="searchHistory fn-clear">
										<div class="fr fn-clear">
											<a href="/user/clearSearchHistory">清空检索历史</a>
										</div>
										<div class="blk5"></div>

										<table border="0" cellspacing="0" cellpadding="0">
											<col span="1" class="searchWord" />
											<col span="1" class="docStyle" />
											<col span="1" class="searchFields" />
											<col span="1" class="date" />
											<thead>
												<tr>
													<td class="Lbor">检索词</td>
													<td>检索文献类型</td>
													<td>检索字段</td>
													<td class="Rbor">执行时间</td>
												</tr>
											</thead>
											<tbody>
												<tr id="qh-row-0">
													<td>
														<a href="/search/doSearch?query=111&secQuery=&actualQuery=111&searchType=2&docType=%E5%85%A8%E9%83%A8&isGroup=isGroup&targetFieldLog=%E5%85%A8%E9%83%A8%E5%AD%97%E6%AE%B5&orderBy=RELATIVE" title="111">
															111
														</a>
													</td>
													<td>全部</td>
													<td>全部字段</td>
													<td>2017-06-26 09:27:49</td>
												</tr>
												<tr id="qh-row-0">
													<td>
														<a href="/search/doSearch?query=%E7%BA%A2%E6%A5%BC%E6%A2%A6&secQuery=&actualQuery=%E7%BA%A2%E6%A5%BC%E6%A2%A6&searchType=2&docType=%E5%85%A8%E9%83%A8&isGroup=isGroup&targetFieldLog=%E5%85%A8%E9%83%A8%E5%AD%97%E6%AE%B5&orderBy=RELATIVE" title="红楼梦">
															红楼梦
														</a>
													</td>
													<td>全部</td>
													<td>全部字段</td>
													<td>2017-05-17 14:34:16</td>
												</tr>
												<tr id="qh-row-0">
													<td>
														<a href="/search/doSearch?query=%E7%BA%A2%E6%A5%BC%E6%A2%A6&secQuery=&actualQuery=%E7%BA%A2%E6%A5%BC%E6%A2%A6%20mediatype%3A(9%20OR%2010)%20&searchType=2&docType=%E6%9C%9F%E5%88%8A%E6%8A%A5%E7%BA%B8&mediaTypes=9,10&isGroup=isGroup&targetFieldLog=%E5%85%A8%E9%83%A8%E5%AD%97%E6%AE%B5&orderBy=RELATIVE" title="红楼梦">
															红楼梦
														</a>
													</td>
													<td>期刊报纸</td>
													<td>全部字段</td>
													<td>2017-05-17 14:34:09</td>
												</tr>
												<tr id="qh-row-0">
													<td>
														<a href="/search/doSearch?query=%E7%BA%A2%E6%A5%BC%E6%A2%A6&secQuery=&actualQuery=%E7%BA%A2%E6%A5%BC%E6%A2%A6%20mediatype%3A(9%20OR%2010)%20&searchType=2&docType=%E6%9C%9F%E5%88%8A%E6%8A%A5%E7%BA%B8&mediaTypes=9,10&isGroup=isGroup&targetFieldLog=%E5%85%A8%E9%83%A8%E5%AD%97%E6%AE%B5&orderBy=RELATIVE" title="红楼梦">
															红楼梦
														</a>
													</td>
													<td>期刊报纸</td>
													<td>全部字段</td>
													<td>2017-05-17 14:34:04</td>
												</tr>
												<tr id="qh-row-0">
													<td>
														<a href="/search/doSearch?query=111&secQuery=&actualQuery=111%20mediatype%3A(9%20OR%2010)%20%20periodicalname%3A(111)%20&searchType=2&docType=%E6%9C%9F%E5%88%8A%E6%8A%A5%E7%BA%B8&mediaTypes=9,10&targetField=periodicalname&isGroup=isGroup&targetFieldLog=%E6%9C%9F%E5%88%8A%E5%90%8D&orderBy=RELATIVE&fromHome=true" title="111">
															111
														</a>
													</td>
													<td>期刊报纸</td>
													<td>期刊名</td>
													<td>2017-05-17 11:24:29</td>
												</tr>
												<tr id="qh-row-0">
													<td>
														<a href="/search/doSearch?query=%E7%BA%A2%E6%A5%BC%E6%A2%A6&secQuery=&actualQuery=%E7%BA%A2%E6%A5%BC%E6%A2%A6&searchType=2&docType=%E5%85%A8%E9%83%A8&isGroup=isGroup&targetFieldLog=%E5%85%A8%E9%83%A8%E5%AD%97%E6%AE%B5&fromHome=true" title="红楼梦">
															红楼梦
														</a>
													</td>
													<td>全部</td>
													<td>全部字段</td>
													<td>2017-05-17 11:18:04</td>
												</tr>
												<tr id="qh-row-0">
													<td>
														<a href="/search/doSearch?query=aaa&secQuery=&actualQuery=aaa&searchType=2&docType=%E5%85%A8%E9%83%A8&isGroup=isGroup&targetFieldLog=%E5%85%A8%E9%83%A8%E5%AD%97%E6%AE%B5&fromHome=true" title="aaa">
															aaa
														</a>
													</td>
													<td>全部</td>
													<td>全部字段</td>
													<td>2017-05-15 09:17:26</td>
												</tr>
											</tbody>
										</table>

										<div class="blk20"></div>

										<div class="page">

											<span class="current">1</span>

										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		<!-- footer -->
		[#include "/front/include/footer.htm"]

	</body>

</html>