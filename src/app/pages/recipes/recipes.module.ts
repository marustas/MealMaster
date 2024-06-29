import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  declarations: [RecipesComponent, RecipeComponent],
  imports: [CommonModule, RecipesRoutingModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
