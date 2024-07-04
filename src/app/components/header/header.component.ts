import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ProfilePictureService } from 'src/app/pages/user/services/profile-picture.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

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
    this.userService
      .getUser()
      .subscribe(
        (user) =>
          (this.profilePicture = `data:image/svg+xml;utf8,${this.profilePictureService.createProfilePicture(user.username)}`)
      );
  }

  onLogOut(): void {
    this.authService.logout();
  }
}
