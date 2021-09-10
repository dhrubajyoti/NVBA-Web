import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlybirdwithoutculturalComponent } from './earlybirdwithoutcultural.component';

describe('EarlybirdwithoutculturalComponent', () => {
  let component: EarlybirdwithoutculturalComponent;
  let fixture: ComponentFixture<EarlybirdwithoutculturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlybirdwithoutculturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlybirdwithoutculturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
