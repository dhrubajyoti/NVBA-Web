import { Component, OnInit } from '@angular/core';
import { UserService } from './../auth/core/user.service';
import { UserResolver } from './../auth/user/user.resolver'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-kobipronam',
  templateUrl: './kobipronam.component.html',
  styleUrls: ['./kobipronam.component.scss']
})
export class KobipronamComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
