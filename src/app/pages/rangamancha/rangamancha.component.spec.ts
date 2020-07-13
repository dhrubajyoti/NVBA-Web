import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangamanchaComponent } from './rangamancha.component';

describe('RangamanchaComponent', () => {
  let component: RangamanchaComponent;
  let fixture: ComponentFixture<RangamanchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangamanchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangamanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
