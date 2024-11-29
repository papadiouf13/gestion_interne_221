import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesClassesComponent } from './ses-classes.component';

describe('SesClassesComponent', () => {
  let component: SesClassesComponent;
  let fixture: ComponentFixture<SesClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SesClassesComponent]
    });
    fixture = TestBed.createComponent(SesClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
