import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventticketsComponent } from './eventtickets.component';

describe('EventticketsComponent', () => {
  let component: EventticketsComponent;
  let fixture: ComponentFixture<EventticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
