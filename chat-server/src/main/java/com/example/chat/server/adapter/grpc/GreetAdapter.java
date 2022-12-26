package com.example.chat.server.adapter.grpc;

import com.example.chat.server.proto.GreetRequest;
import com.example.chat.server.proto.GreetResponse;
import com.example.chat.server.proto.GreetServiceGrpc;
import com.example.chat.server.proto.Greeting;
import io.grpc.stub.StreamObserver;
import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.server.service.GrpcService;

@Slf4j
@GrpcService
public class GreetAdapter extends GreetServiceGrpc.GreetServiceImplBase {

	@Override
	public void greet(GreetRequest request, StreamObserver<GreetResponse> responseObserver) {
		Greeting greeting = request.getGreeting();
		String result = "Hello " + greeting.getFirstName() + " " + greeting.getLastName();
		log.info("{}! You are in the greet method", result);

		GreetResponse response = GreetResponse.newBuilder().setResult(result).build();
		responseObserver.onNext(response);
		responseObserver.onCompleted();
	}
}
