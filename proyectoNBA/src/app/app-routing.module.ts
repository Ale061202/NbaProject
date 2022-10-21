import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { DetailPlayersComponent } from './components/detail-players/detail-players.component';
import { PlayersListComponent } from './components/players-list/players-list.component';

const routes: Routes = [
  {path: 'players', component: PlayersListComponent, pathMatch: 'full'},
  {path: 'detail/:id', component: DetailPlayersComponent, pathMatch: 'full'},
  {path: 'teams', component: TeamsComponent  },
  {path: '', redirectTo: '/teams', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
