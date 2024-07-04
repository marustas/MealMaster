import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/models/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authState$: Observable<boolean>;
  public userState$: Observable<IUser | null>;

  private userStateSubject: BehaviorSubject<IUser | null>;
  private authStateSubject: BehaviorSubject<boolean>;

  constructor() {
    this.authStateSubject = new BehaviorSubject(false);
    this.userStateSubject = new BehaviorSubject<IUser | null>(this.getUserInfo());

    this.authState$ = this.authStateSubject.asObservable();
    this.userState$ = this.userStateSubject.asObservable();
  }

  login(user: IUser): void {
    this.authStateSubject.next(true);
    this.userStateSubject.next(user);
  }

  logout(): void {
    this.authStateSubject.next(false);
    this.userStateSubject.next(null);
  }

  getUserInfo(): IUser | null {
    const dummyUser = {
      id: 0,
      email: 'email@man.com',
      password: 'password#567',
      username: 'username',
      calorieGoal: 2000,
    };

    return dummyUser;
  }
}
