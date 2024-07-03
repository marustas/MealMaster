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
  meals$: Observable<(IRecipe | null)[]>;
  mealSections = ['breakfast', 'lunch', 'dinner'];

  constructor(mealService: MealService) {
    this.meals$ = mealService.meals$;
  }
}
