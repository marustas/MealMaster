import { Component } from '@angular/core';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { IRecipe } from 'src/app/models/IRecipe';

import { SearchService } from '../fridge/services/search.service';
import { PaginationService } from './services/pagination.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  recipes$: Observable<IRecipe[]>;
  currentPage!: number;
  totalPages: number = this.paginationService.totalPages;

  constructor(
    private paginationService: PaginationService,
    searchService: SearchService
  ) {
    this.paginationService.currentPage$.subscribe((page) => (this.currentPage = page));
    this.recipes$ = combineLatest([this.paginationService.currentPage$, searchService.searchQuery$]).pipe(
      switchMap(([page, query]) => searchService.searchRecipes(query, page, this.paginationService.itemsPerPage)),
      map((response) => {
        return response.items;
      })
    );
  }

  trackById(index: number, item: IRecipe): number {
    return item.id;
  }

  onNextPage(): void {
    this.paginationService.nextPage();
  }

  onPreviousPage(): void {
    this.paginationService.previousPage();
  }
}
