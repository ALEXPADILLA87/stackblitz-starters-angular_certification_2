import { LeagueResponse } from "./league-response.model";

export interface ApiFootballResponse {
  get: string;
  response: LeagueResponse[] 
}