import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulargateComponent } from './regulargate.component';

describe('RegulargateComponent', () => {
  let component: RegulargateComponent;
  let fixture: ComponentFixture<RegulargateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulargateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulargateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
