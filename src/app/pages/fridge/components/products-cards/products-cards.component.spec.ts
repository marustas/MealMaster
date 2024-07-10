import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCardsComponent } from './products-cards.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsCardsComponent', () => {
  let component: ProductsCardsComponent;
  let fixture: ComponentFixture<ProductsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsCardsComponent],
      providers: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
