import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsCardsComponent } from './components/products-cards/products-cards.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { FridgeComponent } from './fridge.component';

const routes: Routes = [
  {
    path: '',
    component: FridgeComponent,
    children: [
      { path: 'table', component: ProductsTableComponent },
      { path: 'cards', component: ProductsCardsComponent },
      { path: '', redirectTo: 'table', pathMatch: 'full' },
    ],
  },
  { path: 'new', component: AddProductComponent },
  { path: ':id', component: AddProductComponent },
];

export const fridgeRouting = RouterModule.forChild(routes);
export const productCardsRoute = 'cards';
export const productTableRoute = 'table';

@NgModule({
  imports: [fridgeRouting],
  exports: [RouterModule],
})
export class FridgeRoutingModule {}
