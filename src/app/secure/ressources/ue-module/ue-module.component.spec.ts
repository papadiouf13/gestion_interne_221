import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeModuleComponent } from './ue-module.component';

describe('UeModuleComponent', () => {
  let component: UeModuleComponent;
  let fixture: ComponentFixture<UeModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UeModuleComponent]
    });
    fixture = TestBed.createComponent(UeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
