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

  constructor(private playerService: PlayersListService) { }

  ngOnInit(): void {
    this.playerService.playersList(2022).subscribe(resp => {
      this.playerList = resp.league.standard;
    })
  }

  getPhotoUrl(player: Sacramento){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`
  }

  getDefaultImage(){
    return `https://www.designbust.com/download/1053/png/nba_logos_png_transparent256.png`
  }

  

}
