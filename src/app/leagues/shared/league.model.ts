import { BaseLeague } from './base-league.model';

export interface League extends BaseLeague {
  id: number;
  logo: string;
  flag: string;
  season: number;
}
