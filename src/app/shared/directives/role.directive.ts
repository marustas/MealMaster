import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appRole]',
})
export class RoleDirective implements OnDestroy {
  private authSubscription!: Subscription;

  @Input() set appRole(condition: boolean) {
    this.authSubscription = this.authService.authState$.subscribe((isAuthenticated) => {
      this.updateView(isAuthenticated, condition);
    });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}

  private updateView(isAuthenticated: boolean, condition: boolean): void {
    if (condition === isAuthenticated) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
