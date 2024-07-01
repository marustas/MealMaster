import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeExtendedComponent } from './recipe-extended.component';

describe('RecipeExtendedComponent', () => {
  let component: RecipeExtendedComponent;
  let fixture: ComponentFixture<RecipeExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeExtendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
