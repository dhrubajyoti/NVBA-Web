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

  getLocation() { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else { 
     alert("Geolocation is not supported by this browser.");
    }
  }  

  showPosition(position) {
   console.log( position.coords.latitude);
   window.open('https://www.google.com/maps/dir/'+position.coords.latitude+','+position.coords.longitude+'/Freedom+High+School,+25450+Riding+Center+Dr,+Chantilly,+VA+20152/@38.8657757,-77.4574371,12z/data=!3m1!4b1!4m16!1m6!3m5!1s0x89b6419385f7acb7:0xdfcafaf31ad1c442!2sFreedom+High+School!8m2!3d38.9141482!4d-77.535041!4m8!1m1!4e1!1m5!1m1!1s0x89b6419385f7acb7:0xdfcafaf31ad1c442!2m2!1d-77.535041!2d38.9141482', "_blank");
  }


}
