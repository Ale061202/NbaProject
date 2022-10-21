import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './components/players-list/players-list.component';

const routes: Routes = [
  {path: 'players', component: PlayersListComponent},
  {path: '', redirectTo: '/players', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
