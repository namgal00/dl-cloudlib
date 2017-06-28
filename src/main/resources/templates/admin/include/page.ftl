<section>
	<div style="float: left;">
		<label> <input type="checkbox" onclick="checkIds();" /><span>全选</span>
		</label>
	</div>
		<input type="hidden" name="pageNum" id="pageNum" value="${page.pageNum }" /> 第${page.pageNum }/${page.pages }页 共${page.total}条 
		[#if page.pageNum<=1 ] 
			<a>首页</a>
			<a>上一页</a>
		[#else]
			<a href="javascript:goPage(1)">首页</a>
			<a href="javascript:goPage(${page.pageNum - 1 })">上一页</a>
		[/#if]

		[#if (page.pageNum >= page.pages) ] 
			<a>下一页</a>
			<a>末页</a>
		[#else]
			<a href="javascript:goPage(${page.pageNum+1 })">下一页</a>
			<a href="javascript:goPage(${page.pages})">末页</a>
		[/#if]
		转至 <input type="text"  id="goName" />
		<button type="button" onclick="forwardPage(${page.pages})">GO</button>

</section>