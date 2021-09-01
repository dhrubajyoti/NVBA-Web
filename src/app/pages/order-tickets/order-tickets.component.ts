import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from './../auth/core/user.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IpServiceService } from './../../services/ip-service.service';
import { MemberDetailsService } from './../../services/member-details.service';

@Component({
  selector: 'app-order-tickets',
  templateUrl: './order-tickets.component.html',
  styleUrls: ['./order-tickets.component.scss'],
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
export class OrderTicketsComponent implements OnInit, OnChanges {
  member: any;
  isShow = false;
  isBtn = true;

  iAgree : boolean;
  ipAddress:string;
  withCul = false;

  btnMsg = "Ticket Without Cultural Program";
  constructor(
    public userService: UserService, 
    private mds: MemberDetailsService,
    private ip:IpServiceService ){
    this.userService.cast.subscribe( m => {
        this.member = m;
      //  console.log(this.member);
    });
   }

  ngOnInit(): void {
    if(!localStorage.getItem('iAgrees'))
        localStorage.setItem('iAgrees', 'false');
    else {
      if(localStorage.getItem('iAgrees') == 'true')
        this.iAgree = true;
    }

    this.getIP();
           
  }

  ngOnChanges(): void{
  }

  checkCheckBoxvalue(event){
    console.log(event.checked);
    this.iAgree = event.checked;
    console.log(this.iAgree);
    localStorage.setItem('iAgrees', 'true');
    console.log(this.ipAddress);
    const d = new Date();
    this.member.iAgree = true;
    this.member.iAgreeDateTime = d.toString();
    this.member.iAgreeIP = this.ipAddress;
    this.mds.updateCustomer(this.member);
  }

  getIP()
  {
    this.ip.getIPAddress().subscribe((res:any)=>{
      this.ipAddress=res.ip;
    });
  }

   
 


}
