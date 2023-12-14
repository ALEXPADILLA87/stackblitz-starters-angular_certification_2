import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueStandingsComponent } from './league-standings/league-standings.component';
import { LeagueComponent } from './league/league.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [LeagueComponent, LeagueStandingsComponent],
})
export class LeaguesModule {}
