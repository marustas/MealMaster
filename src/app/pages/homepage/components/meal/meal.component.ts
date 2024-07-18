import { Component, input, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Ingredient } from '../../../../models/Ingredient';
import { IRecipe } from '../../../../models/IRecipe';
import { IngredientService } from '../../../../shared/services/ingredient.service';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal[meal]',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  meal = input<IRecipe | null>();
  mealSection = input<string>();
  isModalVisible = false;
  missingIngredients$!: Observable<Ingredient[]>;

  constructor(
    private mealService: MealService,
    private ingredientService: IngredientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.meal()?.ingredients) {
      this.missingIngredients$ = this.ingredientService.showMissing(this.meal()?.ingredients!);
    }
  }

  onAddMeal(): void {
    this.router.navigate(['/recipes', this.mealSection(), 1]);
  }

  onDeleteMeal(): void {
    this.mealService.deleteMeal(this.meal()?.id!);
  }

  onEditMeal(): void {
    this.router.navigate(['/recipes', this.meal()?.section, this.meal()?.id]);
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  hideModal(): void {
    this.isModalVisible = false;
  }
}
