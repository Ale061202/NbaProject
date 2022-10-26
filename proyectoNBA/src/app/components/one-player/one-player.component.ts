import { Component, Input, OnInit } from '@angular/core';
import { Distintivos } from 'src/app/interfaces/players.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';
import { PlayersListService } from 'src/app/services/players-list.service';

@Component({
  selector: 'app-one-player',
  templateUrl: './one-player.component.html',
  styleUrls: ['./one-player.component.css']
})
export class OnePlayerComponent implements OnInit {

  @Input('player.firstName') playerFirstName: string = '';
  @Input('player.lastName') playerLastName: string = '';
  @Input('player.country') playerCountry: string = '';
  @Input('player.personId') playerPersonId: string = '';
  @Input('player.teamId') playerTeamId: string = '';
  @Input('year') year: number = 0;

  constructor(private playerService: PlayersListService) { }

  ngOnInit(): void {

    this.year = new Date().getFullYear();

  }

  getPhotoUrl(){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${this.playerPersonId}.png`;
  }

}
