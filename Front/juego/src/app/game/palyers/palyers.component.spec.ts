import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalyersComponent } from './palyers.component';

describe('PalyersComponent', () => {
  let component: PalyersComponent;
  let fixture: ComponentFixture<PalyersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalyersComponent]
    });
    fixture = TestBed.createComponent(PalyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
