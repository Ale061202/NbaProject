import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Africa } from 'src/app/interfaces/team-list.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';

@Component({
  selector: 'app-one-team',
  templateUrl: './one-team.component.html',
  styleUrls: ['./one-team.component.css']
})
export class OneTeamComponent implements OnInit {

  @Input() team : Africa = {} as Africa;
  @Input() year : number = 0;

  constructor(private r : Router) { }

  ngOnInit(): void {
  }

}