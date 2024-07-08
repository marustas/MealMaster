import { ISubscription } from '../../../../models/ISubscription';

export const SUBSCRIPTIONS: ISubscription[] = [
  {
    id: 0,
    duration: '1 Week',
    price: 15,
    flag: Flags.Popular,
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
    flag: Flags.Best,
  },
];

export const enum Flags {
  Popular = 'popular',
  Best = 'best value',
}
