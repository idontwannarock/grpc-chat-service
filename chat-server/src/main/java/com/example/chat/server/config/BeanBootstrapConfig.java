package com.example.chat.server.config;

import com.example.chat.server.domain.Hall;
import com.example.chat.server.usecase.GetUserIdByUsernameUseCase;
import com.example.chat.server.usecase.LoginUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanBootstrapConfig {

	@Bean
	Hall hall() {
		return new Hall();
	}

	@Bean
	GetUserIdByUsernameUseCase getUserIdByUsernameUseCase(Hall hall) {
		return new GetUserIdByUsernameUseCase(hall);
	}

	@Bean
	LoginUseCase loginUseCase(Hall hall) {
		return new LoginUseCase(hall);
	}
}
