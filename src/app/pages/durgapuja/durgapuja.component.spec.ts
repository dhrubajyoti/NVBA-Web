import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurgapujaComponent } from './durgapuja.component';

describe('DurgapujaComponent', () => {
  let component: DurgapujaComponent;
  let fixture: ComponentFixture<DurgapujaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurgapujaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurgapujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
