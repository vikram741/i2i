import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url = '/api/';
  constructor(private httpClient: HttpClient) { }

  signup(user: User): Observable<any> {
    return this.httpClient.post(this.url + 'signup', user);
  }
}
