import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IUser } from 'src/app/models/IUser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userStateSubject: BehaviorSubject<IUser | null>;
  userState$: Observable<IUser | null>;

  constructor(private httpService: HttpService) {
    this.userStateSubject = new BehaviorSubject<IUser | null>(null);
    this.userState$ = this.userStateSubject.asObservable();
  }

  getUser(): Observable<IUser> {
    return this.httpService.get<IUser>('user');
  }
}
