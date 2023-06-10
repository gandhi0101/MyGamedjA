import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcenasComponent } from './ecenas.component';

describe('EcenasComponent', () => {
  let component: EcenasComponent;
  let fixture: ComponentFixture<EcenasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcenasComponent]
    });
    fixture = TestBed.createComponent(EcenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
