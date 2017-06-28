<!DOCTYPE html>
<html>

	<head>
		[#include "/teacher/include/head.htm"]
		<script type="text/javascript">
			function setHeight() {
				var ifm = document.getElementById("iframePage");
				var subWeb = document.frames ? document.frames["iframePage"].document : ifm.contentDocument;
				if(ifm != null && subWeb != null) {
					ifm.height = winHeight - 40
				}
			}
		</script>
	</head>

	<body>
		<div id="wrapper">
			<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
					<a class="navbar-brand" href="${base}/teacher/index.jhtml">云图电子书</a>
				</div>
				<ul class="nav navbar-right top-nav">
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i>&nbsp;${user.userName} <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li class="divider">
							</li>
							<li>
								<a href="${base}/admin/loginOut.jhtml"><i class="fa fa-fw fa-power-off"></i>退出</a>
							</li>
						</ul>
					</li>
				</ul>
				<div class="collapse navbar-collapse navbar-ex1-collapse">
					<ul class="nav navbar-nav side-nav">
						<li>
							<a data-toggle="collapse" data-target="#demo2"><i class="fa fa-fw fa-list-alt"></i>批次模块 <i class="fa fa-fw fa-caret-down"></i></a>
							<ul id="demo2" class="collapse">
								<li>
									<a target="iframePage" href="${base}/teacher/bookBatch/list">批次管理</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
			<iframe id="iframePage" name="iframePage" src="${base}/teacher/middle.jhtml" style="padding-top: 50px;" frameborder="0" scrolling="auto" onLoad="setHeight();" width="100%" marginheight="0px" marginwidth="0px">
            </iframe>
		</div>
	</body>

</html>