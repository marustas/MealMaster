import { Component } from '@angular/core';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  recipeToDelete: number = -1;
  isVisible: boolean = false;

  constructor(private mealService: MealService) {}

  showModal(recipeID: number): void {
    this.recipeToDelete = recipeID;
    this.isVisible = true;
  }

  hideModal(): void {
    this.isVisible = false;
  }

  onConfirm(): void {
    this.mealService.deleteMeal(this.recipeToDelete);
    this.hideModal();
  }
}
