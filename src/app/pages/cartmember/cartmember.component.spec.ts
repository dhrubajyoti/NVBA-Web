import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartmemberComponent } from './cartmember.component';

describe('CartmemberComponent', () => {
  let component: CartmemberComponent;
  let fixture: ComponentFixture<CartmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
