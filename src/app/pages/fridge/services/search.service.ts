import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, delay, Observable, tap } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';
import { IRecipe } from 'src/app/models/IRecipe';
import { HttpService } from 'src/app/shared/services/http.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchQuery$: Observable<string> = this.searchSubject.asObservable();

  constructor(
    private httpService: HttpService,
    private loader: LoaderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const initialQuery = this.route.snapshot.queryParams['q'] || '';
    this.setQuery(initialQuery);
  }

  setQuery(searchValue: string): void {
    this.searchSubject.next(searchValue);
    this.router.navigate([], {
      queryParams: { q: searchValue || null },
      queryParamsHandling: 'merge',
    });
  }

  searchProducts(query: string): Observable<Ingredient[]> {
    this.loader.showLoader();
    return this.httpService.get<Ingredient[]>('ingredients', query ? { q: query } : {}).pipe(
      delay(400),
      tap(() => this.loader.hideLoader())
    );
  }

  searchRecipes(query: string): Observable<IRecipe[]> {
    this.loader.showLoader();
    return this.httpService.get<IRecipe[]>('recipes', query ? { q: query } : {}).pipe(
      delay(400),
      tap(() => this.loader.hideLoader())
    );
  }
}
