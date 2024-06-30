import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from 'src/app/components/shared/modal/modal.module';

import { MealComponent } from './components/meal/meal.component';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [HomepageComponent, MealComponent],
  imports: [CommonModule, HomepageRoutingModule, ModalModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
