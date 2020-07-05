import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';


declare let paypal:any;

@Component({
  selector: 'app-kobipronam2020',
  templateUrl: './kobipronam2020.component.html',
  styleUrls: ['./kobipronam2020.component.scss']
})
export class Kobipronam2020Component {
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;
  nonVegCount: number = 1;
  vegCount: number = 1;

  // newList = {
  //   "items": [
  //     {
  //       "name": "Food ",
  //       "description": "Brown hat.",
  //       "quantity": 5,
  //       "price": 3,
  //       "tax": "0.01",
  //       "sku": "1",
  //       "currency": "USD"
  //     },
  //     {
  //       "name": "handbag ice",
  //       "description": "Black handbag.",
  //       "quantity": 1,
  //       "price": 15,
  //       "tax": "0.02",
  //       "sku": "product34",
  //       "currency": "USD"
  //     },    
  //     {
  //        "name":"Veg",
  //        "description":"Veg Manchurian,Veg Spring Roll, Veg Fried Rice, Veg Noodles ",
  //        "quantity": 2,
  //        "price": 10,
  //        "tax":"0.00",
  //        "sku":"202001",
  //        "currency":"USD"
  //     },
  //     {
  //        "name":"Non-Veg",
  //        "description":"Chicken Manchurian, Veg Spring Roll, Veg Fried Rice, Veg Noodles ",
  //        "quantity": 3,
  //        "price":13,
  //        "tax":"0.00",
  //        "sku":"202002",
  //        "currency":"USD"
  //     }
  //  ]
  //   // ,
  //   // "shipping_address": {
  //   //   "recipient_name": "DJ",
  //   //   "line1": "4th Floor",
  //   //   "line2": "Unit #34",
  //   //   "city": "Kolkata",
  //   //   "country_code": "US",
  //   //   "postal_code": "95131",
  //   //   "phone": "011862212345678",
  //   //   "state": "CA"
  //   // }
  // };

  constructor() { }
 
  //  paypalConfig = {
  //   env: 'sandbox',
  //   client: {
  //     sandbox: 'AeLhWUCfC2jHOZv7b-KDfZV6R6Mig-2FklW6iIxsuI0UROww652TU9SlVPHyW1ygMGohQo21TfXUVPrz',
  //     production: '<your-production-key here>'
  //   },
  //   commit: true,
  //   payment: (data, actions) => {
  //     return actions.payment.create({
  //       payment: {
  //         transactions: [ 
  //           {
  //             "amount": {
  //               "total": "89.11",
  //               "currency": "USD",
  //               "details": {
  //                 "subtotal": "89.00",
  //                 "tax": "0.07",
  //                 "shipping": "0.03",
  //                 "handling_fee": "1.00",
  //                 "shipping_discount": "-1.00",
  //                 "insurance": "0.01"
  //               }
  //             },
  //             "description": "The payment transaction description.",
  //             "custom": "EBAY_EMS_90048630024435",
  //             "invoice_number": "48787589673",
  //             "payment_options": {
  //               "allowed_payment_method": "INSTANT_FUNDING_SOURCE"
  //             },
  //             "soft_descriptor": "ECHI5786786",
  //             "item_list": this.newList,
  //           }
  //         ]
  //       }
  //     });
  //   },
  //   onAuthorize: (data, actions) => {
  //     return actions.payment.execute().then((payment) => {
  //       //Do something when payment is successful.
  //     })
  //   }
  // };
 
  // ngAfterViewChecked(): void {
    
  //    this.finalAmount = ((this.nonVegCount * 13)+(this.vegCount * 11)) * 1.06; 

     
  //   if (!this.addScript) {
  //     this.addPaypalScript().then(() => {
  //       paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
  //       this.paypalLoad = false;
  //     })
  //   }
  // }
  
  // addPaypalScript() {
  //   this.addScript = true;
  //   return new Promise((resolve, reject) => {
  //     let scripttagElement = document.createElement('script');    
  //     scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
  //     scripttagElement.onload = resolve;
  //     document.body.appendChild(scripttagElement);
  //   })
  // }


}
