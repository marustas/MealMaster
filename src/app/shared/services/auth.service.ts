import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStateSubject: BehaviorSubject<boolean>;
  public authState$: Observable<boolean>;

  constructor(private httpService: HttpService) {
    this.authStateSubject = new BehaviorSubject(this.isLoggedIn());
    this.authState$ = this.authStateSubject.asObservable();
  }

  login(email: string, password: string) {
    return this.httpService.post<any>('login', { email, password }).pipe(
      tap((response) => {
        this.setSession(response.expiresIn, response.token);
        this.authStateSubject.next(true);
      })
    );
  }

  private setSession(expiresIn: number, idToken: any) {
    const expiresAt = moment().add(expiresIn, 'seconds');

    localStorage.setItem('id_token', idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.authStateSubject.next(false);
  }

  public isLoggedIn(): boolean {
    if (!this.getExpiration()) {
      return false;
    }
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    if (!expiration) return;
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
