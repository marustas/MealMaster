import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../validators/password.validator';
import { emailValidator } from '../../validators/email.validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]],
    });
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  handleLogin(e: SubmitEvent) {
    e.preventDefault();
  }
}
