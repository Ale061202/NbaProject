import { Component, OnInit } from '@angular/core';
import { Africa } from 'src/app/interfaces/team-list.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  equiposLiga : Africa[] = []

  constructor(private teamService: ListadoEquiposService) { }

  ngOnInit(): void {
  }

  getTeams(){
    this.teamService.getPeople(2022).subscribe((resp) => {
      this.equiposLiga = resp.league.standard
    })
  }

}
