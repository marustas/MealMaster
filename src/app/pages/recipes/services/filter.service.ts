import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterSubject: BehaviorSubject<string[]>;
  filter$: Observable<string[]>;

  constructor() {
    this.filterSubject = new BehaviorSubject<string[]>([]);
    this.filter$ = this.filterSubject.asObservable();
  }

  setFilters(filters: string[]): void {
    this.filterSubject.next(filters);
  }
}
