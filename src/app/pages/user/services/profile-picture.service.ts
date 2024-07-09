import { Injectable } from '@angular/core';
import * as minidenticons from 'minidenticons';

@Injectable({
  providedIn: 'root',
})
export class ProfilePictureService {
  createProfilePicture(username: string): string {
    console.log(username);
    return minidenticons.minidenticon(username);
  }
}
