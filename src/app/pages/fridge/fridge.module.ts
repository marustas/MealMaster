import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddProductComponent } from './components/add-product/add-product.component';
import { FridgeComponent } from './fridge.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsCardsComponent } from './components/products-cards/products-cards.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ViewSwitchComponent } from './components/view-switch/view-switch.component';
import { FridgeRoutingModule } from './fridge-routing.module';
import { StringToDatePipe } from './pipes/string-to-date.pipe';

@NgModule({
  declarations: [
    FridgeComponent,
    AddProductComponent,
    ProductsTableComponent,
    StringToDatePipe,
    ViewSwitchComponent,
    ProductsCardsComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, FridgeRoutingModule],
  exports: [FridgeComponent],
})
export class FridgeModule {}
