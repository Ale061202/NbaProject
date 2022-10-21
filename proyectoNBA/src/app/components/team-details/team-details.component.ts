import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Africa } from 'src/app/interfaces/team-list.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  equipos : Africa[] = []
  equipo : Africa = {} as Africa

  constructor(private serviceTeam: ListadoEquiposService, private router : Router) { }

  ngOnInit(): void {
    this.serviceTeam.getTeams(this.getUrlYear()).subscribe((resp)=>{
      this.equipos = resp.league.standard
      this.getSelectedTeam()
    })
    
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
}
