import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChhotoderutsavComponent } from './chhotoderutsav.component';

describe('ChhotoderutsavComponent', () => {
  let component: ChhotoderutsavComponent;
  let fixture: ComponentFixture<ChhotoderutsavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChhotoderutsavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChhotoderutsavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
