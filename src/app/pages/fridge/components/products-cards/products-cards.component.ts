import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.scss'],
})
export class ProductsCardsComponent {
  products$: Observable<Ingredient[]>;

  constructor(productsService: ProductsService) {
    this.products$ = productsService.products$;
  }
}
