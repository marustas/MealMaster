import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoading.asObservable();

  public showLoader() {
    this.isLoading.next(true);
  }

  public hideLoader() {
    this.isLoading.next(false);
  }
}
