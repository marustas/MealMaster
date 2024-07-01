import { Component, OnDestroy } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meal-filter',
  templateUrl: './meal-filter.component.html',
  styleUrls: ['./meal-filter.component.scss'],
})
export class MealFilterComponent implements OnDestroy {
  private routeSubscription: Subscription;

  filters: { [key: string]: boolean } = {
    breakfast: false,
    lunch: false,
    dinner: false,
  };

  constructor(
    private filterService: FilterService,
    private activeRoute: ActivatedRoute
  ) {
    this.routeSubscription = this.activeRoute.paramMap.subscribe((params) => {
      const section = params.get('section');
      if (section && this.filters.hasOwnProperty(section)) {
        this.filters[section] = true;
      }
      this.updateFilters();
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  onCheckboxChange(filter: string, event: Event): void {
    this.filters[filter] = (event.target as HTMLInputElement).checked;
    this.updateFilters();
  }

  private updateFilters(): void {
    const activeFilters = Object.keys(this.filters).filter((key) => this.filters[key]);
    this.filterService.setFilters(activeFilters);
  }
}
