import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/models/Ingredient';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ) {
    this.productForm = formBuilder.group({
      productName: ['', [Validators.required]],
      prdouctExpiration: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      productQuantity: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      unit: ['N/A'],
    });
  }

  onSubmit(): void {
    const newProduct: Ingredient = { ...this.productForm.value };
    this.httpService.post('ingredients', newProduct);
    this.router.navigate(['products']);
  }

  onCancel(): void {
    this.router.navigate(['products']);
  }
}
