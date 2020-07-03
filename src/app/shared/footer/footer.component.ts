import { Component, OnInit } from '@angular/core';
// import {  IPayPalConfig,  ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
//   public payPalConfig ? : IPayPalConfig;

  constructor() { }

  ngOnInit() {
     //   this.initConfig();
    }

//     private initConfig(): void {
//       this.payPalConfig = {
//           currency: 'USD',
//           clientId: 'AetiN0WEzLhenagSNN0OUycyr93KSpc8Q1QKsLVQs-yqduI8aU4m90k67zRYryPXnP-jXCVKEK8zrXTN',
//           createOrderOnClient: (data) => < ICreateOrderRequest > {
//               intent: 'CAPTURE',
//               purchase_units: [{
//                   amount: {
//                       currency_code: 'USD',
//                       value: '9.99',
//                       breakdown: {
//                           item_total: {
//                               currency_code: 'USD',
//                               value: '9.99'
//                           }
//                       }
//                   },
//                   items: [{
//                       name: 'Enterprise Subscription',
//                       quantity: '1',
//                       category: 'DIGITAL_GOODS',
//                       unit_amount: {
//                           currency_code: 'USD',
//                           value: '9.99',
//                       },
//                   }]
//               }]
//           },
//           advanced: {
//               commit: 'true'
//           },
//           style: {
//               label: 'paypal',
//               layout: 'vertical'
//           },
//           onApprove: (data, actions) => {
//               console.log('onApprove - transaction was approved, but not authorized', data, actions);
//               actions.order.get().then(details => {
//                   console.log('onApprove - you can get full order details inside onApprove: ', details);
//               });

//           },
//           onClientAuthorization: (data) => {
//               console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
//            //   this.showSuccess = true;
//           },
//           onCancel: (data, actions) => {
//               console.log('OnCancel', data, actions);
//          //     this.showCancel = true;

//           },
//           onError: err => {
//               console.log('OnError', err);
//          //     this.showError = true;
//           },
//           onClick: (data, actions) => {
//               console.log('onClick', data, actions);
//           //    this.resetStatus();
//           }
//       };
//   }

}
