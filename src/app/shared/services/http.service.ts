import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private loader: LoaderService
  ) {}

  get<T>(url: string, params?: any): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => (httpParams = httpParams.set(key, params[key])));
    }
    return this.http.get<T>(`${this.baseUrl}/${url}`, { params: httpParams }).pipe();
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
  }
}
