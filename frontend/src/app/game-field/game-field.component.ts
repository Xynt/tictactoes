import {Component, OnInit} from '@angular/core';
import {Player} from "./player";

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
  constructor() { }

  ngOnInit(): void {
  }

  clickedBox(i: number): void {
    if (this.fields[i] === Player.NONE) {
      this.fields[i] = this.currentTurn;
      this.toggleTurn();
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
