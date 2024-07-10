import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatsComponent } from './user-stats.component';

describe('UserStatsComponent', () => {
  let component: UserStatsComponent;
  let fixture: ComponentFixture<UserStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserStatsComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(UserStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make subtextColor green if exceedsGoal is false', () => {
    component.currentCalories = 1500;
    component.calorieGoal = 2000;
    fixture.detectChanges();
    expect(component.currentCaloriePercentage).toBe(75);
    expect(component.exceedGoal).toBe(false);
    expect(component.subtextColor).toBe('#399a18');
  });

  it('should make subtextColor red if exceedsGoal is true', () => {
    component.currentCalories = 1500;
    component.calorieGoal = 1000;
    fixture.detectChanges();

    expect(component.currentCaloriePercentage).toBe(150);
    expect(component.exceedGoal).toBe(true);
    expect(component.subtextColor).toBe('#f61616');
  });
});
