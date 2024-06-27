import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';

import { SearchService } from '../../services/search.service';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent {
  titles: string[] = ['product', 'quantity', 'expiration date'];
  hoverIndex: number = -1;
  products$: Observable<Ingredient[]>;

  constructor(
    searchService: SearchService,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.products$ = searchService.searchQuery$.pipe(switchMap((query) => searchService.searchProducts(query)));
  }

  onToggleHover(index: number, isHovering: boolean): void {
    if (isHovering) this.hoverIndex = index;
  }

  onEditProduct(): void {
    this.router.navigate(['/products/', this.hoverIndex]);
  }

  onDeleteProduct(): void {
    this.productsService.deleteProduct(this.hoverIndex);
  }
}
