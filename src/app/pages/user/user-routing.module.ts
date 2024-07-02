import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
];

export const userRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [userRouting],
  exports: [RouterModule],
})
export class UserRoutingModule {}
