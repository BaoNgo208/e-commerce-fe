import SockJS from "sockjs-client";
import { Client, over } from "stompjs";

let stompClient: Client | null = null;

export const connectWebSocket = (onMessageReceived: (message: any) => void) => {
  const socket = new SockJS("http://localhost:8080/ws");
  stompClient = over(socket);

  stompClient.connect({}, () => {
    console.log("WebSocket connected");
    stompClient?.subscribe("/topic/section-update", (message) => {
      onMessageReceived(JSON.parse(message.body));
    });
  });
};

export const disconnectWebSocket = () => {
  if (stompClient) {
    stompClient.disconnect(() => {
      console.log("WebSocket disconnected");
    });
  }
};
