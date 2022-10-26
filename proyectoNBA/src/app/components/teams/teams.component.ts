import { Component, OnInit } from '@angular/core';
import { EMPTY, empty } from 'rxjs';
import { Africa, ConfName, DivName } from 'src/app/interfaces/team-list.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  equiposLiga: Africa[] = [];
  equiposMarcador: Africa[] = [];
  randoms: number[] = []
  anhosVisualizar: number[] = [2022, 2020, 2019, 2018, 2017, 2016]
  empty = DivName.Empty;
  anho !: number

  constructor(private teamService: ListadoEquiposService) { }

  ngOnInit(): void {
    this.getTeamsYear(2022)
    this.anho.valueOf()

    console.log(this.anho)
  }

  getTeamsYear(year : number){
    this.teamService.getTeams(year).subscribe((resp) => {
      this.equiposLiga = resp.league.standard;
      //this.equiposLiga = resp.league.standard.filter(e => e.divName == DivName.Empty);

      this.equiposMarcador.length = 9

      for (let i = 0; i < 9; i++) {
        let rd = Math.trunc(Math.random()*(this.equiposLiga.length - 1) + 1)
        if (!this.randoms.includes(rd)) {
          this.randoms[i]=rd
        }else{
          i-=1;
        }
      }

      for (let i = 0; i < this.randoms.length; i++) {
        this.equiposMarcador[i]=this.equiposLiga[this.randoms[i]]
      }
    })

    this.anho=year
  }

  getConference(equipo : Africa){
    if (equipo.confName == 'East') {
      return true
    }
    return false
  }
}