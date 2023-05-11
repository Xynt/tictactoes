import {Component} from '@angular/core';
import {WebsocketService} from "../services/websocket.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {

  constructor(private ws: WebsocketService) { }

  sendMessage() {
    this.ws.sendGameUpdate("REEEE")
  }
}
