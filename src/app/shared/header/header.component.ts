import { Component, OnInit } from '@angular/core';
import { UserService } from './../../pages/auth/core/user.service';
import { from } from 'rxjs';
import { MemberModel } from './../../pages/auth/core/user.model';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  member:MemberModel;
  
  constructor( private userService: UserService) { }

  ngOnInit(){
    this.userService.cast.subscribe(cast => this.member = cast);
  }

  ngOnDestroy(): void {
      this.member;
  }

  
}
 