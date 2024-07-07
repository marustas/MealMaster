import { Component } from '@angular/core';
import { ISubscription } from 'src/app/models/ISubscription';
import { subscriptions } from './subscriptions';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent {
  subscriptionPlans: ISubscription[] = subscriptions;
}
