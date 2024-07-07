import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appRole]',
})
export class RoleDirective implements OnDestroy {
  private authSubscription!: Subscription;
  private inputRole!: string;

  @Input() set appRole(role: string) {
    this.inputRole = role;
    this.authService.roleState$.subscribe((role) => {
      this.updateView(role);
    });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {
    this.authService.roleState$.subscribe((role) => {
      this.updateView(role);
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  private updateView(role: string): void {
    this.viewContainer.clear();
    const roles = this.inputRole.split(',');
    console.log(roles);
    if (roles.includes(role)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
