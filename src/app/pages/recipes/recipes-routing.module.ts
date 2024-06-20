import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
  },
];

export const recipesRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [recipesRouting],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
