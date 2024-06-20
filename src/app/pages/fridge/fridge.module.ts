import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FridgeRoutingModule } from './fridge-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FridgeComponent } from './fridge.component';

@NgModule({
  declarations: [FridgeComponent, AddProductComponent],
  imports: [CommonModule, FridgeRoutingModule],
  exports: [FridgeComponent],
})
export class FridgeModule {}
