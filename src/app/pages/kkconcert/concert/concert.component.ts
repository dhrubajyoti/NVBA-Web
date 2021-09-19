import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IpServiceService } from './../../../services/ip-service.service';
import { Router, Params } from '@angular/router';
import { CartService } from './../../../services/cart.service';

declare let paypal:any;

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: "100%", opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: "100%" , opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ConcertComponent implements OnInit, AfterViewInit {
  iAgree: boolean = false;
  ipAddress:string;
  cartCheck: any;
  kkObject :any=[];
  concertCartUser:any=[];
  selectedt;
  tdata:Array<Object> = [
    {value: 0},{value: 1},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6},{value: 7},{value: 8},{value: 9},{value: 10}];
  selected(){
    alert(this.selectedt.value );
    this.kkObject.quantity = this.selectedt.value;
    console.log(this.kkObject);
  }

  private  concertCart = {
    "name": "Kavita Krishnamurti Concert Ticket",
    "description": "Kavita Krishnamurti Concert Ticket Fee",
    "quantity": 0,
    "price": 50,
    "tax": 0,
    "sku": "DP2021KKNONM",
    "currency": "USD"
  };
  private concertCartUserx = {
    "viwerfirstname":"",
    "viwerlastname":"",
    "address":"",
    "address1":"",
    "city":"",
    "state":"",
    "zip":"",
    "ipAddress":"",
    "iAgree":"",
    "iAgreeDateTime":""
  }

  constructor(
    private ip:IpServiceService,
    private router: Router,
    private cs: CartService,  ){
      this.cs.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck);
      this.kkObject = this.concertCart;
      this.concertCartUser = this.concertCartUserx;
      console.log(this.kkObject)
    }

  ngOnInit(): void {
    this.getIP();
  }

  checkCheckBoxvalue(event){
    console.log(event.checked);
    this.iAgree = event.checked;
    console.log(this.iAgree);
    let a = this.iAgree;
   // local storage
  //  if(this.iAgree)
  //   localStorage.setItem('iAgrees', 'true' );
  //  else
  //  localStorage.setItem('iAgrees', 'false' );

  //  console.log(this.ipAddress);
    const d = new Date();
    this.kkObject.iAgree = 'agree';
    this.kkObject.iAgreeDateTime = d.toString();
    this.kkObject.ipAddress = this.ipAddress;
    // this.mds.updateCustomer(this.member);
    console.log(this.kkObject);
  }

  redirectToHomepage(){
    this.router.navigate(['/home']);
  }
  getIP()
  {
    this.ip.getIPAddress().subscribe((res:any)=>{
      this.ipAddress=res.ip;
    });
  }

  addToCheckout(){
   //  this.concertCart = this.kkObject ;
     
     this.cs.items = [];
     this.cs = this.kkObject;

     console.log(this.cs);
     console.log(this.concertCartUser);

    // [...this.kkObject].forEach(value => {

    //     this.cs.addToCart(value);
    //  });
  //   this.router.navigate(['/concertcheckout']);


  this.addPaypalScript().then(() => {
    paypal.Button.render(this.paypalConfig, '#paypal-button-containerkk');
 //   this.paypalLoad = false;
//    console.log(this.paypalConfig);  
  }); 

  }

  ngAfterViewInit(){
        if(this.iAgree){
        alert();
          

        }
        
  }

  addPaypalScript() {
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
                  "total": (this.kkObject.quantity * this.kkObject.price),
                  "currency": "USD",
                  "details": {
                    "subtotal": this.kkObject.quantity * this.kkObject.price,
                    "tax": 0
                  }
                },
                "description": "NVBA Website Payment.", 
                "item_list": {
                  "items": this.kkObject
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
     //      console.log(this.member);
           
  
       //    this.toastr.success('Your payment is successful.');
          
      //      if(this.member.email){
  
      //       //   if(!this.member.payments){
      //       // //    this.member.payments = [];
      //       //     console.log('First Time');
      //       //   }
      //         // this.member.payments.unshift(paymentTrans);
      //         // this.updateMemberDetailsFun(payment);
      //         // if(!this.member.purchase){
      //         //     this.member.purchase = [];
      //         // //   console.log('First Time purchase');
      //         // }
      //         // this.member.purchase.unshift(this.cartCheck);
      //         // this.mds.updateCustomer(this.member);
      //         // this.mds.addPayments(payment) ;
      //      }
      //      else{
      //       console.log('in Else');
      // //      this.mds.addPayments(payment) ;
      //      }
          
       
        //     this.cart.clearCart();
        //     this.cleanup();
            // this.router.navigate(['/durgapuja2020']);
  
            setTimeout(()=>{                           
              this.router.navigate(['/durgapuja2021']);
            }, 6000);
            
  
        })
      }
    };


}
