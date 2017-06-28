<!DOCTYPE html>
<html>

	<head>
		<link rel="stylesheet" type="text/css" href="${base}/front/css/style.css" />
		<script src="${base}/front/js/modernizr.custom.63321.js"></script>
		<!--[if lte IE 7]><style>.main{display:none;} .support-note .note-ie{display:block;}</style><![endif]-->
		<style>
			@import url(http://fonts.googleapis.com/css?family=Raleway:400,700);
			body {
				background: #7f9b4e url(/front/images/bg2.jpg) no-repeat center top;
				-webkit-background-size: cover;
				-moz-background-size: cover;
				background-size: cover;
			}
			
			.container>header h1,
			.container>header h2 {
				color: #fff;
				text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
			}
		</style>
	</head>

	<body>
		<div class="container">

			<header>

				<h1>欢迎 <strong>登入</strong> 哈哈</h1>
				<h2>${(message_prompt.content)!''}</h2>
			</header>

			<section class="main">
				<form class="form-4" action="${base}/login" method="post">
					<h1>用户登入</h1>
					<input type="hidden" name=path value=${path } />
					<p>
						<label for="password">学校</label>
						<select name="schoolId">
							<option value="0">请选择学校</option>
							[#list school as s]
							<option value="${s.id }">${s.schoolName }</option>
							[/#list]
						</select>
					</p>
					<p>
						<label for="login">读者证号</label>
						<input type="text" name="barcode" placeholder="读者证号" required>
					</p>
					<p>
						<label for="password">密码</label>
						<input type="password" name='password' placeholder="密码" required>
					</p>
					<p>
						<input type="submit" name="submit" value="Continue">
					</p>
				</form>​
			</section>

		</div>
	</body>

</html>