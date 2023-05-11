import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GameFieldComponent} from './game-field/game-field.component';
import {ChatComponent} from './chat/chat.component';
import {FormsModule} from "@angular/forms";
import {WebsocketService} from "./services/websocket.service";

@NgModule({
  declarations: [
    AppComponent,
    GameFieldComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
