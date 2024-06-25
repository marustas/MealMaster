import { Component, Input } from '@angular/core';
import { IRecipe } from 'src/app/models/IRecipe';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal[meal]',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent {
  @Input() meal!: IRecipe;

  constructor(private mealService: MealService) {}

  onDeleteMeal(): void {
    this.mealService.deleteMeal(this.meal.id);
  }
}
