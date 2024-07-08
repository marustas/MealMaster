import { Component, EventEmitter, Output } from '@angular/core';

import { generateMediumPassword, generateStrongPassword, generateWeakPassword } from '../../utils';

@Component({
  selector: 'app-password-generation',
  templateUrl: './password-generation.component.html',
  styleUrls: ['./password-generation.component.scss'],
})
export class PasswordGenerationComponent {
  @Output() passwordGeneration = new EventEmitter<string>();
  generatedPassword = '';

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
    this.passwordGeneration.emit(this.generatedPassword);
  }
}
