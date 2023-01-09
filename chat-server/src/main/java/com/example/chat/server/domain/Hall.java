package com.example.chat.server.domain;

import org.springframework.util.StringUtils;

import java.util.Collection;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

public class Hall {

	/**
	 * UserId as key, username as value
	 */
	private final Map<String, String> users;
	/**
	 * RoomId as key, Room as value
	 */
	private final Map<String, Room> rooms;

	public Hall() {
		this.users = new ConcurrentHashMap<>();
		this.rooms = new ConcurrentHashMap<>();
		this.rooms.put("1", new Room("1"));
	}

	public String getUserIdWith(String username) {
		return this.users.entrySet().stream()
				.filter(entry -> entry.getValue().equals(username))
				.findFirst()
				.map(Map.Entry::getKey)
				.orElse("");
	}

	public String login(String username) {
		String userId = getUserIdWith(username);
		if (StringUtils.hasText(userId)) {
			return userId;
		}
		do {
			userId = UUID.randomUUID().toString();
		} while (this.users.containsKey(userId));
		this.users.put(userId, username);
		return userId;
	}

	public Collection<Room> getAllRooms() {
		return this.rooms.values();
	}
}
