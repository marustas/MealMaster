import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function expirationDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!value) return null;

    if (!regex.test(value)) {
      return { dateInvalid: true };
    }

    const [day, month, year] = value.split('/').map(Number);
    const date = new Date(year, month - 1, day);

    if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
      return null;
    } else {
      return { dateInvalid: true };
    }
  };
}
