import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursEleveComponent } from './parcours-eleve.component';

describe('ParcoursEleveComponent', () => {
  let component: ParcoursEleveComponent;
  let fixture: ComponentFixture<ParcoursEleveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcoursEleveComponent]
    });
    fixture = TestBed.createComponent(ParcoursEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
