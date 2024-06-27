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
    this.productService.addProduct(this.buildNewProduct());
    this.router.navigate(['products']);
  }

  onCancel(): void {
    this.router.navigate(['products']);
  }

  private buildNewProduct(): Ingredient {
    const newProductID: number = Math.floor(Math.random() * 1000) + this.productService.currentLength;
    let newProductName: string = this.productForm.get('name')?.value;
    let newProductExpiration: string = this.productForm.get('expiresAt')?.value;

    let quantity: string = this.productForm.get('quantity')?.value.split(' ');
    const [splitQuantity, unit] = quantity;
    quantity = unit === 'N/A' ? splitQuantity : quantity;

    if (!newProductExpiration) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 12);
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      newProductExpiration = `${day}/${month}/${year}`;
    }

    const newProduct: Ingredient = {
      id: newProductID,
      quantity: quantity,
      name: newProductName,
      expiresAt: newProductExpiration,
    };

    return newProduct;
  }
}
