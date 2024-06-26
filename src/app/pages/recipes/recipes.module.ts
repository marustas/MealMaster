import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [RecipesComponent],
  imports: [CommonModule, RecipesRoutingModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
