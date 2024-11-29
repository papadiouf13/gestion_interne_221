import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeScolComponent } from './annee-scol.component';

describe('AnneeScolComponent', () => {
  let component: AnneeScolComponent;
  let fixture: ComponentFixture<AnneeScolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnneeScolComponent]
    });
    fixture = TestBed.createComponent(AnneeScolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
