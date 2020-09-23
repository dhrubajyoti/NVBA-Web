import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgapuja2020Component } from './durgapuja2020.component';

describe('Durgapuja2020Component', () => {
  let component: Durgapuja2020Component;
  let fixture: ComponentFixture<Durgapuja2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Durgapuja2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Durgapuja2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
