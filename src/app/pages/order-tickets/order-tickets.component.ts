import { Component, OnInit } from '@angular/core';
import { UserService } from './../auth/core/user.service';

@Component({
  selector: 'app-order-tickets',
  templateUrl: './order-tickets.component.html',
  styleUrls: ['./order-tickets.component.scss']
})
export class OrderTicketsComponent implements OnInit {
  member: any;
  isShow = false;
  isBtn = true;
  
  withCul = false;

  btnMsg = "Ticket Without Cultural Program";
  constructor(public userService: UserService){
    this.userService.cast.subscribe( m => {
        this.member = m;
      //  console.log(this.member);
    });
   }

  ngOnInit(): void {
  }

  // 
 
  toggleDisplay() {
    this.isBtn = false;
    this.isShow = !this.isShow;
   

    if(this.isShow)
    this.btnMsg = "Ticket Include Cultural Program";

    else
    this.btnMsg = "Ticket Without Cultural Program"

  }

}
