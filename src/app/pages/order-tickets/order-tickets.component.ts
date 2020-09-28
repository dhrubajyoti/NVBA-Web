import { Component, OnInit } from '@angular/core';
import { UserService } from './../auth/core/user.service';

@Component({
  selector: 'app-order-tickets',
  templateUrl: './order-tickets.component.html',
  styleUrls: ['./order-tickets.component.scss']
})
export class OrderTicketsComponent implements OnInit {
  member: any;
  constructor(public userService: UserService){
    this.userService.cast.subscribe( m => {
        this.member = m;
      //  console.log(this.member);
    });
   }

  ngOnInit(): void {
  }

}
