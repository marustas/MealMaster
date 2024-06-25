import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { loginRouting } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, loginRouting],
  exports: [LoginComponent],
})
export class LoginModule {}
