import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailarchiveComponent } from './emailarchive.component';

describe('EmailarchiveComponent', () => {
  let component: EmailarchiveComponent;
  let fixture: ComponentFixture<EmailarchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailarchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
