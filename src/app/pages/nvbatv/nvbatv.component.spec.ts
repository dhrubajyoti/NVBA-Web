import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvbatvComponent } from './nvbatv.component';

describe('NvbatvComponent', () => {
  let component: NvbatvComponent;
  let fixture: ComponentFixture<NvbatvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvbatvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvbatvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
