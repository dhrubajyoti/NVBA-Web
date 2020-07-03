import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';


declare let paypal:any;

@Component({
  selector: 'app-kobipronam2020',
  templateUrl: './kobipronam2020.component.html',
  styleUrls: ['./kobipronam2020.component.scss']
})
export class Kobipronam2020Component implements AfterViewChecked {
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;
  nonVegCount: number = 1;
  vegCount: number = 1;

  constructor() { }
 
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
            { amount: { 
              total: this.finalAmount, 
              currency: 'USD' 
              } 
            }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };
 
  ngAfterViewChecked(): void {
    
     this.finalAmount = ((this.nonVegCount * 13)+(this.vegCount * 11)) * 1.06; 
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }


}
