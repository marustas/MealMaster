import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';
import { ProductsService } from '../../pages/fridge/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class IngredientService implements OnDestroy {
  missingIngredients: Ingredient[] = [];

  products!: Ingredient[];
  productSubscription: Subscription;

  constructor(productsService: ProductsService) {
    this.productSubscription = productsService.products$.subscribe((products) => (this.products = products));
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  isPresent(ingredient: Ingredient): boolean {
    return this.products.some(
      (product) =>
        product.name.toLowerCase() === ingredient.name.toLowerCase() &&
        this.parseQuantity(product.quantity) >= this.parseQuantity(ingredient.quantity)
    );
  }

  showMissing(ingredients: Ingredient[]): void {
    this.missingIngredients = ingredients?.filter((ingredient) => !this.isPresent(ingredient));
  }

  private parseQuantity(quantity: string): number {
    const parts = quantity.split(' ');
    const value = parseFloat(parts[0]);
    return +value;
  }
}
