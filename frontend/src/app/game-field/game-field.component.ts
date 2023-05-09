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

  constructor() { }

  ngOnInit(): void {
  }

}
