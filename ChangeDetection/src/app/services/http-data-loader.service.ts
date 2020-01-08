import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataLoaderService {

  constructor(private http: HttpClient) { }

  public load() {
      return this.http.get('http://www.mocky.io/v2/5df3a74b3100007800b5860d');
  }
}
