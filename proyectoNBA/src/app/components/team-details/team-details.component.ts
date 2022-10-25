import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Distintivos } from 'src/app/interfaces/players.interface';
import { Africa } from 'src/app/interfaces/team-list.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';
import { PlayersListService } from 'src/app/services/players-list.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  equipos : Africa[] = []
  equipo : Africa = {} as Africa
  jugadores : Distintivos[] = []
  nombreApellido = ''
  year: number = 0;
  yearList: number[] = [];

  constructor(private serviceTeam: ListadoEquiposService, private router : Router, private playerService : PlayersListService) { }

  ngOnInit(): void {
    this.serviceTeam.getTeams(this.getUrlYear()).subscribe((resp)=>{
      this.equipos = resp.league.standard
      this.getSelectedTeam()
    })

    this.playerService.getPlayersList(this.getUrlYear()).subscribe((resp) => {
      this.jugadores = resp.league.standard
    })

    for(let i = 1; i < 8; i++){
      this.yearList.push(this.year - i);
    }   
  }

  getUrlYear():number{
    return Number(this.router.url.split('/')[3])
  }

  getUrlId(){
    return this.router.url.split('/')[4]
  }

  getSelectedTeam(){
    for (let i = 0; i < this.equipos.length; i++) {
      if (this.equipos[i].teamId == this.getUrlId()) {
        this.equipo = this.equipos[i]
      }
    }
  }

  cambiarLogo(all : boolean){
    if (all) {
      return true
    }
    return false
  }
}