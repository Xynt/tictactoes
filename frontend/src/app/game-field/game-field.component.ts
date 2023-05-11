import {Component, OnInit} from '@angular/core';
import {Player} from "./player";
import {WinType} from "./win-type";
import {WebsocketService} from "../services/websocket.service";

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {

  public fields: Player[] = [
    Player.NONE,
    Player.NONE,
    Player.NONE,
    Player.NONE,
    Player.NONE,
    Player.NONE,
    Player.NONE,
    Player.NONE,
    Player.NONE,
  ]

  public currentTurn: Player = Player.ONE;
  public winner: Player = Player.NONE;
  public winType: WinType = WinType.NONE;

  public Player = Player;
  constructor(private ws: WebsocketService) { }

  ngOnInit(): void {
    this.ws._connect();
  }

  clickedBox(i: number): void {
    if (this.fields[i] === Player.NONE && this.winner === Player.NONE) {
      this.fields[i] = this.currentTurn;
      let hasWon = WinType.hasWon(this.fields);
      if (hasWon.type === WinType.NONE) {
        this.toggleTurn();
      } else {
        this.winner = hasWon.player;
        this.winType = hasWon.type;
      }
    }
  }

  isX(i: number): boolean {
    return this.fields[i] === Player.ONE;
  }

  isO(i: number): boolean {
    return this.fields[i] === Player.TWO;
  }

  isEmpty(i: number) {
    return this.fields[i] === Player.NONE;
  }

  private toggleTurn(): void {
    if (this.currentTurn === Player.ONE) {
      this.currentTurn = Player.TWO;
    } else {
      this.currentTurn = Player.ONE;
    }
  }
}
