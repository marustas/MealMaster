import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../validators/email.validator';
import { passwordValidator } from '../../validators/password.validator';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  signupForm: FormGroup;
  showPasswordField: boolean = true;

  constructor(
    formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = formBuilder.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]],
      username: ['', [Validators.required]],
    });
  }

  get emailControl() {
    return this.signupForm.get('email');
  }

  get passwordControl() {
    return this.signupForm.get('password');
  }

  setPassword(generatedPassword: string): void {
    this.signupForm.patchValue({ password: generatedPassword });
  }

  onShowPassword(): void {
    this.showPasswordField = !this.showPasswordField;
  }

  switchToLogin() {
    this.router.navigate(['auth', 'login']);
  }

  handleSignUp(e: SubmitEvent) {
    e.preventDefault();

    const { email, password, username } = this.signupForm.value;
    this.authService.signUp(email, password, username).subscribe();
  }
}
