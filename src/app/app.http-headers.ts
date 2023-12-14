import { HttpHeaders } from '@angular/common/http';

export const HTTP_HEADER_API_FOOTBALL: HttpHeaders = new HttpHeaders()
  .set('x-rapidapi-key', '8f5cf0a314b53af661f463da4cda60b3')
  .set('x-rapidapi-host', 'v3.football.api-sports.io');
