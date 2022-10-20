import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/players.interface';
import { PlayersListService } from 'src/app/services/players-list.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  playerList: Player[] = [];

  constructor(private playerService: PlayersListService) { }

  ngOnInit(): void {
  }

}
