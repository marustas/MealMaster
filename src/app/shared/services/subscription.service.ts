import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ISubscription } from 'src/app/models/ISubscription';
import { SUBSCRIPTIONS } from '../../pages/recipes/components/subscription/subscriptions';

import { HttpService } from './http.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private subcriptionSubject: BehaviorSubject<ISubscription | null>;
  public subscription$: Observable<ISubscription | null>;
  public availableSubscriptions: ISubscription[] = SUBSCRIPTIONS;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private userService: UserService
  ) {
    this.subcriptionSubject = new BehaviorSubject<ISubscription | null>(null);
    this.subscription$ = this.subcriptionSubject.asObservable();
    this.getCurrentSubscription();
  }

  getCurrentSubscription(): void {
    this.userService.getUser().subscribe((user) => {
      this.subcriptionSubject.next(user?.subscription || null);
    });
  }

  subscribeUser(newSubscription: ISubscription): void {
    this.httpService
      .put<any>('subscribe', { subscription: newSubscription })
      .pipe(
        tap(() => {
          this.subcriptionSubject.next(newSubscription);
          this.router.navigate(['/home']);
        })
      )
      .subscribe();
  }
}
