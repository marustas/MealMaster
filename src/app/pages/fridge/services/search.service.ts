import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';
import { IRecipe } from 'src/app/models/IRecipe';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchQuery$: Observable<string> = this.searchSubject.asObservable();

  constructor(
    private httpService: HttpService,
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
    return this.httpService.get<Ingredient[]>('ingredients', query ? { q: query } : {});
  }

  searchRecipes(query: string): Observable<IRecipe[]> {
    return this.httpService.get<IRecipe[]>('recipes', query ? { q: query } : {});
  }
}
