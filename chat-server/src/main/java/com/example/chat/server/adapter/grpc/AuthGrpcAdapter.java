package com.example.chat.server.adapter.grpc;

import com.example.chat.server.adapter.repository.GrpcStreamRepository;
import com.example.chat.server.usecase.GetUserIdByUsernameUseCase;
import com.example.chat.server.usecase.LoginUseCase;
import io.grpc.stub.StreamObserver;
import lombok.RequiredArgsConstructor;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.util.StringUtils;

@RequiredArgsConstructor
@GrpcService
public class AuthGrpcAdapter extends AuthGatewayGrpc.AuthGatewayImplBase {

	private final GetUserIdByUsernameUseCase getUserIdByUsernameUseCase;
	private final LoginUseCase loginUseCase;

	private final GrpcStreamRepository grpcStreamRepository;

	@Override
	public void login(LoginRequest request, StreamObserver<LoginResponse> responseObserver) {
		String userId = getUserIdByUsernameUseCase.execute(request.getUsername());
		if (StringUtils.hasText(userId)) {
			grpcStreamRepository.disconnect(userId);
		}
		userId = loginUseCase.login(request.getUsername());
		var response = LoginResponse.newBuilder().setUserId(userId).build();
		responseObserver.onNext(response);
		responseObserver.onCompleted();
	}
}
