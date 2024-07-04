import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user$: Observable<IUser>;
  isHidden = true;

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser();
  }

  showDetails(): void {
    this.isHidden = !this.isHidden;
  }
}
