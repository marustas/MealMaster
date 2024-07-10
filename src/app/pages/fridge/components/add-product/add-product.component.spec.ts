import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsService } from '../../services/products.service';
import { AddProductComponent } from './add-product.component';
import { HttpClientModule } from '@angular/common/http';

class MockProductService {
  currentLength = 100;
}

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let formBuilder: FormBuilder;
  let mockProductService: MockProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, HttpClientModule],
      declarations: [AddProductComponent],
      providers: [{ provide: ProductsService, useClass: MockProductService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
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
    expect(product.id).toBeGreaterThanOrEqual(mockProductService?.currentLength);
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
