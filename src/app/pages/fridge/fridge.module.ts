import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/modal/shared.module';

import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductUnitComponent } from './components/product-unit/product-unit.component';
import { ProductsCardsComponent } from './components/products-cards/products-cards.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ViewSwitchComponent } from './components/view-switch/view-switch.component';
import { FridgeComponent } from './fridge.component';
import { FridgeRoutingModule } from './fridge-routing.module';
import { StringToDatePipe } from './pipes/string-to-date.pipe';
import { DraggableDirective } from 'src/app/shared/directives/draggable.directive';
import { DroppableDirective } from 'src/app/shared/directives/droppable.directive';

@NgModule({
  declarations: [
    FridgeComponent,
    AddProductComponent,
    ProductsTableComponent,
    StringToDatePipe,
    ViewSwitchComponent,
    ProductsCardsComponent,
    ProductCardComponent,
    ProductUnitComponent,
    DraggableDirective,
    DroppableDirective,
  ],
  imports: [CommonModule, FridgeRoutingModule, ReactiveFormsModule, SharedModule],
  exports: [FridgeComponent],
})
export class FridgeModule {}
