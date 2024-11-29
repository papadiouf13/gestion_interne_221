import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineSpecialiteComponent } from './domaine-specialite.component';

describe('DomaineSpecialiteComponent', () => {
  let component: DomaineSpecialiteComponent;
  let fixture: ComponentFixture<DomaineSpecialiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomaineSpecialiteComponent]
    });
    fixture = TestBed.createComponent(DomaineSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
