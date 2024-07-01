import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
  },
  { path: ':section', component: RecipesComponent },
];

export const recipesRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [recipesRouting],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
