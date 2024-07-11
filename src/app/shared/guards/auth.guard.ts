import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public canActivate(): Observable<boolean> {
    return this.authService.authState$.pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/auth']);
        }
      })
    );
  }
}
