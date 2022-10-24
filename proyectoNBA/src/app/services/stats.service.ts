import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StatsResponse } from '../interfaces/stats.interface';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http : HttpClient) { }

  public getClasificacion():Observable<StatsResponse>{
    return this.http.get<StatsResponse>(`${environment.apiBaseUrl}/20190312/standings_all.json`)
  }
}
