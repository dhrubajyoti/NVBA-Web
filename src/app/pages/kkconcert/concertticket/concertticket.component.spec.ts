import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertticketComponent } from './concertticket.component';

describe('ConcertticketComponent', () => {
  let component: ConcertticketComponent;
  let fixture: ComponentFixture<ConcertticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
