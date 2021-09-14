import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmorekkticketsComponent } from './addmorekktickets.component';

describe('AddmorekkticketsComponent', () => {
  let component: AddmorekkticketsComponent;
  let fixture: ComponentFixture<AddmorekkticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmorekkticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmorekkticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
