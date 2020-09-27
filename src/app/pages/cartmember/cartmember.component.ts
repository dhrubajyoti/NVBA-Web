import { Component, OnInit, OnChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { UserService } from './../auth/core/user.service';
declare var paypal;

@Component({
  selector: 'app-cartmember',
  templateUrl: './cartmember.component.html',
  styleUrls: ['./cartmember.component.scss']
})
export class CartmemberComponent implements OnInit {

  member:any;
  expired:any;
  currentDate:any;
  parts:any;


  dataObject :any=[];
  checkObject :any=[];
  cartObject : any=[];
  totalCost: number = 0;
  cartCheck: any;

  private  memberCart = {
    "name": "NVBA Annual Membership",
    "description": "NVBA Annual Membership Fee",
    "quantity": 1,
    "price": 20,
    "tax": 0,
    "sku": "MM2020YY",
    "currency": "USD" 
  }

  constructor(
    private userService: UserService, 
    private cs: CartService, 
    public router: Router, 
  ) { 
    this.cs.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck);
    this.dataObject = this.memberCart;
  }


  ngOnInit(): void {
    this.userService.cast.subscribe( m => {
      this.member = m;
      console.log('this.member page');
      console.log(this.member);
      if(this.member.expires){
      this.parts =this.member.expires.split('-');
      var mydate = new Date(this.parts[0], this.parts[1] - 1, this.parts[2]); 
      this.expired = mydate;
      console.log(mydate);
      this.expired = new Date(this.expired); 
      this.currentDate =  new Date(this.expired) <= new Date() ? 'Expire': 'Valid';
      this.member.membershipstatus = this.currentDate;
      this.userService.updateCurrentUser(this.member)
        .then(res => {
          console.log(res);
        }, err => console.log(err))
      this.expired = this.expired.toDateString();
      }  
      console.log(this.member.expires);
      console.log(this.expired);
      console.log(this.currentDate);
   }) ;
  }





  addToCartobj(){
    this.cs.items = [];
 ///   this.memberCart.tax  = parseFloat(this.memberCart.tax ).toFixed(2);
    this.cs.addToCart(this.memberCart); 
    console.log(this.memberCart);
    this.router.navigate(['/checkout']);
  }

}
