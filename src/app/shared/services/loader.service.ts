import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoading.asObservable();

  public showLoader(): void {
    this.isLoading.next(true);
    console.log(this.isLoading.getValue());
  }

  public hideLoader(): void {
    this.isLoading.next(false);
    console.log(this.isLoading.getValue());
  }
}
