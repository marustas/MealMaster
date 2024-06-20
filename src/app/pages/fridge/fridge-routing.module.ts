import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FridgeComponent } from './fridge.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: FridgeComponent,
  },
  { path: 'new', component: AddProductComponent },
];

export const fridgeRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [fridgeRouting],
  exports: [RouterModule],
})
export class FridgeRoutingModule {}
