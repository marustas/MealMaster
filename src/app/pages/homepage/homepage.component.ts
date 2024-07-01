import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from 'src/app/models/IRecipe';

import { MealService } from './services/meal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  meals$: Observable<IRecipe[]>;
  mealSections = ['breakfast', 'lunch', 'dinner'];

  constructor(
    mealService: MealService,
    private router: Router
  ) {
    this.meals$ = mealService.meals$;
  }

  onAddMeal(mealSection: string): void {
    this.router.navigate([`/recipes/${mealSection}`]);
  }

  shouldDisplayButton(meals: IRecipe[], mealSection: string): boolean {
    return !meals.some((meal) => meal.section === mealSection);
  }
}
