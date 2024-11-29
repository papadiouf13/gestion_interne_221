import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiviliteComponent } from './civilite.component';

describe('CiviliteComponent', () => {
  let component: CiviliteComponent;
  let fixture: ComponentFixture<CiviliteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiviliteComponent]
    });
    fixture = TestBed.createComponent(CiviliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
