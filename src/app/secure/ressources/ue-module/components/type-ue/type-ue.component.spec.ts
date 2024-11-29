import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeUeComponent } from './type-ue.component';

describe('TypeUeComponent', () => {
  let component: TypeUeComponent;
  let fixture: ComponentFixture<TypeUeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeUeComponent]
    });
    fixture = TestBed.createComponent(TypeUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
