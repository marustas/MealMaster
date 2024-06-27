import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/models/Ingredient';
import { ProductsService } from '../../services/products.service';
import { expirationDateValidator } from '../../validators/expirationDateValidator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.productForm = formBuilder.group({
      name: ['', [Validators.required]],
      expiresAt: ['', [expirationDateValidator()]],
      quantity: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const newProductID = Math.floor(Math.random() * 1000) + this.productService.currentLength;
    const newProduct: Ingredient = { ...this.productForm.value, id: newProductID };
    this.productService.addProduct(newProduct);
    this.router.navigate(['products']);
  }

  onCancel(): void {
    this.router.navigate(['products']);
  }
}
