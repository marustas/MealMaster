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
    userService: UserService
  ) {
    userService.getUser().pipe(tap((user) => profilePictureService.createProfilePicture(user.username)));
    this.profilePicture$ = this.profilePictureService.currentProfile$;
  }

  onLogOut(): void {
    this.authService.logout();
  }
}
