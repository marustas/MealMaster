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
  currentPage = 1;
  totalPages = 1;

  constructor(
    private paginationService: PaginationService,
    searchService: SearchService
  ) {
    this.recipes$ = combineLatest([this.paginationService.currentPage$, searchService.searchQuery$]).pipe(
      switchMap(([page, query]) => searchService.searchRecipes(query, page, this.paginationService.itemsPerPage)),
      map((response) => {
        this.paginationService.getPages(response.totalItems);
        this.currentPage = +response.currentPage;
        this.totalPages = paginationService.totalPages;
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
