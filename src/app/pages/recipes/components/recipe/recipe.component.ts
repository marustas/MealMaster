import { Component, Input } from '@angular/core';
import { IRecipe } from 'src/app/models/IRecipe';

@Component({
  selector: 'app-recipe[recipe]',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  @Input() recipe!: IRecipe;
}
