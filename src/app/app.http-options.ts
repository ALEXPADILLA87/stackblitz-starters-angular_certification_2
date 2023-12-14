import { HttpHeaders } from '@angular/common/http';
import { HTTP_HEADER_API_FOOTBALL } from './app.http-headers';

export interface AppHttpOptions {
  headers: HttpHeaders;
}
export const APP_HTTP_OPTIONS_API_FOOTBALL: AppHttpOptions = {
  headers: HTTP_HEADER_API_FOOTBALL,
};
