import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.scss'],
})
export class ProductsCardsComponent {
  products$: Observable<Ingredient[]>;
  private subscription: Subscription;

  constructor(private productsService: ProductsService) {
    this.products$ = productsService.products$;
    this.subscription = this.products$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
