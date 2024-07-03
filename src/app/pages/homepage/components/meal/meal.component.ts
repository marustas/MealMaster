import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IRecipe } from 'src/app/models/IRecipe';

import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal[meal]',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent {
  @Input() meal!: IRecipe | null;
  @Input() mealSection!: string;
  isModalVisible = false;

  constructor(
    private mealService: MealService,
    private router: Router
  ) {}

  onAddMeal(): void {
    this.router.navigate(['/recipes', this.mealSection, 1]);
  }

  onDeleteMeal(): void {
    this.mealService.deleteMeal(this.meal?.id!);
  }

  onEditMeal(): void {
    this.router.navigate(['/recipes', this.meal?.section, this.meal?.id]);
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  hideModal(): void {
    this.isModalVisible = false;
  }
}
