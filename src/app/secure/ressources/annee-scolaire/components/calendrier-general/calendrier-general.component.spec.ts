import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierGeneralComponent } from './calendrier-general.component';

describe('CalendrierGeneralComponent', () => {
  let component: CalendrierGeneralComponent;
  let fixture: ComponentFixture<CalendrierGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendrierGeneralComponent]
    });
    fixture = TestBed.createComponent(CalendrierGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
