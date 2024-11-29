import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheEmargementComponent } from './fiche-emargement.component';

describe('FicheEmargementComponent', () => {
  let component: FicheEmargementComponent;
  let fixture: ComponentFixture<FicheEmargementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheEmargementComponent]
    });
    fixture = TestBed.createComponent(FicheEmargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
