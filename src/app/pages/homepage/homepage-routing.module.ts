import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
];

export const homeRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [homeRouting],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
