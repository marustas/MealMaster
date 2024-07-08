import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

import { emailValidator } from '../../validators/email.validator';
import { passwordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
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

  switchToSignup() {
    this.router.navigate(['auth', 'signup']);
  }

  handleLogin(e: SubmitEvent) {
    e.preventDefault();
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe();
  }
}
