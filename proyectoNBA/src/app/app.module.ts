import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { DetailPlayersComponent } from './components/detail-players/detail-players.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilterPipe } from './pipes/pipe.pipe';
import { OnePlayerComponent } from './components/one-player/one-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    DetailPlayersComponent,
    TeamsComponent,
    PlayersListComponent,
    TeamDetailsComponent,
    IndexPageComponent,
    PageNotFoundComponent,
    FilterPipe,
    OnePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialImportsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
