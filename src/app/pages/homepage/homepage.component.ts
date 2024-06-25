import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from 'src/app/models/IRecipe';
import { MealService } from './services/meal.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  meals$: Observable<IRecipe[]>;
  i: number = 1;
  constructor(private mealService: MealService) {
    this.meals$ = mealService.meals$;
  }

  getRemainingMealSlots(meals: IRecipe[]): number[] {
    return Array(3 - meals.length).fill(0);
  }

  // For testing purposes
  onAddMeal(): void {
    this.mealService.addMeal(this.i);
    this.i++;
  }
}
