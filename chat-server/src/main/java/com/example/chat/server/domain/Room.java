package com.example.chat.server.domain;

import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

public class Room {

	private final String id;
	private Set<User> users;

	public Room(String id) {
		this.id = id;
		this.users = new CopyOnWriteArraySet<>();
	}

	public String getId() {
		return id;
	}

	public int getUserCount() {
		return this.users.size();
	}
}
