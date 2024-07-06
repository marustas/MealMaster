import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './login.component';
import { loginRouting } from './login-routing.module';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { PasswordGenerationComponent } from './components/password-generation/password-generation.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, SignupFormComponent, PasswordGenerationComponent],
  imports: [CommonModule, loginRouting, ReactiveFormsModule],
  exports: [LoginComponent],
})
export class LoginModule {}
