import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { HttpService } from './http.service';
import { UserService } from './user.service';
import { ProfilePictureService } from 'src/app/pages/user/services/profile-picture.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStateSubject: BehaviorSubject<boolean>;
  private roleSubject: BehaviorSubject<string>;

  public authState$: Observable<boolean>;
  public roleState$: Observable<string>;

  constructor(
    private profilePicture: ProfilePictureService,
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
        this.getRole();
        this.profilePicture.createProfilePicture(username);
        this.router.navigate(['/home']);
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.httpService.post<any>('login', { email, password }).pipe(
      tap((response) => {
        this.setSession(response.expiresIn, response.token);
        this.authStateSubject.next(true);
        this.getRole();
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
      this.roleSubject.next('guest');
      return false;
    }
    return moment().isBefore(this.getExpiration());
  }

  getRole(): void {
    this.userService.getUser().subscribe((user) => {
      if (!this.authStateSubject.getValue()) {
        this.roleSubject.next('guest');
      } else {
        this.roleSubject.next(user.role);
      }
    });
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    if (!expiration) return;
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
