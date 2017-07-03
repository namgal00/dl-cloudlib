<div class="pager">
	<span style="margin-left: 10px; float: left;margin-top: 5px; "><input class="input_none" type="checkbox" onclick="javascript:checkIds();"/> 
	</span >
	<span style="float: left;">全选/反选</span> <span> 第${page.pageNum }/${page.pages }页 共${page.total}条 
		</span>

	[#if page.pageNum<=1 ] 
		<span class="page_gray">首页</span>
		<span class="page_gray">上一页</span>
	[#else]
		<span class="page_gray"><a href="javascript:goPage(1)">首页</a></span>
		<span class="page_gray"><a href="javascript:goPage(${page.pageNum - 1 })">上一页</a></span>
	[/#if]
	
	[#if (page.pageNum >= page.pages) ] 
		<span class="page_gray">下一页</span>
		<span class="page_gray">未页</span>
	[#else]
		<span class="page_gray"><a href="javascript:goPage(${page.pageNum+1 })">下一页</a></span>
		<span class="page_gray"><a href="javascript:goPage(${page.pages})">末页</a></span>
		
	[/#if]

	<span>转至 <input id="forward" class="input_in" type="text" /> <input
		type="button" class="input_btn" value="GO" id="goName" 
		onclick="forwardPage(${page.pages})" />
	</span>
</div>