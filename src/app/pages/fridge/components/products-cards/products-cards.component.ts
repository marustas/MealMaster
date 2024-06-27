import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.scss'],
})
export class ProductsCardsComponent {
  products$: Observable<Ingredient[]>;

  constructor(searchService: SearchService) {
    this.products$ = searchService.searchQuery$.pipe(switchMap((query) => searchService.searchProducts(query)));
  }
}
