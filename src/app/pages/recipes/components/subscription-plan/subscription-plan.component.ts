import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISubscription } from 'src/app/models/ISubscription';

import { Flags } from '../subscription/subscriptions';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss'],
})
export class SubscriptionPlanComponent {
  @Input() plan!: ISubscription;
  @Output() subscriptionEmit = new EventEmitter<ISubscription>();

  popular = Flags.Popular;
  best = Flags.Best;

  emitSubscriptionPlan() {
    this.subscriptionEmit.emit(this.plan);
  }
}
