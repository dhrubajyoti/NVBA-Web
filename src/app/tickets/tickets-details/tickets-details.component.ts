import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tickets-details',
  templateUrl: './tickets-details.component.html',
  styleUrls: ['./tickets-details.component.scss']
})
export class TicketsDetailsComponent implements OnInit {
    products = products;
    constructor( private cartService: CartService ) { }

    adultTotal ;
    childrenTotal;
    childTotal;
    studentTotal;
    visitorTotal;
    membershipTotal;

    total = 0;

  ngOnInit() {
  }

  onClickSubmitAudult(formData) { 
    formData.category = 'adult',
    formData.name = 'Adult 18+ years';
    formData.value = 30
    this.adultTotal = 30 * formData.adultQuantity;
    formData.total = this.adultTotal;
    this.cartService.addToCart(formData);
 }

 onClickSubmitChildren(formData) { 
  formData.category = 'children',
  formData.name = 'Children 10-18 years';
  formData.value = 10;
  this.childrenTotal = 10 * formData.childrenQuantity;
  formData.total = this.childrenTotal;
  this.cartService.addToCart(formData);
}

onClickSubmitChild(formData) { 
  formData.category = 'child',
  formData.name = 'Child under 10 Free';
  formData.value = 0;
  this.childTotal = 0 * formData.childQuantity;
  formData.total = this.childTotal;
  this.cartService.addToCart(formData);
}


onClickSubmitStudent(formData) { 
  formData.category = 'student',
  formData.name = 'Student ';
  formData.value = 20;
  this.studentTotal =20 * formData.studentQuantity;
  formData.total = this.studentTotal;
  this.cartService.addToCart(formData);
}

onClickSubmitVisior(formData) { 
  formData.category = 'visitor',
  formData.name = 'Parents visitig to your place.';
  formData.value = 30;
  this.visitorTotal =20 * formData.visitorQuantity;
  formData.total = this.visitorTotal;
  this.cartService.addToCart(formData);
}

onClickSubmitMembership(formData){
  formData.category = 'membership',
  formData.quantity = 1,
  formData.name = 'Membership.';
  formData.value = 20;
  this.membershipTotal =20 ;
  formData.total = 20;
  this.cartService.addToCart(formData);
}

  

//   share() {
//     window.alert('The product has been shared!');
//   }

//   onNotify() {
//     window.alert('You will be notified when the product goes on sale');
//   }

//   addToCart(product) {
//     window.alert('Your product has been added to the cart!');
//     this.cartService.addToCart(product);
//   }

//   onClickSubmit( n ,formData) { console.log(formData);
//     alert('Your Email is : ' + formData.email);
//     this.cartService.addToCart(formData);
//  }

}


// items: [{
//   name: 'Enterprise Subscription',
//   quantity: '1',
//   category: 'DIGITAL_GOODS',
//   unit_amount: {
//       currency_code: 'USD',
//       value: '9.99',
//   },
// }]