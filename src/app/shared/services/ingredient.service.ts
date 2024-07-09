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
    const product = this.products.find((product) => product.name.toLowerCase() === ingredient.name.toLowerCase());

    if (!product) return false;

    const productQuantity = this.parseQuantity(product.quantity);
    const ingredientQuantity = this.parseQuantity(ingredient.quantity);

    return productQuantity.value >= ingredientQuantity.value && productQuantity.unit === ingredientQuantity.unit;
  }

  showMissing(ingredients: Ingredient[]): void {
    this.missingIngredients = ingredients?.filter((ingredient) => !this.isPresent(ingredient));
  }

  private parseQuantity(quantity: string): { value: number; unit: string } {
    const parts = quantity.split(' ');
    const value = parseFloat(parts[0]);
    const unit = parts[1] || '';
    return { value, unit };
  }
}
