<!doctype html>
<html>

	<head>

		[#include "/front/include/head.htm"]

		<script type="text/javascript">
			var contextPath = '';
			var locale = 'zh_CN';
			var isSSOBackendValid = 'false';
			var userName = '';
			var isHomePage = 'true';
			var defaultOrderBy = 'RELATIVE';
		</script>
		<script src="${base}/front/js/MSIE.PNG.js"></script>

		<script type="text/javascript" src="${base}/front/js/common.js"></script>

		<script language="javascript">
			document.write("<script language=\"javascript\" src=\"http://sso1.nlc.cn/sso/get-sso-ticket?rand=" + Math.random() + "\">");
			document.write("<\/script>");
		</script>
		<script type="text/javascript" src="${base}/front/js/initSSO.js"></script>
		<script type="text/javascript" src="${base}/front/js/jquery/jquery.engine3D.js"></script>
		<script type="text/javascript" src="${base}/front/js/jquery/jquery.particlePhysics.js"></script>
		<script type="text/javascript" src="${base}/front/js/jquery/jquery.starfieldTagCloud.js"></script>
		<script type="text/javascript" src="${base}/front/js/index.js"></script>
		<script type="text/javascript" src="${base}/front/js/data/categories_index_zh.js"></script>

		<style>
			.s_wjSearch .l_search_btn .submitBtn {
				width:132px;
				background:url(${base}/front/images/search-1.png) no-repeat;
				margin-top:5px;
			}
			.s_wjSearch .l_search_btn .submitBtn:hover {
				width:132px;
				background:url(${base}/front/images/search-1.png) no-repeat;
				margin-top:5px;
			}
			
			html{
				background:#ffffff;
			}
			body{
				background:#ffffff;
			}
			.s_link a{
				margin-top:5px;
			}
			
		</style>
		<script type="text/javascript">
			function indexSearch(obj){
				$(obj).attr("disabled", "disabled");
				$("#formId").submit();
				$(obj).removeAttr("disabled");
				
			}
			
		</script>
		

	</head>

	<body>

		[#include "/front/include/header.htm"]

		<div class="wjSearch_wrap">
			<div class="w1024 fc">
				<style>
					.wjSearch {
						margin: 194px 0 26px 150px;
						height:50px;
						width:800px;
						background:#b5b5b5;
					}
					.s_wjSearch .l_wjSearch_bd{
						margin-top:5px;
					}
					.l_search_btn{
						margin-top:5px;
					}
					.s_link s_link_s{
						
					}
					
					.recommed {
						width: 760px;
						margin-left: 156px;
						height: 126px;
						overflow: hidden;
						border: 1px solid #edece9;
						background: rgba(255, 255, 255, 0.5)!important;
					}
					
					.recommed h2 {
						height: 36px;
						line-height: 36px;
						border-bottom: 1px solid #edece9;
						padding-left: 16px;
						color: #333;
						font-size: 14px;
					}
					
					.recommed ul {
						padding: 8px 16px 0;
					}
					
					.recommed li {
						width: 145px;
						line-height: 33px;
						float: left;
						overflow: hidden;
						white-space: nowrap;
						margin-right: 49px;
					}
					
					.recommed li.last {
						margin-right: 0;
					}
					
					.recommed li a {
						font-size: 14px;
						color: #9c733b;
					}
				</style>
				<div id="l_wjLogo">
					<img src="${base}/front/images/logo.png"></img>
				</div>
				<div class="wjSearch">
					<div class="s_wjSearch fn-clear">
						<form action="${base}/search/doSearch" method="get" id="formId">
						<div class="l_wjSearch_bd">
							<div class="filter_item">
								<div class="def" id="targetFieldSlt">
									<a href="javascript:void(0);">
										<span id="targetFieldText" defaultText="全部字段"></span>
										<span class="l_arrowDown"></span>
									</a>
								</div>
								<div class="subLst fn-hide" id="targetTypeOptns"></div>
							</div>
							<input type="text" class="submitInput" name="query" placeholder="题名,作者,ISBN" id="keywordIpt" btnId="submit-btn" />
						</div>
						<div class="l_search_btn"><input id="submit-btn" type="button" value="&nbsp;" class="submitBtn" onclick="indexSearch(this);" /></div>
						<div class="s_link s_link_s">
							<a href="${base}/advancedSearch">高级检索</a>

						</div>
						</form>
					</div>
					<div class="wj_subNav">
					</div>
				</div>

			</div>
		</div>
		[#include "/front/include/footer.htm"]
	</body>

</html>