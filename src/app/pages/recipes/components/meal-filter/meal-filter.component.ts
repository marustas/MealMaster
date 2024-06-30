import { Component, EventEmitter, Output } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-meal-filter',
  templateUrl: './meal-filter.component.html',
  styleUrls: ['./meal-filter.component.scss'],
})
export class MealFilterComponent {
  filters: { [key: string]: boolean } = {
    breakfast: false,
    lunch: false,
    dinner: false,
  };

  constructor(private filterService: FilterService) {}

  onCheckboxChange(filter: string, isChecked: Event): void {
    this.filters[filter] = (isChecked.target as HTMLInputElement).checked;
    const activeFilters = Object.keys(this.filters).filter((key) => this.filters[key]);
    this.filterService.setFilters(activeFilters);
  }
}
