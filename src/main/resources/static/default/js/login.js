/*******************************************************************************
 * 隐藏验证码 并且禁用验证码的input
 ******************************************************************************/
function hideCaptcha() {
	$("center").removeAttr("class");// 移除样式
	$("#j_captcha_li").hide();
	$("#j_captcha").attr("disabled", "disabled");
	$("#j_captcha").removeAttr("required");
};
/*******************************************************************************
 * 显示验证码 并且不经用input
 ******************************************************************************/
function showCaptcha() {
	$("center").attr("class", "captcha");// 添加样式
	$("#j_captcha_li").show();
	$("#j_captcha").removeAttr("disabled");
	$("#j_captcha").attr("required", "required");
};
