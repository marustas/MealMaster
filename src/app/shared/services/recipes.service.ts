import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from 'src/app/models/IRecipe';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private httpService: HttpService) {}

  getRecipes(): Observable<IRecipe[]> {
    return this.httpService.get<IRecipe[]>('recipes');
  }

  getRecipeById(id: number): Observable<IRecipe> {
    return this.httpService.get<IRecipe>(`recipes/${id}`);
  }
}
