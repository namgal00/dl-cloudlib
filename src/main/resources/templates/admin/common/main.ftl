<!DOCTYPE html>
<html>

	<head>
		[#include "/admin/include/head.htm"]
		<link rel="stylesheet" href="${base}/default/css/nav.css" />
		<script type="text/javascript" src="${base}/default/js/nav.js"></script>
	</head>

	<body>
		<nav>
			<h1>
			<article>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你好!&nbsp;&nbsp;${admin.realName}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎使用云图数字图书馆管理后台
			</article>
			</h1>
			<dl>
				<dt>
					<source class="icon-angle-right"></source>电子书管理
				</dt>
				<dd class="icon-caret-right">
					<a href="${base}/admin/batch/list" target="content">批次管理</a>
				</dd>
				<dd class="icon-caret-right">
					<a href="${base}/admin/book/list" target="content">电子书管理</a>
				</dd>
			</dl>
			<dl>
				<dt>
					<source class="icon-angle-right"></source>电子书交易
				</dt>
				<dd class="icon-caret-right">
					<a href="${base}/admin/apply/list" target="content">申请记录</a>
				</dd>
			</dl>
			<dl>
				<dt>
					<source class="icon-angle-right"></source>读者反馈
				</dt>
				<dd class="icon-caret-right">
					<a href="${base}/admin/suggest/list" target="content">意见反馈</a>
				</dd>
			</dl>
			
		</nav>
		<iframe  style="margin-left:10px;width:calc(100% - 260px); height:99%;" name="content" frameborder="0" scrolling="no" src="${base}/admin/content"></iframe>
	</body>

</html>