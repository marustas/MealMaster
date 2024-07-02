import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/components/shared/modal/shared.module';

import { MealFilterComponent } from './components/meal-filter/meal-filter.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeExtendedComponent } from './components/recipe-extended/recipe-extended.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeIngredientComponent } from './components/recipe-ingredient/recipe-ingredient.component';

@NgModule({
  declarations: [RecipesComponent, RecipeComponent, MealFilterComponent, RecipeExtendedComponent, RecipeIngredientComponent],
  imports: [CommonModule, RecipesRoutingModule, SharedModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
