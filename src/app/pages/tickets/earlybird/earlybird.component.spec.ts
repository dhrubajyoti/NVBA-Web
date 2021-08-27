import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlybirdComponent } from './earlybird.component';

describe('EarlybirdComponent', () => {
  let component: EarlybirdComponent;
  let fixture: ComponentFixture<EarlybirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlybirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlybirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
