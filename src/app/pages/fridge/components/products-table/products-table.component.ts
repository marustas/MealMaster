import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent {
  products$: Observable<Ingredient[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = productsService.products$;
  }
}
