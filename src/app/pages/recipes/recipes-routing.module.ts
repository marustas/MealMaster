import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeExtendedComponent } from './components/recipe-extended/recipe-extended.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: 'subscription',
        component: SubscriptionComponent,
      },
      { path: ':section', component: RecipesComponent },
      { path: ':section/:recipeID', component: RecipeExtendedComponent },
    ],
  },
];

export const recipesRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [recipesRouting],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
