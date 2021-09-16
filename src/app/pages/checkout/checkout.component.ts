import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService} from '../../services/cart.service';
import { MemberDetailsService } from './../../services/member-details.service';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Location} from "@angular/common";
import { Router } from '@angular/router';
import { UserService } from './../auth/core/user.service';

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

  member:any;

  userDetails: any;
  move:boolean = false;

  constructor( 
    private cart: CartService, 
    private toastr: ToastrService,
    private ar: ActivatedRoute,
    private mds: MemberDetailsService,
    private location: Location,
    private router: Router,
    private userService: UserService
    ) {

      this.userService.cast.subscribe( m => {
        this.member = m;
        console.log(this.member);
      });

    }

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
      console.log(this.userDetails);
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
    env: 'sandbox',
  //  env: 'production',
    client: {
      sandbox: 'AeLhWUCfC2jHOZv7b-KDfZV6R6Mig-2FklW6iIxsuI0UROww652TU9SlVPHyW1ygMGohQo21TfXUVPrz',
  //    production: 'AVBsfj0Jw-jl5_63BPGwuduCaKDsPvbz1pwyqECm7N5FzKEi1Q_o-xQAiM_BTzQhAW064uAPf1v9uZdS'
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
        let paymentTrans = {...payment};

        //Do something when payment is successful.
         console.log(payment);
         console.log(this.member);
         

         this.toastr.success('Your payment is successful.');
        
         if(this.member.email){

            if(!this.member.payments){
              this.member.payments = [];
              console.log('First Time');
            }
            this.member.payments.unshift(paymentTrans);
            this.updateMemberDetailsFun(payment);
            if(!this.member.purchase){
                this.member.purchase = [];
            //   console.log('First Time purchase');
            }
            this.member.purchase.unshift(this.cartCheck);
            this.mds.updateCustomer(this.member);
            this.mds.addPayments(payment) ;
         }
         else{
          console.log('in Else');
          this.mds.addPayments(payment) ;
         }
        
     
           this.cart.clearCart();
           this.cleanup();
          // this.router.navigate(['/durgapuja2020']);

          setTimeout(()=>{                           
            this.router.navigate(['/durgapuja2021']);
          }, 6000);
          

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


  updateMemberDetailsFun(payment){
    // Add Membership Details Start
      if( payment.transactions[0].item_list.items[0].name == 'NVBA Annual Membership' ){
          let newdate;
          if(this.member.expires){
      //   newdate = new Date(new Date().setFullYear(new Date(this.member.expires).getFullYear() + 1))
           newdate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
       //     alert('If = '+newdate);
          }
          else{
          newdate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
       //   alert('else = '+newdate);
          }
          this.member.expires = newdate.toISOString().split('T')[0];
          this.member.membershipstatus = 'Valid';
      } // Add Membership Details End

          // Add Non-Membership Ticket Details 
          if( payment.transactions[0].item_list.items[0].name == 'Non-Member Concert ticket' ){

            this.member.nonmemberpogramticket = "paid";
            
        } // Add Non-Membership Ticket Details
  }


}
