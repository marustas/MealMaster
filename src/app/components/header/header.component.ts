import { Component } from '@angular/core';

import { ProfilePictureService } from '../../pages/user/services/profile-picture.service';
import { AuthService } from '../../shared/services/auth.service';
import { Observable, tap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  profilePicture$!: Observable<string>;

  constructor(
    private authService: AuthService,
    private profilePictureService: ProfilePictureService,
    private userService: UserService
  ) {
    this.profilePicture$ = this.profilePictureService.currentProfile$;
    this.userService
      .getUser()
      .pipe(
        tap((user) => {
          profilePictureService.createProfilePicture(user.username);
        })
      )
      .subscribe();
  }

  onLogOut(): void {
    this.authService.logout();
  }
}
