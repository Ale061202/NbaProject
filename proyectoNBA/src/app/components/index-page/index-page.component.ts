import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/stats.interface';
import { Africa } from 'src/app/interfaces/team-list.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css'],
})
export class IndexPageComponent implements OnInit {
  clasificacion: Team[] = [];
  equipos: Africa[] = [];
  equiposGuardados: Africa[] = [];
  equipo : Africa = {} as Africa

  constructor(
    private statsService: StatsService,
    private teamService: ListadoEquiposService
  ) {}

  ngOnInit(): void {
    this.statsService.getClasificacion().subscribe((resp) => {
      this.clasificacion = resp.league.standard.teams;
      this.getEquiposGuardados();
    });
  }

  getEquiposGuardados() {
    this.teamService.getTeams(2019).subscribe((resp) => {
      this.equipos = resp.league.standard;

      for (let it of this.clasificacion) {
        for (let it2 of this.equipos) {
          if (it.teamId == it2.teamId) {
            this.equiposGuardados.push(it2);
          }
        }
      }
    });
  }

  nombreEquipos(eq : Team){
    for (let i = 0; i < this.equipos.length; i++) {
      if (this.equipos[i].teamId == eq.teamId) {
        this.equipo = this.equipos[i]
      }
    }
    return this.equipo
  }
}