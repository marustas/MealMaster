import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MealComponent } from './components/meal/meal.component';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [HomepageComponent, MealComponent],
  imports: [CommonModule, HomepageRoutingModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
