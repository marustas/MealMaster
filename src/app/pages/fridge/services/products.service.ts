import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsSubject: BehaviorSubject<Ingredient[]>;
  public products$: Observable<Ingredient[]>;
  public currentLength = 0;

  constructor(private httpService: HttpService) {
    this.productsSubject = new BehaviorSubject<Ingredient[]>([]);
    this.products$ = this.productsSubject.asObservable();
    this.loadInitialProducts();
    this.currentLength = this.productsSubject.getValue().length;
  }

  private loadInitialProducts(): void {
    this.httpService.get<Ingredient[]>('ingredients').subscribe((products) => {
      this.productsSubject.next(products);
    });
  }

  getProduct(productID: number): Observable<Ingredient> {
    return this.httpService.get<Ingredient>(`ingredients/${productID}`);
  }

  addProduct(newProduct: Ingredient): void {
    this.httpService
      .post<Ingredient>(`ingredients`, newProduct)
      .pipe(
        tap(() => {
          const currentProducts = this.productsSubject.getValue();
          const updatedProducts = [...currentProducts, newProduct];
          this.productsSubject.next(updatedProducts);
        })
      )
      .subscribe();
  }

  deleteProduct(productID: number): void {
    this.httpService
      .delete<void>(`ingredients/${productID}`)
      .pipe(
        tap(() => {
          const currentProducts = this.productsSubject.getValue();
          const updatedProducts = currentProducts.filter((product) => product.id !== productID);
          this.productsSubject.next(updatedProducts);
        })
      )
      .subscribe();
  }

  changeProduct(productID: number, newProductData: Ingredient): void {
    this.httpService
      .put<Ingredient>(`ingredients/${productID}`, newProductData)
      .pipe(
        tap(() => {
          const currentProducts = this.productsSubject.getValue();
          const updatedProducts = currentProducts.map((product) =>
            product.id === productID ? newProductData : product
          );
          this.productsSubject.next(updatedProducts);
        })
      )
      .subscribe();
  }
}
