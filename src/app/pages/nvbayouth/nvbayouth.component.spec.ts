import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvbayouthComponent } from './nvbayouth.component';

describe('NvbayouthComponent', () => {
  let component: NvbayouthComponent;
  let fixture: ComponentFixture<NvbayouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvbayouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvbayouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
