import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviEvenementComponent } from './suivi-evenement.component';

describe('SuiviEvenementComponent', () => {
  let component: SuiviEvenementComponent;
  let fixture: ComponentFixture<SuiviEvenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviEvenementComponent]
    });
    fixture = TestBed.createComponent(SuiviEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
