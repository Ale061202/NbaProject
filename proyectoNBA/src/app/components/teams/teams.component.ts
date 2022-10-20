import { Component, OnInit } from '@angular/core';
import { EMPTY, empty } from 'rxjs';
import { Africa, ConfName } from 'src/app/interfaces/team-list.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  equiposLiga: Africa[] = []
  equiposMarcador: Africa[] = []
  randoms: number[] = []

  constructor(private teamService: ListadoEquiposService) { }

  ngOnInit(): void {
    this.teamService.getTeams(2022).subscribe((resp) => {
      this.equiposLiga = resp.league.standard

      this.equiposMarcador.length = 9

      for (let i = 0; i < 9; i++) {
        let rd = Math.trunc(Math.random()*(this.equiposLiga.length - 1) + 1)
        if (!this.randoms.includes(rd)) {
          this.randoms[i]=rd
        }else{
          i-=1
        }
      }

      console.log(this.randoms)
      for (let i = 0; i < this.randoms.length; i++) {
        this.equiposMarcador[i]=this.equiposLiga[this.randoms[i]]
      }
    })
  }

  getConference(equipo : Africa){
    if (equipo.confName == 'East') {
      return true
    }
    return false
  }
}