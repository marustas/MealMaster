import { Injectable } from '@angular/core';
import * as minidenticons from 'minidenticons';

@Injectable({
  providedIn: 'root',
})
export class ProfilePictureService {
  createProfilePicture(username: string): string {
    return minidenticons.minidenticon(username);
  }
}
