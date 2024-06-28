import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';

import { ProductsService } from '../../services/products.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent {
  titles: string[] = ['product', 'quantity', 'expiration date'];
  isModalVisible: boolean = false;
  hoverIndex = -1;
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
    this.products$ = this.productsService.products$;
    this.hideModal();
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  hideModal(): void {
    this.isModalVisible = false;
  }
}
