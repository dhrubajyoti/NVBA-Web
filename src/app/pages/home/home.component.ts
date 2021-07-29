import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from './../auth/core/user.service';
import { UserResolver } from './../auth/user/user.resolver'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // mode:any;
  // oobCode:any;
  // apiKey:any;
  // lang:any;
  // fpurl:any;
  member:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    public UserService:UserService,
    public userResolver:UserResolver,

  ) {

    this.UserService.cast.subscribe(m =>{
      this.member = m;
      console.log(this.member);
    });

  }
  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['mode'] == "resetPassword"){
        this.router.navigate(['/resetpassword', params]);
      }
    });
  }


}
