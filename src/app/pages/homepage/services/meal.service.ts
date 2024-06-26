import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRecipe } from 'src/app/models/IRecipe';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { MealType } from '../../../shared/meal-type.enum';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private mealSubject: BehaviorSubject<IRecipe[]>;
  public meals$: Observable<IRecipe[]>;

  constructor(private recipesService: RecipesService) {
    this.mealSubject = new BehaviorSubject<IRecipe[]>([]);
    this.meals$ = this.mealSubject.asObservable();
  }

  public addMeal(recipeID: number): void {
    this.recipesService.getRecipeById(recipeID).subscribe((newRecipe) => {
      const meals = this.mealSubject.getValue();
      const mealIndex = this.getMealIndex(newRecipe.section);
      meals[mealIndex] = newRecipe;
      this.mealSubject.next(meals);
    });
  }

  public deleteMeal(recipeID: number): void {
    const meals = this.mealSubject.getValue();
    const newMeals = meals.filter((meal) => meal.id !== recipeID);
    this.mealSubject.next(newMeals);
  }

  private getMealIndex(mealType: MealType): number {
    switch (mealType) {
      case MealType.breakfast:
        return 0;
      case MealType.lunch:
        return 1;
      case MealType.dinner:
        return 2;
      default:
        throw new Error('Invalid meal type');
    }
  }
}
