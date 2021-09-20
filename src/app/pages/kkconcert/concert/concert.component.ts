import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IpServiceService } from './../../../services/ip-service.service';
import { Router, Params } from '@angular/router';
import { CartService } from './../../../services/cart.service';
import { ConcertTicketsService } from './../../../services/concert-tickets.service';
import { MemberDetailsService } from './../../../services/member-details.service';
import { UserService } from './../../auth/core/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  member: any;
  showAdd:boolean = false;



  addadd(){
    this.showAdd = true;
  }

  private  concertCart = {
    "name": "Kavita Krishnamurti Concert Public Ticket",
    "description": "Kavita Krishnamurti Concert Public Ticket Fee",
    "quantity": 0,
    "price": 50,
    "tax": 0,
    "sku": "DP2021KKNONM",
    "currency": "USD",
  }

  public concertViewer = {
    "firstname":"",
    "lastname": "",
    "email":"",
    "address":"",
    "address1":"",
    "city":"",
    "state":"",
    "zipcode":"",
    "ipAddress":"",
    "iAgree":"",
    "iAgreeDateTime":""
  }

  constructor(
    private ip:IpServiceService,
    private router: Router,
    private cs: CartService,
    public userService: UserService, 
    private fb: FormBuilder,
    private mds: ConcertTicketsService,
      ){
      this.cs.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck);
      this.cs.clearCart;
      this.kkObject = this.concertCart;
      console.log(this.kkObject)
      this.userService.cast.subscribe( m => {
        this.member = m;
        //  console.log(this.member);
        this.member.firstname = '';
        this.member.lastname = '';
      });

      

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
    this.member.iAgree = 'agree';
    this.member.iAgreeDateTime = d.toString();
    this.member.ipAddress = this.ipAddress;
    this.member.usertype = "guest";
    // this.mds.updateCustomer(this.member);
    
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

  

  emailval:boolean = true;
  onSubmit(){
    
    this.cs.clearCart();
    console.log(this.kkObject);
    this.cs.addToCart(this.kkObject);
    // this.member = this.concertViewer;
    this.mds.updateCustomer(this.member);
    console.log(this.member);
  //  this.mds.createCustomer(this.concertViewer);
   // if(this.validateEmail(this.member)){
      this.router.navigate(['/concertcheckout']);
   // }
   // else{
   //     this.emailval = false;
   // }
    
  }

  validateEmail(mail) 
  {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.member.email.match(mailformat))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }
  

}
