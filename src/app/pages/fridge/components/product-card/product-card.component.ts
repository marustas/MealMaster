import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/Ingredient';

@Component({
  selector: 'app-product-card[product]',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Ingredient;
}
