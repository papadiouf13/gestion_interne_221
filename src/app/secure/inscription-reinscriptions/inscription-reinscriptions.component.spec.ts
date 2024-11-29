import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionReinscriptionsComponent } from './inscription-reinscriptions.component';

describe('InscriptionReinscriptionsComponent', () => {
  let component: InscriptionReinscriptionsComponent;
  let fixture: ComponentFixture<InscriptionReinscriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionReinscriptionsComponent]
    });
    fixture = TestBed.createComponent(InscriptionReinscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
