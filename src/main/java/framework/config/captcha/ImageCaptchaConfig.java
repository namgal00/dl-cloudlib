package  framework.config.captcha;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.octo.captcha.service.image.DefaultManageableImageCaptchaService;

/**
 * 
 * @ClassName: ImageCaptchaConfig
 * @Description: 验证码配置
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月3日 下午4:03:58
 */
@Configuration
public class ImageCaptchaConfig {

	/**
	 * 
	 * @Title: getImageCaptchaService
	 * @Description: 获取验证码的service
	 * @return
	 * @return: DefaultManageableImageCaptchaService
	 */
	@Bean(name = "imageCaptchaService")
	public DefaultManageableImageCaptchaService getImageCaptchaService() {
		DefaultManageableImageCaptchaService dmics = new DefaultManageableImageCaptchaService();
		dmics.setCaptchaEngine(new JCaptchaEngine());
		dmics.setMinGuarantedStorageDelayInSeconds(3600);
		return dmics;
	}
}
