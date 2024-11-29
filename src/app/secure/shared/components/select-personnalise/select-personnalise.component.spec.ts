import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPersonnaliseComponent } from './select-personnalise.component';

describe('SelectPersonnaliseComponent', () => {
  let component: SelectPersonnaliseComponent;
  let fixture: ComponentFixture<SelectPersonnaliseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPersonnaliseComponent]
    });
    fixture = TestBed.createComponent(SelectPersonnaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
