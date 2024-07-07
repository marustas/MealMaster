import { ISubscription } from 'src/app/models/ISubscription';

export const subscriptions: ISubscription[] = [
  {
    id: 0,
    duration: '1 Week',
    price: 15,
    flag: 'popular',
  },
  {
    id: 1,
    duration: '1 Month',
    price: 10,
  },
  {
    id: 2,
    duration: '3 Months',
    price: 5,
    flag: 'best value',
  },
];
