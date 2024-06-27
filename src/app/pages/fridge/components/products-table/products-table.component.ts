import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent {
  titles: string[] = ['product', 'quantity', 'expiration date'];
  products$: Observable<Ingredient[]>;

  constructor(searchService: SearchService) {
    this.products$ = searchService.searchQuery$.pipe(switchMap((query) => searchService.searchProducts(query)));
  }
}
