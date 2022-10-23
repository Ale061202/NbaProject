import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sacramento } from 'src/app/interfaces/players.interface';
import { CareerSummary } from 'src/app/interfaces/profile.interface';
import { Africa } from 'src/app/interfaces/team-list.interface';
import { ListadoEquiposService } from 'src/app/services/listado-equipos.service';
import { PlayersListService } from 'src/app/services/players-list.service';

@Component({
  selector: 'app-detail-players',
  templateUrl: './detail-players.component.html',
  styleUrls: ['./detail-players.component.css']
})
export class DetailPlayersComponent implements OnInit {

  id: string = '';
  player: Sacramento = {} as Sacramento;
  summary: CareerSummary = {} as CareerSummary;
  playerList: Sacramento[] = [];
  teamList: Africa[] = [];
  teamPlayed: string[] = [];
  teamDraft: string = '';
  yearList: number[] = [];
  year: number = 0;

  constructor(private route: ActivatedRoute,private playerService: PlayersListService, private teamService: ListadoEquiposService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(resp => {
      this.id = resp['id']
      this.year = resp['year']
    });

    this.playerService.playersList(this.year).subscribe(resp => {
      for (let player of resp.league.standard) {
        if (player.personId == this.id) {
          this.player = player;
        }
      }
    });

    this.playerService.profileList(this.year,this.id).subscribe(resp => {
      this.summary = resp.league.standard.stats.careerSummary;
    });

    this.teamService.getTeams(this.year).subscribe(resp => {
      this.teamList = resp.league.standard;
    })
  }

  fullNameTeam(teamId: string){
    for (let team of this.teamList) {
      if(team.teamId == teamId){
        return team.fullName;
      }
    }
    return undefined;
  }

  position(pos : string){
    if (pos == 'C'){
    return 'Pivot'
    } else if (pos == 'C-F'){
      return 'Ala-Pivot'
    } else if (pos == 'G'){
      return 'Escolta'
    } else if (pos == 'F'){
      return 'Alero'
    } else {
      return 'Base'
    }
  } 

  getPhotoUrl(player: Sacramento){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`;
  }
}
