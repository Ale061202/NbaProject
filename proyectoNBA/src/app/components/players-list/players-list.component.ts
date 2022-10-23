import { Component, OnInit } from '@angular/core';
import { Sacramento } from 'src/app/interfaces/players.interface';
import { Africa } from 'src/app/interfaces/team-list.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';
import { PlayersListService } from 'src/app/services/players-list.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  playerList: Sacramento[] = [];
  teamList: Africa[] = [];
  yearList: number[] = []
  year: number = 0;

  constructor(private playerService: PlayersListService, private teamService: ListadoEquiposService) { }

  ngOnInit(): void {

    this.year = new Date().getFullYear();

    this.playerService.playersList(this.year).subscribe(resp => {
      this.playerList = resp.league.standard;
    })

    this.teamService.getTeams(this.year).subscribe(resp => {
      this.teamList = resp.league.standard;
    })

    for(let i = 1; i < 13; i++){
      this.yearList.push(this.year - i);
    }
  }

  getPhotoUrl(player: Sacramento){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`;
  }

  changeYear(){
    this.playerService.playersList(this.year).subscribe(resp => {
      this.playerList = resp.league.standard;
    })
  }
}
