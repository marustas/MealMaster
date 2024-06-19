import { Ingredient } from './Ingredient';

export interface IRecipe {
  id: number;
  title: string;
  section: 'breakfast' | 'lunch' | 'dinner';
  image: string;
  description: string;
  cookingTime: number;
  servings: number;
  ingredients: Ingredient[];
  author?: string;
}
