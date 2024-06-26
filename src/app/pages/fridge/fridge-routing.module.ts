import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './components/add-product/add-product.component';
import { FridgeComponent } from './fridge.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';

const routes: Routes = [
  {
    path: '',
    component: FridgeComponent,
    children: [
      { path: 'table', component: ProductsTableComponent },
      // { path: 'cards', component: CardsComponent },
      { path: '', redirectTo: 'table', pathMatch: 'full' },
    ],
  },
  { path: 'new', component: AddProductComponent },
];

export const fridgeRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [fridgeRouting],
  exports: [RouterModule],
})
export class FridgeRoutingModule {}
