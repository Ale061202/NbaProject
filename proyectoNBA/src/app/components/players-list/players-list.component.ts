import { Component, OnInit } from '@angular/core';
import { Distintivos } from 'src/app/interfaces/players.interface';
import { PlayersListService } from 'src/app/services/players-list.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  playerList: Distintivos[] = [];
  yearList: number[] = []
  year: number = 0;
  _filterText: string = '';
  filteredPlayers: Distintivos[] = [];

  constructor(private playerService: PlayersListService) { }

  ngOnInit(): void {

    this.year = new Date().getFullYear();

    this.playerService.playersList(this.year).subscribe(resp => {
      this.playerList = resp.league.standard;
      this.filteredPlayers = this.playerList;
    })

    for(let i = 1; i < 8; i++){
      this.yearList.push(this.year - i);
    }
  }

  get filterText(){
    return this._filterText;
  }

  set filterText(valor: string){
    this._filterText = valor;
    this.filteredPlayers = this.filterPLayersByFirstName(valor);
  }

  filterPLayersByFirstName(filterTerm: string){
    console.log(filterTerm)
    if(this.playerList.length === 0 || this.filterText === ''){
      return this.playerList;
    } else {
      this.filteredPlayers = this.playerList.filter(player => {
        return player.country.toLowerCase().includes(filterTerm.toLowerCase());
      })
      return this.filteredPlayers;
    }
  }

  getPhotoUrl(player: Distintivos){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`;
  }

  changeYear(){
    this.playerService.playersList(this.year).subscribe(resp => {
      this.playerList = resp.league.standard;
    })
  }
}
