import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueStandingsComponent } from './leagues/league-standings/league-standings.component';
import { LeagueComponent } from './leagues/league/league.component';

const routes: Routes = [
  { path: 'leagues', component: LeagueComponent },
  { path: 'leagues/:leagueId', component: LeagueStandingsComponent },
  { path: '', redirectTo: '/leagues', pathMatch: 'full' },
  { path: '**', component: LeagueComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
