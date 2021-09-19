import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IpServiceService } from './../../../services/ip-service.service';
import { Router, Params } from '@angular/router';
import { CartService } from './../../../services/cart.service';
import { ConcertTicketsService } from './../../../services/concert-tickets.service';

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
export class ConcertComponent implements OnInit {
  iAgree: boolean = false;
  ipAddress:string;
  cartCheck: any;
  kkObject :any=[];
  selectedt;
  tdata:Array<Object> = [
    {value: 0},{value: 1},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6},{value: 7},{value: 8},{value: 9},{value: 10}];
  selected(){
    alert(this.selectedt.value );
    this.kkObject.quantity = this.selectedt.value;
    console.log(this.kkObject);
    this.router.navigate(['/concertcheckout']);
  }

  private  concertCart = {
    "name": "Kavita Krishnamurti Concert Public Ticket",
    "description": "Kavita Krishnamurti Concert Public Ticket Fee",
    "quantity": 0,
    "price": 50,
    "tax": 0,
    "sku": "DP2021KKNONM",
    "currency": "USD",
    // "viwername":"",
    // "address":"",
    // "address1":"",
    // "city":"",
    // "state":"",
    // "zip":"",
    // "ipAddress":"",
    // "iAgree":"",
    // "iAgreeDateTime":""
  }

  constructor(
    private ip:IpServiceService,
    private router: Router,
    private cs: CartService,
    private mds: ConcertTicketsService,  ){
      this.cs.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck);
      this.kkObject = this.concertCart;
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

}
