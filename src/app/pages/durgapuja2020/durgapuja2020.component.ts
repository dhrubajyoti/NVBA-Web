import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserService } from './../auth/core/user.service';
import { UserResolver } from './../auth/user/user.resolver'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-durgapuja2020',
  templateUrl: './durgapuja2020.component.html',
  styleUrls: ['./durgapuja2020.component.scss']
})
export class Durgapuja2020Component implements OnInit {

  member:any;
  
  constructor(
    public UserService:UserService,
    public userResolver:UserResolver,
    private route: ActivatedRoute,
    private router: Router
  ) {
  //  this.UserService.getCurrentUser
    this.UserService.cast.subscribe(m =>{
      this.member = m;
      console.log(this.member);
    });

    
   }

  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      if(params['mode'] == "resetPassword"){
        this.router.navigate(['/resetpassword', params]);
      }
    });

    setTimeout(function(){
      console.log("Iteration: setTimeout" );
    }, 5000);
    
  }



}
