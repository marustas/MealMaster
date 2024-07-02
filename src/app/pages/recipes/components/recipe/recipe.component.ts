import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRecipe } from 'src/app/models/IRecipe';

@Component({
  selector: 'app-recipe[recipe]',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  @Input() recipe!: IRecipe;
  section: string = '';

  private routeSubscription!: Subscription;

  constructor(private activeRoute: ActivatedRoute) {
    if (this.activeRoute.firstChild) {
      this.routeSubscription = this.activeRoute.firstChild.paramMap.subscribe((params) => {
        this.section = params.get('section')!;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
