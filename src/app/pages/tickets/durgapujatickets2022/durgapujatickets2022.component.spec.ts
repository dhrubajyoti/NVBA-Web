import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgapujatickets2022Component } from './durgapujatickets2022.component';

describe('Durgapujatickets2022Component', () => {
  let component: Durgapujatickets2022Component;
  let fixture: ComponentFixture<Durgapujatickets2022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Durgapujatickets2022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Durgapujatickets2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
