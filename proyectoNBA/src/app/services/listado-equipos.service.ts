import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamResponse } from '../interfaces/team-list.interface';

const API_BASE_URL = 'https://data.nba.net/data/10s/prod/v1'

@Injectable({
  providedIn: 'root'
})
export class ListadoEquiposService {

  constructor(private http: HttpClient) { }

  public getTeams(anho : number) : Observable <TeamResponse>{
    return this.http.get<TeamResponse>(`${API_BASE_URL}/${anho}/teams.json`)
  }
}
