import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientComponent } from './recipe-ingredient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecipeIngredientComponent', () => {
  let component: RecipeIngredientComponent;
  let fixture: ComponentFixture<RecipeIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeIngredientComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
