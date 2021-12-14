import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberonlykkticketsComponent } from './memberonlykktickets.component';

describe('MemberonlykkticketsComponent', () => {
  let component: MemberonlykkticketsComponent;
  let fixture: ComponentFixture<MemberonlykkticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberonlykkticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberonlykkticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
