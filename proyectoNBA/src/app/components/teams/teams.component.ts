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
  equiposMarcador : Africa[] = []

  constructor(private teamService: ListadoEquiposService) { }

  ngOnInit(): void {
    this.teamService.getPeople(2022).subscribe((resp) => {
      this.equiposLiga = resp.league.standard
    
      for (let i = 0; i < 9; i++) {
        let rd = Math.trunc(Math.random() * (this.equiposLiga.length - 1) + 1)
        if (i==0) {
          this.equiposMarcador[i] = resp.league.standard[rd]
        }else{
          for (let j = 0; j < this.equiposMarcador.length; j++) {
            if (resp.league.standard[rd].teamId == this.equiposMarcador[j].teamId) {
            }else{
              this.equiposMarcador[i] = resp.league.standard[rd]
            }
          }
        }
      }
    })
  }
}
