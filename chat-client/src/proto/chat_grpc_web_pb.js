/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.2
// source: chat.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.AuthGatewayClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.AuthGatewayPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.LoginRequest,
 *   !proto.chat.LoginResponse>}
 */
const methodDescriptor_AuthGateway_Login = new grpc.web.MethodDescriptor(
  '/chat.AuthGateway/Login',
  grpc.web.MethodType.UNARY,
  proto.chat.LoginRequest,
  proto.chat.LoginResponse,
  /**
   * @param {!proto.chat.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.chat.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.AuthGatewayClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.AuthGateway/Login',
      request,
      metadata || {},
      methodDescriptor_AuthGateway_Login,
      callback);
};


/**
 * @param {!proto.chat.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.chat.AuthGatewayPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.AuthGateway/Login',
      request,
      metadata || {},
      methodDescriptor_AuthGateway_Login);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.RoomGatewayClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.RoomGatewayPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ListRoomRequest,
 *   !proto.chat.ListRoomResponse>}
 */
const methodDescriptor_RoomGateway_List = new grpc.web.MethodDescriptor(
  '/chat.RoomGateway/List',
  grpc.web.MethodType.UNARY,
  proto.chat.ListRoomRequest,
  proto.chat.ListRoomResponse,
  /**
   * @param {!proto.chat.ListRoomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ListRoomResponse.deserializeBinary
);


/**
 * @param {!proto.chat.ListRoomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.ListRoomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ListRoomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.RoomGatewayClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.RoomGateway/List',
      request,
      metadata || {},
      methodDescriptor_RoomGateway_List,
      callback);
};


/**
 * @param {!proto.chat.ListRoomRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.ListRoomResponse>}
 *     Promise that resolves to the response
 */
proto.chat.RoomGatewayPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.RoomGateway/List',
      request,
      metadata || {},
      methodDescriptor_RoomGateway_List);
};


module.exports = proto.chat;

