import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { AddProductComponent } from './add-product.component';
import { ProductUnitComponent } from '../product-unit/product-unit.component';

class MockProductService {
  currentLength = 100;
  addProduct = jest.fn();
  changeProduct = jest.fn();
  getProduct = jest.fn().mockReturnValue(of({ name: 'Test Product', expiresAt: '', quantity: '100 g' }));
}

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let formBuilder: FormBuilder;
  let mockProductService: MockProductService;

  beforeEach(async () => {
    mockProductService = new MockProductService();

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [AddProductComponent, ProductUnitComponent],
      providers: [FormBuilder, { provide: ProductsService, useValue: mockProductService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create expiration date if none provided', () => {
    component.productForm = formBuilder.group({
      name: ['Test Product'],
      expiresAt: [''],
      quantity: ['100 g'],
    });
    component.productID = '';

    const product = (component as any).buildProduct();

    expect(product.name).toBe('Test Product');
    expect(product.quantity).toBe('100 g');
    expect(product.expiresAt).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
    expect(product.id).toBeGreaterThanOrEqual(mockProductService.currentLength);
  });

  it('should keep the productID if provided', () => {
    component.productForm = formBuilder.group({
      name: ['Test Product'],
      expiresAt: [''],
      quantity: ['100 g'],
    });
    component.productID = '123';

    const product = (component as any).buildProduct();

    expect(product.id).toBe(123);
    expect(product.name).toBe('Test Product');
    expect(product.quantity).toBe('100 g');
    expect(product.expiresAt).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });

  it('should create a productID if none is provided', () => {
    component.productForm = formBuilder.group({
      name: ['Test Product'],
      expiresAt: [''],
      quantity: ['100 g'],
    });
    component.productID = '';

    const product = (component as any).buildProduct();

    expect(product.id).toBeGreaterThanOrEqual(mockProductService.currentLength);
    expect(product.name).toBe('Test Product');
    expect(product.quantity).toBe('100 g');
    expect(product.expiresAt).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });

  it('should convert "N/A" quantity to " "', () => {
    component.productForm = formBuilder.group({
      name: ['Test Product'],
      expiresAt: [''],
      quantity: ['100 N/A'],
    });
    component.productID = '';

    const product = (component as any).buildProduct();

    expect(product.quantity).toBe('100');
  });

  it('should handle "undefined" quantity to " "', () => {
    component.productForm = formBuilder.group({
      name: ['Test Product'],
      expiresAt: [''],
      quantity: ['100 undefined'],
    });
    component.productID = '';

    const product = (component as any).buildProduct();

    expect(product.quantity).toBe('100');
  });
});
