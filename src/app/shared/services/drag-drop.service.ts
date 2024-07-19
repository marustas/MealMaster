import { Injectable } from '@angular/core';
import { ProductsService } from 'src/app/pages/fridge/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class DragDropService {
  draggedItem: any | null;

  constructor(private productService: ProductsService) {}

  setDraggedItem(item: any): void {
    this.draggedItem = item;
  }

  clearDraggedItem(): void {
    this.draggedItem = null;
  }

  addDraggedItem() {
    this.productService.deleteProduct(this.draggedItem.id).subscribe();
    this.clearDraggedItem();
  }
}
