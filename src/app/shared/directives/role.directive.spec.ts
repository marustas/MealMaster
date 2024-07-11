import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { RoleDirective } from './role.directive';
import { AuthService } from '../services/auth.service';

class MockAuthService {
  roleState$ = new BehaviorSubject<string>('admin');
}

@Component({
  template: `<div *appRole="'admin'">Admin Content</div>`,
})
class TestComponent {}

describe('RoleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let authService: MockAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleDirective, TestComponent],
      providers: [{ provide: AuthService, useClass: MockAuthService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    authService = TestBed.inject(AuthService) as unknown as MockAuthService;
  });

  it('should create an instance', () => {
    const directive = new RoleDirective(
      fixture.debugElement.injector.get(TemplateRef),
      fixture.debugElement.injector.get(ViewContainerRef),
      authService as unknown as AuthService
    );
    expect(directive).toBeTruthy();
  });

  it('should display content for admin role', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain('Admin Content');
  });

  it('should not display content for non-admin role', () => {
    authService.roleState$.next('user');
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).not.toContain('Admin Content');
  });
});
