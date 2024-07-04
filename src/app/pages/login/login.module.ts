import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './login.component';
import { loginRouting } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [CommonModule, loginRouting, ReactiveFormsModule],
  exports: [LoginComponent],
})
export class LoginModule {}
