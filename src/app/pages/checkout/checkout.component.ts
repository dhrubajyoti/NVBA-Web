import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService} from '../../services/cart.service';
import { from } from 'rxjs';


declare let paypal:any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, AfterViewInit {
  cartCheck: any;
  newList: any;
  total: number = 0;
  addScript: boolean = false;
  paypalLoad: boolean = true;


  constructor( private cart: CartService) {}

  ngOnInit(): void {
    this.cart.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck)
    console.log(this.cartCheck);
    this.cartCheck.forEach(value => {
      console.log(value.quantity);
      console.log(value);
      if(value.quantity){
       this.total += (value.price * value.quantity);
       
     } 
    });
    console.log('Total');
    console.log(this.total);
    console.log('this.cartCheck');
    console.log(this.cartCheck);
  }

  ngAfterViewInit(): void {

    if(this.cartCheck){
      if (!this.addScript) {
        this.addPaypalScript().then(() => {
          paypal.Button.render(this.paypalConfig, '#paypal-button-container');
          this.paypalLoad = false;
          console.log(this.paypalConfig);  
        })
      }
    }
    

  }  // End of ngAfterViewInit

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
      console.log(scripttagElement);
    })
  } // End of AddPaypalScript

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AeLhWUCfC2jHOZv7b-KDfZV6R6Mig-2FklW6iIxsuI0UROww652TU9SlVPHyW1ygMGohQo21TfXUVPrz',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [ 
            {
              "amount": {
                "total": (this.total * 1.06),
                "currency": "USD",
                "details": {
                  "subtotal": this.total,
                  "tax": (this.total * 0.06)
                }
              },
              "description": "Kobi Pronam Dinner.", 
              "item_list": {
                "items": this.cartCheck
              }  
            }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
        console.log('Payment Done');
      })
    }
  };



}
