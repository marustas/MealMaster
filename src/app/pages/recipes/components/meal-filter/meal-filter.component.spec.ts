import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealFilterComponent } from './meal-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('MealFilterComponent', () => {
  let component: MealFilterComponent;
  let fixture: ComponentFixture<MealFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealFilterComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MealFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
