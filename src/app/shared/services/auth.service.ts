import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStateSubject: BehaviorSubject<boolean>;
  private roleSubject: BehaviorSubject<string>;

  public authState$: Observable<boolean>;
  public roleState$: Observable<string>;

  constructor(
    private userService: UserService,
    private httpService: HttpService,
    private router: Router
  ) {
    this.roleSubject = new BehaviorSubject<string>('guest');
    this.authStateSubject = new BehaviorSubject(this.isLoggedIn());
    this.authState$ = this.authStateSubject.asObservable();
    this.roleState$ = this.roleSubject.asObservable();
    this.getRole();
  }

  signUp(email: string, password: string, username: string): Observable<any> {
    return this.httpService.post<any>('signup', { email, password, username }).pipe(
      tap((response) => {
        this.setSession(response.expiresIn, response.token);
        this.authStateSubject.next(true);
        this.roleSubject.next('user');
        this.router.navigate(['/home']);
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.httpService.post<any>('login', { email, password }).pipe(
      tap((response) => {
        this.setSession(response.expiresIn, response.token);
        this.authStateSubject.next(true);
        this.roleSubject.next('user');
        this.router.navigate(['/home']);
      })
    );
  }

  private setSession(expiresIn: number, idToken: any) {
    const expiresAt = moment().add(expiresIn, 'second');

    localStorage.setItem('id_token', idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.authStateSubject.next(false);
    this.roleSubject.next('guest');
    this.router.navigate(['/auth']);
  }

  public isLoggedIn(): boolean {
    if (!this.getExpiration()) {
      return false;
    }
    return moment().isBefore(this.getExpiration());
  }

  subscribe(subscription: string): Observable<any> {
    return this.httpService
      .put<any>('subscribe', { subscription })
      .pipe(tap(() => this.roleSubject.next('subscribed')));
  }

  getRole(): void {
    this.userService.getUser().subscribe((user) => {
      this.roleSubject.next(user.role);
    });
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    if (!expiration) return;
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
