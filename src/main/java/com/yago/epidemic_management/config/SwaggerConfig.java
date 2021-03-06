package com.yago.epidemic_management.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

/**
 * @Author: Yago
 * @Date: 2022/3/22 21:16
 * Description:
 **/
@Configuration
public class SwaggerConfig {

    //访问http://localhost:8081/swagger-ui.html可以看到API文档
    @Bean
    public Docket api() {
        //固定格式
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("疫情管理系统")
                .description("")
                .termsOfServiceUrl("")
                .build();
    }
}

