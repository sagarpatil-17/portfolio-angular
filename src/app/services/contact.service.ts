import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // contact email
  sendEmail(data: any): Observable<any> {
    const url = `${API_BASE_URL}/api/portfolio/contact`
    return this.http.post(url, data)
  }
}
