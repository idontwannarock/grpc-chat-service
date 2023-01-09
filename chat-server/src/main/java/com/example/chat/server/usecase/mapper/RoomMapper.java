package com.example.chat.server.usecase.mapper;

import com.example.chat.server.domain.Room;
import com.example.chat.server.usecase.dto.RoomOutput;

public class RoomMapper {

	public RoomOutput map(Room room) {
		return new RoomOutput(room.getId(), room.getUserCount());
	}
}
