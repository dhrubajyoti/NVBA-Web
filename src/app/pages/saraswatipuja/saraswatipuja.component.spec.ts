import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaraswatipujaComponent } from './saraswatipuja.component';

describe('SaraswatipujaComponent', () => {
  let component: SaraswatipujaComponent;
  let fixture: ComponentFixture<SaraswatipujaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaraswatipujaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaraswatipujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
