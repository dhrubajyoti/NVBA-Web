import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Team20to21Component } from './team20to21.component';

describe('Team20to21Component', () => {
  let component: Team20to21Component;
  let fixture: ComponentFixture<Team20to21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Team20to21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Team20to21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
