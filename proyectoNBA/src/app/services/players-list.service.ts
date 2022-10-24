import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Distintivos } from '../interfaces/players.interface';
import { PlayersResponse } from '../interfaces/players.interface';
import { ProfileResponse } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayersListService {
  constructor(private http: HttpClient) {}


  getPlayersList(anho:number):Observable<PlayersResponse>{
    return this.http.get<PlayersResponse>(`${environment.apiBaseUrl}/${anho}/players.json`)
  }

  playersList(year: number): Observable<PlayersResponse> {
    
    return this.http.get<PlayersResponse>(
      `${environment.apiBaseUrl}/${year}/players.json`
    );
  }

  profileList(year: number, personId: string): Observable<ProfileResponse>{
    return this.http.get<ProfileResponse>(`${environment.apiBaseUrl}/${year}/players/${personId}_profile.json`)
  }
}
