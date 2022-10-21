import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailPlayersComponent } from './components/detail-players/detail-players.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    DetailPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
