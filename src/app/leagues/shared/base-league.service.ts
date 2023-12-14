import { Injectable } from '@angular/core';
import { BASE_LEAGUES } from './mock-base-leagues';

@Injectable({
  providedIn: 'root',
})
export class BaseLeagueService {
  getLeagues() {
    return Promise.resolve(BASE_LEAGUES);
  }
}
