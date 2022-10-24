import { Component, OnInit } from '@angular/core';
import { Distintivo } from 'src/app/interfaces/players.interface';
import { Africa } from 'src/app/interfaces/team-list.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';
import { PlayersListService } from 'src/app/services/players-list.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  playerList: Distintivo[] = [];
  filterCountryList: Distintivo[] = [];
  filterNameList: Distintivo[] = [];
  filterPlayerList: Distintivo[] = [];
  teamList: Africa[] = [];
  yearList: number[] = []
  year: number = 0;
  nombreApellido = ''

  constructor(private playerService: PlayersListService, private teamService: ListadoEquiposService) { }

  ngOnInit(): void {

    this.year = new Date().getFullYear();

    this.playerService.playersList(this.year).subscribe(resp => {
      this.playerList = resp.league.standard;
      this.filterCountryList = this.playerList;
      this.filterNameList = this.playerList;
      this.filterPlayerList = this.playerList;
    })

    this.teamService.getTeams(this.year).subscribe(resp => {
      this.teamList = resp.league.standard;
    })

    for(let i = 1; i < 8; i++){
      this.yearList.push(this.year - i);
    }
  }

  getPhotoUrl(player: Distintivo){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`;
  }

  changeYear(){
    this.playerService.playersList(this.year).subscribe(resp => {
      this.playerList = resp.league.standard;
    })
  }

  findCountry(){
    let lista: Distintivo[] = [];
    for(let player of this.playerList){
      for(let country of this.filterCountryList){
        if(player.personId == country.personId){
          lista.push(player);
        }
      }
    }
    if(lista.length == 0){
      this.filterPlayerList = this.playerList;
    }else{
      this.filterPlayerList = lista;
    }
  }

  findName(){
    let lista2: Distintivo[] = [];
    for(let player2 of this.playerList){
      for(let playerName of this.filterNameList){
        if(player2.personId == playerName.personId){
          lista2.push(player2);
        }
      }
    }
    if(lista2.length == 0){
      this.filterNameList = this.playerList;
    }else{
      this.filterNameList = lista2;
    }
  }
}
