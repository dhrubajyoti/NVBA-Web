import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
declare let paypal: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  totalValue:number = 0.00;

  errorMessage: string = '';
  successMessage: string = '';

 

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log(this.items);
    console.log(this.calculation());
    
  ///  alert(this.items);
  }

  // ngAfterViewChecked(): void {
  //   this.initConfig(String(this.totalValue));
  // }

 calculation(){
    this.items.forEach( (element) => {
      this.totalValue += element.total;
    });
    return this.totalValue;
 }

//  checkoutpay(){
//   this.initConfig(String(this.totalValue));
//  }

//  removeItem(key){
//   delete this.items[key];
//   this.calculation();
//   // this.items.forEach( (item, index) => {
//   //   if(item === doc) this.items.splice(index,1);
//   // });
// }



// private initConfig(price: string): void {
//   this.payPalConfig = {
//       currency: 'USD',
//       clientId: 'AetiN0WEzLhenagSNN0OUycyr93KSpc8Q1QKsLVQs-yqduI8aU4m90k67zRYryPXnP-jXCVKEK8zrXTN',
//       createOrderOnClient: (data) => < ICreateOrderRequest > {
//           intent: 'CAPTURE',
//           purchase_units: [{
//               amount: {
//                   currency_code: 'USD',
//                   value: price,
//                   breakdown: {
//                       item_total: {
//                           currency_code: 'USD',
//                           value: price,
//                       }
//                   }
//               },
//               items: this.items
//           }]
//       },
//       advanced: {
//           commit: 'true'
//       },
//       style: {
//           label: 'paypal',
//           layout: 'vertical'
//       },
//       onApprove: (data, actions) => {
//           console.log('onApprove - transaction was approved, but not authorized', data, actions);
//           actions.order.get().then(details => {
//               console.log('onApprove - you can get full order details inside onApprove: ', details);
//           });

//       },
//       onClientAuthorization: (data) => {
//           console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
//        //   this.showSuccess = true;
//       },
//       onCancel: (data, actions) => {
//           console.log('OnCancel', data, actions);
//      //     this.showCancel = true;

//       },
//       onError: err => {
//           console.log('OnError', err);
//      //     this.showError = true;
//       },
//       onClick: (data, actions) => {
//           console.log('onClick', data, actions);
//       //    this.resetStatus();
//       }
//   };
// }
  




addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = this.totalValue;
 
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AetiN0WEzLhenagSNN0OUycyr93KSpc8Q1QKsLVQs-yqduI8aU4m90k67zRYryPXnP-jXCVKEK8zrXTN',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.errorMessage = '';
        this.successMessage = 'Your Payment Transaction Authorize and Approved. Thank you for Payment.';
      })
    },
    onApprove:(data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
              actions.order.get().then(details => {
                  console.log('onApprove - you can get full order details inside onApprove: ', details);
              });
                this.errorMessage = '';
              this.successMessage = 'Transaction was approved, but not authorized';
    },
    onCancel:(data, actions) =>{
      console.log('OnCancel', data, actions);
      this.successMessage = '';
      this.errorMessage = 'Your Payment Transaction Cancel. Please try Again.';
    },
    onClick: (data, actions) => {
        console.log('onClick', data, actions);
    //    this.resetStatus();
    },
    onError: err => {
        console.log('OnError', err);
        this.successMessage = '';
        this.errorMessage = err.message;
  //     this.showError = true;
    },
  };
 
  ngAfterViewChecked(): void {
    this.finalAmount = this.totalValue;
    if (!this.addScript && this.totalValue ) {
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
