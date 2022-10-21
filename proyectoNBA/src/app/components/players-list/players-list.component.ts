import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sacramento } from 'src/app/interfaces/players.interface';
import { PlayersListService } from 'src/app/services/players-list.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  playerList: Sacramento[] = [];

  constructor(private route: ActivatedRoute,private playerService: PlayersListService) { }

  ngOnInit(): void {
  }

  getPlayers(year: number){
    this.playerService.playersList(year).subscribe(resp => {
      this.playerList = resp.league.standard;
    })
  }

  getPhotoUrl(player: Sacramento){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`
  }

  

}
