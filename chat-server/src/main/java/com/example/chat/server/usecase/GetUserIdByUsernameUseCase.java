package com.example.chat.server.usecase;

import com.example.chat.server.domain.Hall;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class GetUserIdByUsernameUseCase {

	private final Hall hall;

	public String execute(String username) {
		return this.hall.getUserIdWith(username);
	}
}
