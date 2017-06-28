package com.yundao.cloudlib;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;

/**
 * 
 * @ClassName: Application
 * @Description: 程序入口
 * @author: wf
 * @date: 2017年6月13日 下午3:37:40
 * @version 1.0
 */
@SpringBootApplication
@EnableConfigurationProperties
@ComponentScan(basePackages = { "framework", "com.yundao.cloudlib" })
@ServletComponentScan(basePackages = { "framework","com.yundao.cloudlib" })
@MapperScan(basePackages = { "com.yundao.cloudlib.mapper" })
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
