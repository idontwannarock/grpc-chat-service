package com.example.chat.server.adapter.grpc;

import com.example.chat.server.adapter.grpc.mapper.GrpcRoomMapper;
import com.example.chat.server.usecase.GetRoomListUseCase;
import com.example.chat.server.usecase.dto.RoomOutput;
import io.grpc.stub.StreamObserver;
import lombok.RequiredArgsConstructor;
import net.devh.boot.grpc.server.service.GrpcService;

import java.util.Collection;

@RequiredArgsConstructor
@GrpcService
public class RoomGrpcAdapter extends RoomGatewayGrpc.RoomGatewayImplBase {

	private final GetRoomListUseCase getRoomListUseCase;
	private final GrpcRoomMapper grpcRoomMapper;

	@Override
	public void list(ListRoomRequest request, StreamObserver<ListRoomResponse> responseObserver) {
		Collection<RoomOutput> rooms = getRoomListUseCase.execute();
		ListRoomResponse response = ListRoomResponse.newBuilder().addAllRooms(grpcRoomMapper.map(rooms)).build();
		responseObserver.onNext(response);
		responseObserver.onCompleted();
	}
}
