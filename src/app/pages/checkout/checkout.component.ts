import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService} from '../../services/cart.service';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


declare let paypal:any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, AfterViewInit {
  cartCheck: any;
  subtotal: number = 0;
  tax: number = 0;
  addScript: boolean = false;
  paypalLoad: boolean = true;
  emptyCart: boolean = true;


  constructor( private cart: CartService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.cart.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck)
    console.log(this.cartCheck);
    [...this.cartCheck].forEach(value => {
      console.log(value.quantity);
      console.log(value);
      if(value.quantity){
       this.subtotal += (value.price * value.quantity);
       this.tax =  + parseFloat(value.tax).toFixed(2);
       this.emptyCart = false;
       console.log('this.emptyCart');
       console.log(this.emptyCart);
     } 
    });
    console.log('Total');
    console.log(this.subtotal);
    console.log(this.tax);
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
                "total": (this.subtotal + this.tax),
                "currency": "USD",
                "details": {
                  "subtotal": this.subtotal,
                  "tax": this.tax
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
        this.toastr.success('Your payment is successful.');
        this.cart.clearCart();
        this.cleanup();
      })
    }
  };


  cleanup(){
    this.cartCheck = [];
    this.subtotal = 0;
    this.tax= 0;
    this.emptyCart= true;
  }

}
