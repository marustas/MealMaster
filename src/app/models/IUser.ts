import { ISubscription } from './ISubscription';

export interface IUser {
  id: number;
  email: string;
  password: string;
  username: string;
  calorieGoal: number;
  subscription?: ISubscription;
  role: string;
}
