import { Component, Input } from '@angular/core';
import { IRecipe } from 'src/app/models/IRecipe';

import { MealService } from '../../services/meal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal[meal]',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent {
  @Input() meal!: IRecipe;
  isModalVisible = false;

  constructor(
    private mealService: MealService,
    private router: Router
  ) {}

  onDeleteMeal(): void {
    this.mealService.deleteMeal(this.meal.id);
  }

  onEditMeal(): void {
    this.router.navigate(['/recipes', this.meal.section, this.meal.id]);
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  hideModal(): void {
    this.isModalVisible = false;
  }
}
