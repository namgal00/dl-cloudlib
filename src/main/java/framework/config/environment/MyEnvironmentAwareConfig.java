package  framework.config.environment;

import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

/**
 * 
 * @ClassName: MyEnvironmentAware
 * @Description: 获取系统的一些配置
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年6月3日 下午2:10:26
 */
@Configuration
public class MyEnvironmentAwareConfig implements EnvironmentAware {

	@Override
	public void setEnvironment(Environment environment) {
		// TODO Auto-generated method stub

	}

}
