import { Component } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { ProfilePictureService } from '../../pages/user/services/profile-picture.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  profilePicture!: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private profilePictureService: ProfilePictureService
  ) {
    this.userService.getUser().subscribe((user) => {
      this.profilePicture = `data:image/svg+xml;utf8,${this.profilePictureService.createProfilePicture(user.username)}`;
    });
  }

  onLogOut(): void {
    this.authService.logout();
  }
}
