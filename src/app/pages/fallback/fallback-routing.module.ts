import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FallbackComponent } from './fallback.component';

const routes: Routes = [
  {
    path: '',
    component: FallbackComponent,
  },
];

export const fallbackRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [fallbackRouting],
  exports: [RouterModule],
})
export class FallbackRoutingModule {}
