import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpService } from 'src/app/shared/services/http.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpService] });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
