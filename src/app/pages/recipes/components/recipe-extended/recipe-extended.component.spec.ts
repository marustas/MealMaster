import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeExtendedComponent } from './recipe-extended.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecipeExtendedComponent', () => {
  let component: RecipeExtendedComponent;
  let fixture: ComponentFixture<RecipeExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeExtendedComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
