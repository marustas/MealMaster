import { TestBed } from '@angular/core/testing';

import { HttpService } from '../../../shared/services/http.service';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpService, HttpClientModule, HttpClientTestingModule] });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
