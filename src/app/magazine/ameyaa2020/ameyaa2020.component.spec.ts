import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ameyaa2020Component } from './ameyaa2020.component';

describe('Ameyaa2020Component', () => {
  let component: Ameyaa2020Component;
  let fixture: ComponentFixture<Ameyaa2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ameyaa2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ameyaa2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
