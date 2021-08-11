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
   window.open('https://www.google.com/maps/dir/'+position.coords.latitude+','+position.coords.longitude+'/Shelter+8+at+Bull+Run,+7700+Bull+Run+Dr,+Centreville,+VA+20121/@38.8407556,-77.4949552,11z/data=!3m1!4b1!4m17!1m6!3m5!1s0x0:0xbbb15a81fedc1de6!2sShelter+8+at+Bull+Run!8m2!3d38.8018248!4d-77.4915098!4m9!1m1!4e1!1m5!1m1!1s0x89b65d2758542381:0xbbb15a81fedc1de6!2m2!1d-77.4915098!2d38.8018248!3e0?hl=en', "_blank");
  }


}
