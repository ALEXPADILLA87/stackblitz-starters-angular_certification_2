import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { APP_HTTP_OPTIONS_API_FOOTBALL } from './../../app.http-options';
import { ApiFootballResponse } from './api-football-response.model';
import { LeagueResponse } from './league-response.model';
import { BASE_LEAGUES } from './mock-base-leagues';
@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  apiFootballUrl: string =
    'https://v3.football.api-sports.io/leagues?current=true';
  constructor(private readonly http: HttpClient) {}
  private leagueResponse: LeagueResponse[] = [];
  getLeagues(): Observable<LeagueResponse[]> {
    if (this.leagueResponse && this.leagueResponse.length) {
      console.log('cache LeagueService.getLeagues');
      return of(this.leagueResponse);
    }
    return this.http
      .get<ApiFootballResponse>(
        this.apiFootballUrl,
        APP_HTTP_OPTIONS_API_FOOTBALL
      )
      .pipe(
        map((result: ApiFootballResponse) =>
          result.response.filter((x) =>
            BASE_LEAGUES.find(
              (y) => y.country === x.country.name && y.name === x.league.name
            )
          )
        ),
        tap((result: LeagueResponse[]) => (this.leagueResponse = result)),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          throw error;
        })
      );
  }
}
