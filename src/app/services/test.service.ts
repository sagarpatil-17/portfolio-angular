import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api.config';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  // test api
  testApi(): Observable<any> {
    const url = `${API_BASE_URL}/api/test`
    return this.http.get(url)
  }
}
