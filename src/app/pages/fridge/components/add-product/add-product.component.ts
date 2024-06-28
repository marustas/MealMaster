import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  productID = '';

  constructor(
    formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = formBuilder.group({
      name: ['', [Validators.required]],
      expiresAt: ['', [expirationDateValidator()]],
      quantity: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productID = params.get('id') || '';
    });
    if (this.productID) {
      this.productService.getProduct(+this.productID).subscribe((product) => this.productForm.patchValue(product));
    }
  }

  onSubmit(): void {
    if (this.productID) {
      this.productService.changeProduct(+this.productID, this.buildProduct());
    } else {
      this.productService.addProduct(this.buildProduct());
    }
    this.router.navigate(['products']);
  }

  onCancel(): void {
    this.router.navigate(['products']);
  }

  private buildProduct(): Ingredient {
    const newProductName: string = this.productForm.get('name')?.value;
    let newProductExpiration: string = this.productForm.get('expiresAt')?.value;

    let quantity: string = this.productForm.get('quantity')?.value.split(' ');
    const [splitQuantity, unit] = quantity;
    quantity = unit === 'N/A' || 'undefined' ? splitQuantity : quantity;

    if (!newProductExpiration) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 12);
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      newProductExpiration = `${day}/${month}/${year}`;
    }

    const newProduct: Ingredient = {
      id: 0,
      quantity: quantity,
      name: newProductName,
      expiresAt: newProductExpiration,
    };

    if (this.productID) {
      newProduct.id = +this.productID;
    } else {
      newProduct.id = Math.floor(Math.random() * 1000) + this.productService.currentLength;
    }
    return newProduct;
  }
}
