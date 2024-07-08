import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/components/shared/modal/shared.module';

import { MealFilterComponent } from './components/meal-filter/meal-filter.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeExtendedComponent } from './components/recipe-extended/recipe-extended.component';
import { RecipeIngredientComponent } from './components/recipe-ingredient/recipe-ingredient.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubscriptionPlanComponent } from './components/subscription-plan/subscription-plan.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent,
    MealFilterComponent,
    RecipeExtendedComponent,
    RecipeIngredientComponent,
    SubscriptionComponent,
    SubscriptionPlanComponent,
  ],
  imports: [CommonModule, RecipesRoutingModule, SharedModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
