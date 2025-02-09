import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic Tac Toe';
  gameOutput = '';

  constructor(private gameService: GameService) {}

  startGame() {
    this.gameService.startGame().subscribe(output => {
      this.gameOutput = output;
    });
  }
}
