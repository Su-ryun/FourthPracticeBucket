package hello;

//Copy pasta from: https://spring.io/guides/gs/spring-boot/#scratch

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

//The below annotation includes other handy annotations.
/*
  The @SpringBootApplication annotation adds
  @Configuration, @EnableAutoConfiguration, @EnableWebMvc, and @ComponentScan
*/
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
/*
  In order to understand @Bean, there is a need to understand IoC.
  IoC is actually a process, but it's just nicer to think of it as a
  basket, where Java's software entities can come and grab whatever dependencies
  they want.
*/
    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {

            System.out.println("Let's inspect the beans provided by Spring Boot:");

            String[] beanNames = ctx.getBeanDefinitionNames();
            Arrays.sort(beanNames);
            for (String beanName : beanNames) {
                System.out.println(beanName);
            }

        };
    }

}
