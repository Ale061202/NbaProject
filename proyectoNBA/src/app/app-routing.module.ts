import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TeamsComponent } from './components/teams/teams.component';
import { DetailPlayersComponent } from './components/detail-players/detail-players.component';
import { PlayersListComponent } from './components/players-list/players-list.component';

const routes: Routes = [
  {path: 'players', component: PlayersListComponent},
  {path: 'detail/:id/:year', component: DetailPlayersComponent},
  {path: 'teams', component: TeamsComponent  },
  {path: 'team/details/:year/:id', component: TeamDetailsComponent},
  {path: '', redirectTo: '/teams', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
