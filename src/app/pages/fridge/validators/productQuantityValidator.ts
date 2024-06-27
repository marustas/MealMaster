import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function productQuantityValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;
    if (!value) return null;

    const regex = /^\d+$/;
    if (!regex.test(value)) {
      return { quantityInvalid: true };
    }
    return null;
  };
}
