package com.example.chat.server.usecase.dto;

public class RoomOutput {

	private final String id;
	private final int userCount;

	public RoomOutput(String id, int userCount) {
		this.id = id;
		this.userCount = userCount;
	}

	public String getId() {
		return id;
	}

	public int getUserCount() {
		return userCount;
	}
}
