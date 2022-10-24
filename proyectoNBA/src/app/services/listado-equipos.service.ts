import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamResponse } from '../interfaces/team-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ListadoEquiposService {

  constructor(private http: HttpClient) { }

  public getTeams(anho : number) : Observable <TeamResponse>{
    return this.http.get<TeamResponse>(`${environment.apiBaseUrl}/${anho}/teams.json`)
  }
}
