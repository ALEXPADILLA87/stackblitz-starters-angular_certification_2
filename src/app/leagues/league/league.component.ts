import { Component, OnInit } from '@angular/core';
import { BaseLeague } from '../shared/base-league.model';
import { BaseLeagueService } from '../shared/base-league.service';
import { LeagueResponse } from '../shared/league-response.model';
import { LeagueService } from '../shared/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css'],
})
export class LeagueComponent implements OnInit {
  baseLeagues: BaseLeague[] = [];
  leagues: LeagueResponse[] = [];
  constructor(
    private readonly baseLeagueService: BaseLeagueService,
    private readonly leagueService: LeagueService
  ) {}
  ngOnInit() {
    this.baseLeagueService.getLeagues().then((leagues) => {
      this.baseLeagues = leagues;
    });

    this.leagueService.getLeagues().subscribe((leagues) => {
      this.leagues = leagues;
      console.error(leagues);
    });
  }
}
//todo: rename to be league-component
