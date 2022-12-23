# gRPC Chat Service

## Requirement

### 後端

功能需求

- User 可以進入特定聊天室，若該聊天室不存在，則自動創建該聊天室
- User 進入聊天室後，可以收到其他 User 在該聊天室發送的訊息
- User 可以在聊天室發送訊息，並讓該聊天室中的其他 User 收到訊息
- User 可以離開聊天室，且離開 User 與聊天室連線必須斷開
- API 需要有關閉聊天室功能；關閉後，必須將所有在該聊天室的 User 連線斷開

技術需求

- 撰寫 Protocol Buffers
- 在 Spring Boot 框架上使用 gRPC
- 前後端無法以 gRPC 直接溝通，需要使用 Envoy 作為代理來轉送前端請求給後端
- 撰寫 Envoy 設定檔
- 將 SpringBoot、Envoy 打包成 Docker Image
- 不使用外部儲存的工具 (e.g. Redis, MySQL)

### 前端

功能需求

- User 可以以輸入編號方式，進入任一個聊天室
- User 可以在聊天室中發送訊息
- User 可以在聊天室中收到其他 User 發送的訊息

技術需求

- 使用 React 作為前端框架
- 在 React 中使用 gRPC 來串接後端
- 使用 `protoc` 依據 Protocol Buffers 來產出對應的 Javascript 檔案
- 將 React 打包成 Docker Image

### 部屬

- 撰寫 `docker-compose.yml`，其中包含 Spring Boot、Envoy、React 三個服務，其各服務只有一個實例
- 網路設定必須以 docker-compose 來達成，不可寫死於專案中
- 將所有服務以 docker-compose，啟動於本機
- 可在本機進入前端頁面，並進行操作
