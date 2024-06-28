import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-product-unit',
  templateUrl: './product-unit.component.html',
  styleUrls: ['./product-unit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductUnitComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ProductUnitComponent),
      multi: true,
    },
  ],
})
export class ProductUnitComponent implements ControlValueAccessor {
  units: string[] = ['N/A', 'ml', 'g'];
  quantity = '';
  unit = 'N/A';

  onChange = (value: string) => {};
  onTouched = () => {};
  onValidatorChange = () => {};

  writeValue(value: any): void {
    if (value) {
      const [quantity, unit] = value.split(' ');
      this.quantity = quantity;
      this.unit = unit;
    } else {
      this.quantity = '';
      this.unit = 'N/A';
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.quantity) {
      return { required: true };
    }
    if (!/^\d+$/.test(this.quantity)) {
      return { quantityInvalid: true };
    }
    return null;
  }

  updateQuantity(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.quantity = target.value;
    this.propagateChange();
  }

  updateUnit(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.unit = target.value;
    this.propagateChange();
  }

  propagateChange(): void {
    const value = `${this.quantity} ${this.unit}`;
    this.onChange(value);
    if (this.onValidatorChange) {
      this.onValidatorChange();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }
}
