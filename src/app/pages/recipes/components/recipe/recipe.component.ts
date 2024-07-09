import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../../../../shared/services/auth.service';
import { IRecipe } from '../../../../models/IRecipe';

@Component({
  selector: 'app-recipe[recipe]',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  @Input() recipe!: IRecipe;
  section = '';
  currentRole!: string;

  private routeSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.authService.roleState$.subscribe((role) => (this.currentRole = role));
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

  showFullRecipe(): void {
    if ((this.recipe.special && this.currentRole === 'subscribed') || !this.recipe.special) {
      this.router.navigate(['/recipes', this.section, this.recipe.id]);
    } else {
      this.router.navigate(['/recipes', 'subscription']);
    }
  }
}
