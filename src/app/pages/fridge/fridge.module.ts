import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductUnitComponent } from './components/product-unit/product-unit.component';
import { ProductsCardsComponent } from './components/products-cards/products-cards.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { SearchComponent } from './components/search/search.component';
import { ViewSwitchComponent } from './components/view-switch/view-switch.component';
import { FridgeComponent } from './fridge.component';
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
    SearchComponent,
    ProductUnitComponent,
  ],
  imports: [CommonModule, FridgeRoutingModule, ReactiveFormsModule],
  exports: [FridgeComponent],
})
export class FridgeModule {}
