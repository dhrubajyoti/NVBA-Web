import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulargatewithoutculturalComponent } from './regulargatewithoutcultural.component';

describe('RegulargatewithoutculturalComponent', () => {
  let component: RegulargatewithoutculturalComponent;
  let fixture: ComponentFixture<RegulargatewithoutculturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulargatewithoutculturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulargatewithoutculturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
