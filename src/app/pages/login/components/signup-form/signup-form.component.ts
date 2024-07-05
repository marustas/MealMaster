import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../validators/email.validator';
import { passwordValidator } from '../../validators/password.validator';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { generateMediumPassword, generateStrongPassword, generateWeakPassword } from '../../utils';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  signupForm: FormGroup;
  generatedPassword: string = '';
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

  onShowPassword(): void {
    this.showPasswordField = !this.showPasswordField;
  }

  generatePassword(event: Event): void {
    const strength = parseInt((event.target as HTMLInputElement).value);
    switch (true) {
      case strength >= 0 && strength < 33:
        this.generatedPassword = generateWeakPassword();
        break;
      case strength >= 33 && strength < 66:
        this.generatedPassword = generateMediumPassword();
        break;
      case strength >= 66:
        this.generatedPassword = generateStrongPassword();
        break;
      default:
        throw new Error('Invalid password strength');
    }
    this.signupForm.patchValue({ password: this.generatedPassword });
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
