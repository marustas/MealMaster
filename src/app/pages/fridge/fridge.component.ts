import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';

import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss'],
})
export class FridgeComponent {
  products$: Observable<Ingredient[]>;

  constructor(private productService: ProductsService) {
    this.products$ = productService.products$;
  }
}
