import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgapuja2021Component } from './durgapuja2021.component';

describe('Durgapuja2021Component', () => {
  let component: Durgapuja2021Component;
  let fixture: ComponentFixture<Durgapuja2021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Durgapuja2021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Durgapuja2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
