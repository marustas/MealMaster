import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public canActivate(): Observable<boolean> {
    return this.authService.authState$.pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
