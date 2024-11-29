import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementNiveauComponent } from './changement-niveau.component';

describe('ChangementNiveauComponent', () => {
  let component: ChangementNiveauComponent;
  let fixture: ComponentFixture<ChangementNiveauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangementNiveauComponent]
    });
    fixture = TestBed.createComponent(ChangementNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
