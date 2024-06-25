import { Component, Input, ViewChild } from '@angular/core';
import { IRecipe } from 'src/app/models/IRecipe';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-meal[meal]',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent {
  @Input() meal!: IRecipe;

  @ViewChild('deleteModal') modal!: ModalComponent;

  onDeleteMeal(): void {
    this.modal.showModal(this.meal.id);
  }
}
