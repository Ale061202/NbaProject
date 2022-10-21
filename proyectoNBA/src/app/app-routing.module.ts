import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  {path: 'teams', component: TeamsComponent  },
  {path: 'team/details/:year/:id', component: TeamDetailsComponent},
  {path: '', redirectTo: '/teams', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
