import { MealType } from '../shared/meal-type.enum';
import { Ingredient } from './Ingredient';

export interface IRecipe {
  id: number;
  title: string;
  section: MealType;
  image: string;
  description: string;
  cookingTime: number;
  servings: number;
  ingredients: Ingredient[];
  author?: string;
  special: boolean;
}
