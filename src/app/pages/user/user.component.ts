import { Component } from '@angular/core';
import { ProfilePictureService } from './services/profile-picture.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable, tap } from 'rxjs';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  profilePicture!: string;
  user$: Observable<IUser>;
  constructor(
    profilePictureService: ProfilePictureService,
    private userService: UserService
  ) {
    this.user$ = this.userService
      .getUser()
      .pipe(tap((user) => (this.profilePicture = profilePictureService.createProfilePicture(user.username))));
  }
}
