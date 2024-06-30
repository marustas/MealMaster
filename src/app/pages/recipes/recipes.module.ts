import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/components/shared/modal/shared.module';

import { MealFilterComponent } from './components/meal-filter/meal-filter.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [RecipesComponent, RecipeComponent, MealFilterComponent],
  imports: [CommonModule, RecipesRoutingModule, SharedModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
