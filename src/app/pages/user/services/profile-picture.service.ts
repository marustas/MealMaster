import { Injectable } from '@angular/core';
import * as minidenticons from 'minidenticons';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfilePictureService {
  currentProfileSubject: BehaviorSubject<string>;
  currentProfile$: Observable<string>;

  constructor() {
    this.currentProfileSubject = new BehaviorSubject<string>('');
    this.currentProfile$ = this.currentProfileSubject.asObservable();
  }

  createProfilePicture(username: string): void {
    this.currentProfileSubject.next(`data:image/svg+xml;utf8,${minidenticons.minidenticon(username)}`);
  }
}
