import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRecipe } from 'src/app/models/IRecipe';
import { HttpService } from 'src/app/shared/services/http.service';
import { RecipesService } from 'src/app/shared/services/recipes.service';

import { MealType } from '../../../shared/meal-type.enum';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private mealSubject: BehaviorSubject<(IRecipe | null)[]>;
  public meals$: Observable<(IRecipe | null)[]>;

  constructor(
    private recipesService: RecipesService,
    private httpService: HttpService
  ) {
    this.mealSubject = new BehaviorSubject<(IRecipe | null)[]>([null, null, null]);
    this.meals$ = this.mealSubject.asObservable();
    this.loadMeals();
  }
  private loadMeals(): void {
    this.httpService.get<IRecipe[]>('meal').subscribe((meals) => {
      this.mealSubject.next(meals);
    });
  }

  public addMeal(recipeID: number): void {
    this.recipesService.getRecipeById(recipeID).subscribe((newRecipe) => {
      const meals = this.mealSubject.getValue();
      const mealIndex = this.getMealIndex(newRecipe.section);
      this.httpService.post(`meal`, { recipe: newRecipe, section: mealIndex }).subscribe(() => {
        meals[mealIndex] = newRecipe;
        this.mealSubject.next(meals);
      });
    });
  }

  public deleteMeal(recipeID: number): void {
    const meals = this.mealSubject.getValue();
    const recipeIndex = meals.findIndex((meal) => meal && meal.id === recipeID);

    if (recipeIndex !== -1) {
      this.httpService.delete(`meal/${recipeID}`).subscribe(() => {
        meals[recipeIndex] = null;
        this.mealSubject.next(meals);
      });
    }
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
        return -1;
    }
  }
}
