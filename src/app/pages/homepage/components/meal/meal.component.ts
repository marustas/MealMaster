import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IngredientService } from '../../../../shared/services/ingredient.service';
import { MealService } from '../../services/meal.service';
import { IRecipe } from '../../../../models/IRecipe';
import { Ingredient } from '../../../../models/Ingredient';

@Component({
  selector: 'app-meal[meal]',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  @Input() meal!: IRecipe | null;
  @Input() mealSection!: string;
  isModalVisible = false;
  missingIngredients: Ingredient[] = [];

  constructor(
    private mealService: MealService,
    private ingredientService: IngredientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ingredientService.showMissing(this.meal?.ingredients!);
    this.missingIngredients = this.ingredientService.missingIngredients;
  }

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
