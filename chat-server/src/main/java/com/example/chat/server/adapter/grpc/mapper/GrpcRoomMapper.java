package com.example.chat.server.adapter.grpc.mapper;

import com.example.chat.server.adapter.grpc.Room;
import com.example.chat.server.usecase.dto.RoomOutput;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class GrpcRoomMapper {

	public List<Room> map(Collection<RoomOutput> rooms) {
		return rooms.stream()
				.map(room -> Room.newBuilder().setId(room.getId()).setUserCount(room.getUserCount()).build())
				.collect(Collectors.toUnmodifiableList());
	}
}
