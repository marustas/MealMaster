import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/components/shared/modal/shared.module';

import { MealComponent } from './components/meal/meal.component';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [HomepageComponent, MealComponent],
  imports: [CommonModule, HomepageRoutingModule, SharedModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
