import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from './../../pages/auth/core/user.service';
import { AuthService } from './../../pages/auth/core/auth.service';
import { Location } from '@angular/common';
import { from } from 'rxjs';
import { MemberModel } from './../../pages/auth/core/user.model';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  member: MemberModel = new MemberModel();
  newmember: MemberModel = new MemberModel();
  memberMenu: boolean = false;
  
  constructor( 
    public userService: UserService,
    public authService: AuthService,
    private location : Location,
    ) { }

  ngOnInit(){
    this.userService.cast.subscribe( cast => this.member = cast);
   // console.log(this.member.email);
    if(this.member.email){
   //   console.log(this.member.email); 
    }
  }

  ngOnChanges(){
  }


  signout(){
    this.authService.doLogout()
    .then((res) => {
      this.userService.updateMember(this.newmember);
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

  ngOnDestroy(): void {
      this.member;
  }

  
}
 