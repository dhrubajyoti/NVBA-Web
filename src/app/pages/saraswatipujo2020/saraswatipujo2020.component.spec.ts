import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saraswatipujo2020Component } from './saraswatipujo2020.component';

describe('Saraswatipujo2020Component', () => {
  let component: Saraswatipujo2020Component;
  let fixture: ComponentFixture<Saraswatipujo2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saraswatipujo2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saraswatipujo2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
