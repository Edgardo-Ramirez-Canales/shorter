import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  url = 'https://api-ssl.bitly.com/v4/shorten';
  /* token = 'edb92dd786a44f7c4d0d6212c08064f2d2c3510c';
 */
  constructor(private http: HttpClient) {}

  getUrlShort(nombreUrl: string): Observable<any> {
     /*   const tokenHeader = new HttpHeaders({Authorization: 'Bearer '+ this.token});
 */
    const body = {
      long_url: nombreUrl,
    };
    return this.http.post(this.url, body);
  }
}
