import { Component, Input } from '@angular/core';
import { ISubscription } from 'src/app/models/ISubscription';
import { Flags } from '../subscription/subscriptions';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss'],
})
export class SubscriptionPlanComponent {
  @Input() plan!: ISubscription;
  popular = Flags.Popular;
  best = Flags.Best;
}
