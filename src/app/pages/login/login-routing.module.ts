import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

export const loginRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [loginRouting],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
