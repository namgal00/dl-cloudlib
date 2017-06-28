/**
 * 检测用户名
 */
function checkUserName() {
	return WD.check_notBlank($("#userName"));
}
/**
 * 检测验证码
 */
function checkPassword() {
	return WD.check_notBlank($("#password"));
}
/**
 * 检测验证码
 */
function checkCaptcha() {
	return WD.check_notBlank($("#captcha"));
}
