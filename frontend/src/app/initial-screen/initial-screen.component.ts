import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-initial-screen',
  templateUrl: './initial-screen.component.html',
  styleUrls: ['./initial-screen.component.css']
})
export class InitialScreenComponent implements OnInit {
  @Output() createdEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  createLobby() {
    this.createdEmitter.next("AAAAAA");
  }
}
