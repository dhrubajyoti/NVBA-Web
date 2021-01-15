import { Component, OnInit, OnChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { UserService } from './../auth/core/user.service';
declare var paypal;

@Component({
  selector: 'app-cartnonmember',
  templateUrl: './cartnonmember.component.html',
  styleUrls: ['./cartnonmember.component.scss']
})
export class CartnonmemberComponent implements OnInit {

  member:any;
  expired:any;
  currentDate:any;
  parts:any;


  dataObject :any=[];
  checkObject :any=[];
  cartObject : any=[];
  totalCost: number = 0;
  cartCheck: any;

  private  nonmemberCart = {
    "name": "Non-Member Concert ticket",
    "description": "Ticket for Anweshaa/Jolly Mukherjee/Usha Uthup Concerts",
    "quantity": 1,
    "price": 35,
    "tax": 0,
    "sku": "NM2020CT",
    "currency": "USD" 
  }

  constructor(
    private userService: UserService, 
    private cs: CartService, 
    public router: Router, 
  ) { 
    this.cs.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck);
    this.dataObject = this.nonmemberCart;
  }

  ngOnInit(): void {
  }

  addToCartobj(){
    this.cs.items = [];
 ///   this.memberCart.tax  = parseFloat(this.memberCart.tax ).toFixed(2);
    this.cs.addToCart(this.nonmemberCart); 
    console.log(this.nonmemberCart);
    this.router.navigate(['/checkout']);
  }

}
