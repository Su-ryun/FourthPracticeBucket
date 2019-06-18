package com.packt.springboot.blogmania;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

/*
	When people say Spring does magic, they often mean this mechanism.
	By default, Spring Boot scans the classpath based on the package the application class is in, or to be exact,
	the class that is annotated by @SpringBootApplication.
 */

@SpringBootApplication
public class BlogmaniaApplication {

	public static void main(String[] args) {
		// SpringApplication.run() initializes the application.
		ConfigurableApplicationContext context = SpringApplication.
				run(BlogmaniaApplication.class, args);
		System.out.println("Starting the iterations through the list of bean names.");
		for (String s : context.getBeanDefinitionNames()) {
			System.out.println(s);
		}
	}

}
