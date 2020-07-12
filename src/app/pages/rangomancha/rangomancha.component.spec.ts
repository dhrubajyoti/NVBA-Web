import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangomanchaComponent } from './rangomancha.component';

describe('RangomanchaComponent', () => {
  let component: RangomanchaComponent;
  let fixture: ComponentFixture<RangomanchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangomanchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangomanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
