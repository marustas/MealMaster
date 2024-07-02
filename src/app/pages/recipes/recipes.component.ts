import { Component } from '@angular/core';
import { combineLatest, map, Observable, of, switchMap, tap } from 'rxjs';
import { IRecipe } from 'src/app/models/IRecipe';
import { LoaderService } from 'src/app/shared/services/loader.service';

import { SearchService } from '../fridge/services/search.service';
import { FilterService } from './services/filter.service';
import { PaginationService } from './services/pagination.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  recipes$: Observable<IRecipe[]>;
  isLoading$: Observable<boolean>;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private paginationService: PaginationService,
    private loaderService: LoaderService,
    filterService: FilterService,
    searchService: SearchService
  ) {
    this.isLoading$ = this.loaderService.isLoading$;
    this.recipes$ = combineLatest([
      this.paginationService.currentPage$,
      searchService.searchQuery$,
      filterService.filter$,
    ]).pipe(
      switchMap(([page, query, filters]) =>
        searchService.searchRecipes(query, filters, page, this.paginationService.itemsPerPage).pipe(
          map((response) => {
            this.paginationService.getPages(response.totalItems);
            this.currentPage = +response.currentPage;
            return response.items;
          }),
          tap(() => (this.totalPages = paginationService.totalPages))
        )
      )
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
