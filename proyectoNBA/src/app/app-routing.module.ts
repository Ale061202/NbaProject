import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersListComponent } from './components/players-list/players-list.component';



const routes: Routes = [
  {path: 'teams', component: TeamsComponent, pathMatch: 'full'},
  {path: 'players', component: PlayersListComponent, pathMatch: 'full'}
  {path: '', redirectTo: 'teams', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
