import {Injectable} from "@angular/core";
// @ts-ignore
import * as Stomp from "stompjs";
// @ts-ignore
import * as SockJS from "sockjs-client";

@Injectable()
export class WebsocketService {
  webSocketEndPoint: string = 'http://localhost:8080/game-websocket';
  topic: string = "/topic/gameupdates";
  stompClient: any;

  constructor(){

  }
  _connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function () {
      _this.stompClient.subscribe(_this.topic, function (sdkEvent: string) {
        _this.onMessageReceived(sdkEvent);
      });
    }, this.errorCallBack);
  };
  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }
  // on error, schedule a reconnection attempt
  errorCallBack(error: string) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this._connect();
    }, 5000);
  }
  onMessageReceived(message: string) {
    console.log("RECIEVED SOMETHING: " + message)
  }

  sendGameUpdate(message: string) {
    this.stompClient.send(
      '/app/update',
      {},
      JSON.stringify({ 'message': message })
    );
  }
}
