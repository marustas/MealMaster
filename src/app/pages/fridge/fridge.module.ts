import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddProductComponent } from './components/add-product/add-product.component';
import { FridgeComponent } from './fridge.component';
import { FridgeRoutingModule } from './fridge-routing.module';

@NgModule({
  declarations: [FridgeComponent, AddProductComponent],
  imports: [CommonModule, FridgeRoutingModule],
  exports: [FridgeComponent],
})
export class FridgeModule {}
