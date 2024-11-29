import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleEnseigneComponent } from './module-enseigne.component';

describe('ModuleEnseigneComponent', () => {
  let component: ModuleEnseigneComponent;
  let fixture: ComponentFixture<ModuleEnseigneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleEnseigneComponent]
    });
    fixture = TestBed.createComponent(ModuleEnseigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
