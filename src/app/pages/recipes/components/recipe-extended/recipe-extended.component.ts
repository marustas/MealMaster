import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iif, Observable, switchMap } from 'rxjs';
import { IRecipe } from 'src/app/models/IRecipe';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipe-extended',
  templateUrl: './recipe-extended.component.html',
  styleUrls: ['./recipe-extended.component.scss'],
})
export class RecipeExtendedComponent {
  recipe$: Observable<IRecipe>;

  constructor(
    recipesService: RecipesService,
    private activeRoute: ActivatedRoute
  ) {
    this.recipe$ = this.activeRoute.paramMap.pipe(
      switchMap((params) => {
        const recipeID = params.get('recipeID');
        console.log(recipeID);
        return iif(() => isNaN(+recipeID!), recipesService.getRecipeById(1), recipesService.getRecipeById(+recipeID!));
      })
    );
  }
}
