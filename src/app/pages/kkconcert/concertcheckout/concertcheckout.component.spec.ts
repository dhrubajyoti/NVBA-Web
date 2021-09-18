import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertcheckoutComponent } from './concertcheckout.component';

describe('ConcertcheckoutComponent', () => {
  let component: ConcertcheckoutComponent;
  let fixture: ComponentFixture<ConcertcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
