import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';
import { IRecipe } from 'src/app/models/IRecipe';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject: BehaviorSubject<string>;
  public searchQuery$: Observable<string>;

  constructor(private httpService: HttpService) {
    this.searchSubject = new BehaviorSubject<string>('');
    this.searchQuery$ = this.searchSubject.asObservable();
  }

  setQuery(searchValue: string): void {
    this.searchSubject.next(searchValue);
  }

  searchProducts(query: string): Observable<Ingredient[]> {
    return this.httpService.get<Ingredient[]>(`ingredients?q=${query}`);
  }

  searchRecipes(query: string): Observable<IRecipe[]> {
    return this.httpService.get<IRecipe[]>(`recipes?q=${query}`);
  }
}
