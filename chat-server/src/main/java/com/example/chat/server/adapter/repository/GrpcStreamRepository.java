package com.example.chat.server.adapter.repository;

import io.grpc.stub.StreamObserver;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class GrpcStreamRepository {

	/**
	 * UserId as key, gRPC stream as value
	 */
	private final Map<String, StreamObserver<?>> connections;

	public GrpcStreamRepository() {
		connections = new ConcurrentHashMap<>();
	}

	public void disconnect(String userId) {
		StreamObserver<?> streamRemoved = connections.remove(userId);
		if (streamRemoved != null) {
			streamRemoved.onCompleted();
		}
	}
}
