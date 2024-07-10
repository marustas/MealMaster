import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/shared/services/user.service';
import { ProfilePictureService } from './services/profile-picture.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user$: Observable<IUser>;
  isHidden = true;

  constructor(
    private userService: UserService,
    profilePictureService: ProfilePictureService
  ) {
    this.user$ = this.userService
      .getUser()
      .pipe(tap((user) => profilePictureService.createProfilePicture(user.username)));
  }

  showDetails(): void {
    this.isHidden = !this.isHidden;
  }
}
