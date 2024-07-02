import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeExtendedComponent } from './components/recipe-extended/recipe-extended.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
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
