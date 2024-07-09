import { Component } from '@angular/core';
import { ISubscription } from 'src/app/models/ISubscription';
import { SubscriptionService } from '../../../../shared/services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent {
  chosenSubscription!: ISubscription;

  subscriptionPlans: ISubscription[] = this.subscriptonService.availableSubscriptions;
  constructor(private subscriptonService: SubscriptionService) {}

  setChosenSubscription(chosenSubscription: ISubscription): void {
    this.chosenSubscription = chosenSubscription;
  }

  onSubscribe() {
    this.subscriptonService.subscribeUser(this.chosenSubscription);
  }
}
