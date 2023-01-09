package com.example.chat.server.usecase;

import com.example.chat.server.domain.Hall;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class LoginUseCase {

	private final Hall hall;

	public String login(String username) {
		return this.hall.login(username);
	}
}
