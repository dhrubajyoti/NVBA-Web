import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaresComponent } from './cares.component';

describe('CaresComponent', () => {
  let component: CaresComponent;
  let fixture: ComponentFixture<CaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
