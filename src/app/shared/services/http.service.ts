import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    console.log(`${this.baseUrl}/${endpoint}`);
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }
}
