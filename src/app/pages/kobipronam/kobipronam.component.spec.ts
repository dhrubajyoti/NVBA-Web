import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KobipronamComponent } from './kobipronam.component';

describe('KobipronamComponent', () => {
  let component: KobipronamComponent;
  let fixture: ComponentFixture<KobipronamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KobipronamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KobipronamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
