import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { IRecipe } from 'src/app/models/IRecipe';

import { HttpService } from './http.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(
    private httpService: HttpService,
    private loaderService: LoaderService
  ) {}

  getRecipes(currentPage: number): Observable<IRecipe[]> {
    return this.httpService.get<IRecipe[]>('recipes', currentPage);
  }

  getRecipeById(id: number): Observable<IRecipe> {
    this.loaderService.showLoader();
    return this.httpService.get<IRecipe>(`recipes/${id}`).pipe(
      delay(500),
      tap(() => this.loaderService.hideLoader())
    );
  }
}
