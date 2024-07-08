import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'signup', component: SignupFormComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

export const loginRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [loginRouting],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
