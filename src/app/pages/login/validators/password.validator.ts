import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;
    if (!value) return null;

    const errors: ValidationErrors = {};

    const hasMinimumLength = value.length >= 8;
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasFourNumbers = (value.match(/\d/g) || []).length >= 4;

    if (!hasMinimumLength) {
      errors['minLength'] = 'Password must be at least 8 characters long.';
    }

    if (!hasSpecialCharacter && hasMinimumLength) {
      errors['specialCharacter'] = 'Password must contain at least 1 special character.';
    }

    if (!hasFourNumbers && hasMinimumLength && hasSpecialCharacter) {
      errors['fourNumbers'] = 'Password must contain at least 4 numbers.';
    }

    return Object.keys(errors).length ? errors : null;
  };
}
