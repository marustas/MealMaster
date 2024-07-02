import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';
import { ProductsService } from 'src/app/pages/fridge/services/products.service';

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.scss'],
})
export class RecipeIngredientComponent implements OnDestroy {
  @Input() ingredient!: Ingredient;

  missingUrl = '../../../../../assets/missing.svg';
  presentUrl = '../../../../../assets/present.svg';

  products!: Ingredient[];
  productSubscription: Subscription;

  constructor(productsService: ProductsService) {
    this.productSubscription = productsService.products$.subscribe((products) => (this.products = products));
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  isPresent(): boolean {
    return this.products.some(
      (product) =>
        product.name.toLowerCase() === this.ingredient.name.toLowerCase() &&
        this.parseQuantity(product.quantity) >= this.parseQuantity(this.ingredient.quantity)
    );
  }

  private parseQuantity(quantity: string): number {
    const parts = quantity.split(' ');
    const value = parseFloat(parts[0]);
    return +value;
  }
}
