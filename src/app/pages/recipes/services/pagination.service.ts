import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private currentPageSubject: BehaviorSubject<number>;
  public currentPage$: Observable<number>;
  itemsPerPage = 5;
  totalPages = 1;

  constructor() {
    this.currentPageSubject = new BehaviorSubject<number>(1);
    this.currentPage$ = this.currentPageSubject.asObservable();
  }

  getPages(totalItems: number): void {
    this.totalPages = Math.ceil(totalItems / this.itemsPerPage);
  }

  nextPage(): void {
    const currentPage = this.currentPageSubject.getValue();
    if (currentPage < this.totalPages) {
      this.currentPageSubject.next(currentPage + 1);
    }
  }

  previousPage(): void {
    const currentPage = this.currentPageSubject.getValue();
    if (currentPage > 1) {
      this.currentPageSubject.next(currentPage - 1);
    }
  }
}
