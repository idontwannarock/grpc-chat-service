package com.example.chat.server.usecase;

import com.example.chat.server.domain.Hall;
import com.example.chat.server.usecase.dto.RoomOutput;
import com.example.chat.server.usecase.mapper.RoomMapper;
import lombok.RequiredArgsConstructor;

import java.util.Collection;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class GetRoomListUseCase {

	private final Hall hall;
	private final RoomMapper roomMapper;

	public Collection<RoomOutput> execute() {
		return this.hall.getAllRooms().stream()
				.map(room -> roomMapper.map(room))
				.collect(Collectors.toUnmodifiableList());
	}
}
