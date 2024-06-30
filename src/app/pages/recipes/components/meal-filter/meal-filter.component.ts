import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-meal-filter',
  templateUrl: './meal-filter.component.html',
  styleUrls: ['./meal-filter.component.scss'],
})
export class MealFilterComponent {
  @Output() filterChanged = new EventEmitter<string[]>();

  filters: { [key: string]: boolean } = {
    breakfast: false,
    lunch: false,
    dinner: false,
  };

  onCheckboxChange(filter: string, isChecked: Event): void {
    this.filters[filter] = (isChecked.target as HTMLInputElement).checked;
    const activeFilters = Object.keys(this.filters).filter((key) => this.filters[key]);
    this.filterChanged.emit(activeFilters);
  }
}
