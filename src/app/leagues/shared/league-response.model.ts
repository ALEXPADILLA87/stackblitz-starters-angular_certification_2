import { Country } from './country.model';
import { League } from './league.model';
import { Season } from './season.model';

export interface LeagueResponse {
  league: League;
  country: Country;
  seasons: Season[];
}
