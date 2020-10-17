import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartnonmemberComponent } from './cartnonmember.component';

describe('CartnonmemberComponent', () => {
  let component: CartnonmemberComponent;
  let fixture: ComponentFixture<CartnonmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartnonmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartnonmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
