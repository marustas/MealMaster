import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsTableComponent } from './products-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { SearchService } from '../../services/search.service';

describe('ProductsTableComponent', () => {
  let component: ProductsTableComponent;
  let fixture: ComponentFixture<ProductsTableComponent>;

  let productsServiceStub: Partial<ProductsService>;
  let searchServiceStub: Partial<SearchService>;

  beforeEach(async () => {
    productsServiceStub = {
      deleteProduct: jest.fn(),
      products$: of([]),
    };

    searchServiceStub = {
      searchQuery$: of(''),
      searchProducts: jest.fn().mockReturnValue(of([])),
    };

    await TestBed.configureTestingModule({
      declarations: [ProductsTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: ProductsService, useValue: productsServiceStub },
        { provide: SearchService, useValue: searchServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
