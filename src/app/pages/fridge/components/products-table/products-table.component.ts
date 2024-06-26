import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/Ingredient';

@Component({
  selector: 'app-products-table[products]',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent {
  @Input() products!: Ingredient[];
}
