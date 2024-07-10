import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCardsComponent } from './products-cards.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchService } from '../../services/search.service';
import { of } from 'rxjs';

describe('ProductsCardsComponent', () => {
  let component: ProductsCardsComponent;
  let fixture: ComponentFixture<ProductsCardsComponent>;

  let searchServiceStub: Partial<SearchService>;

  searchServiceStub = {
    searchQuery$: of(''),
    searchProducts: jest.fn().mockReturnValue(of([])),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsCardsComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: SearchService, useValue: searchServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
