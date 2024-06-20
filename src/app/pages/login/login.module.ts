import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginRouting } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, loginRouting],
  exports: [LoginComponent],
})
export class LoginModule {}
