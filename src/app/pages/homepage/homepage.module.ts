import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { MealComponent } from './components/meal/meal.component';

@NgModule({
  declarations: [HomepageComponent, MealComponent],
  imports: [CommonModule, HomepageRoutingModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
