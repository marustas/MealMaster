import { Component, Input, OnInit } from '@angular/core';

import { IngredientService } from '../../../../shared/services/ingredient.service';
import { Ingredient } from '../../../../models/Ingredient';

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.scss'],
})
export class RecipeIngredientComponent implements OnInit {
  @Input() ingredient!: Ingredient;
  missingUrl = '../../../../../assets/missing.svg';
  presentUrl = '../../../../../assets/present.svg';

  isPresent = '';

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.isPresent = this.ingredientService.isPresent(this.ingredient) ? this.presentUrl : this.missingUrl;
  }
}
