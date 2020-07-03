import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kobipronam2020Component } from './kobipronam2020.component';

describe('Kobipronam2020Component', () => {
  let component: Kobipronam2020Component;
  let fixture: ComponentFixture<Kobipronam2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kobipronam2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kobipronam2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
