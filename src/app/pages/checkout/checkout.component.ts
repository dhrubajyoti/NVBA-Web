import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService} from '../../services/cart.service';
import { MemberDetailsService } from './../../services/member-details.service';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Location} from "@angular/common";
import { Router } from '@angular/router';

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

  userDetails: any;

  constructor( 
    private cart: CartService, 
    private toastr: ToastrService,
    private ar: ActivatedRoute,
    private mds: MemberDetailsService,
    private location: Location,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.cart.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck);
  //  console.log(this.cartCheck);
    [...this.cartCheck].forEach(value => {
      // console.log(value.quantity);
      // console.log(value);
      if(value.quantity){
       this.subtotal += (value.price * value.quantity);
       this.tax =  + parseFloat(value.tax).toFixed(2);
       this.emptyCart = false;
      //  console.log('this.emptyCart');
      //  console.log(this.emptyCart);
     } 
    });
    // console.log('Total');
    // console.log(this.subtotal);
    // console.log(this.tax);
    // console.log('this.cartCheck');
    // console.log(this.cartCheck);

    this.ar.data.subscribe(routeData => {
      this.userDetails = routeData['data'];
   //   console.log(this.userDetails);
    });

  }

  ngAfterViewInit(): void {

    if(this.cartCheck){
      if (!this.addScript) {
        this.addPaypalScript().then(() => {
          paypal.Button.render(this.paypalConfig, '#paypal-button-container');
          this.paypalLoad = false;
      //    console.log(this.paypalConfig);  
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
   //   console.log(scripttagElement);
    })
  } // End of AddPaypalScript


  paypalConfig = {
  //  env: 'sandbox',
    env: 'production',
    client: {
  //    sandbox: 'AeLhWUCfC2jHOZv7b-KDfZV6R6Mig-2FklW6iIxsuI0UROww652TU9SlVPHyW1ygMGohQo21TfXUVPrz',
      production: 'AVBsfj0Jw-jl5_63BPGwuduCaKDsPvbz1pwyqECm7N5FzKEi1Q_o-xQAiM_BTzQhAW064uAPf1v9uZdS'
    },
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',
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
              "description": "NVBA Website Payment.", 
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
        // console.log(payment);
        // console.log('Payment Done');
        // console.log(this.cartCheck);
        let paymentTrans = {...payment};
      //  this.userDetails = ( paymentTrans);
      //  let pt = {paymant:""};
     //   let v = { ...this.userDetails, ...pt } 
       if(!this.userDetails.payments){
        this.userDetails.payments = [];
      //  console.log('First Time');
       }
        
        this.userDetails.payments.unshift(paymentTrans);
        // Add Membership Details Start
        if( payment.transactions[0].item_list.items[0].name == 'NVBA Annual Membership' ){
           let newdate;
           if(this.userDetails.expires){
             newdate = new Date(new Date().setFullYear(new Date(this.userDetails.expires).getFullYear() + 1))
            //  alert(newdate);
           }
           else{
            newdate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
           }
           this.userDetails.expires = newdate.toISOString().split('T')[0];
        } // Add Membership Details End
          
        if(!this.userDetails.purchase){
            this.userDetails.purchase = [];
         //   console.log('First Time purchase');
        }
        this.userDetails.purchase.unshift(this.cartCheck);
        this.mds.updateCustomer(this.userDetails);
        this.toastr.success('Your payment is successful.');
        this.userDetails.purchase.unshift(this.cart);
        this.cart.clearCart();
        this.cleanup();
        this.router.navigate(['/user'])
      })
    }
  };

  goBack(){
      this.location.back();
  }

  cleanup(){
    this.cartCheck = [];
    this.subtotal = 0;
    this.tax= 0;
    this.emptyCart= true;
  }

}
