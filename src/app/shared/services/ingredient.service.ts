import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';

import { ProductsService } from '../../pages/fridge/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  missingIngredients: Ingredient[] = [];

  products!: Ingredient[];

  constructor(productsService: ProductsService) {
    productsService.products$.subscribe((products) => (this.products = products));
  }

  isPresent(ingredient: Ingredient): boolean {
    const product = this.products.find((product) => product.name.toLowerCase() === ingredient.name.toLowerCase());
    if (!product) return false;

    const productQuantity = this.parseQuantity(product.quantity);
    const ingredientQuantity = this.parseQuantity(ingredient.quantity);

    return productQuantity.value >= ingredientQuantity.value && productQuantity.unit === ingredientQuantity.unit;
  }

  showMissing(ingredients: Ingredient[]): Observable<Ingredient[]> {
    return of(ingredients.filter((ingredient) => !this.isPresent(ingredient)));
  }

  private parseQuantity(quantity: string): { value: number; unit: string } {
    const parts = quantity.split(' ');
    const value = parseFloat(parts[0]);
    const unit = parts[1] || '';
    return { value, unit };
  }
}
