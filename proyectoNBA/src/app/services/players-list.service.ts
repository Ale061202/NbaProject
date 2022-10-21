import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayersResponse,Sacramento} from '../interfaces/players.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayersListService {
  constructor(private http: HttpClient) {}

  playersList(year: number): Observable<PlayersResponse> {
    return this.http.get<PlayersResponse>(
      `${environment.appiBaseUrl}/${year}/players.json`
    );
  }
}
