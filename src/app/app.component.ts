import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Navigation, NavigationEnd, RouterOutlet} from '@angular/router';
import { filter } from 'rxjs/operators';
import { from, Subscription } from 'rxjs';
import { slider, fader, stepper, transformer, slideInAnimation } from './route-animations';
import { UserService } from './pages/auth/core/user.service';
import { AuthService } from './pages/auth/core/auth.service';
import { Location } from '@angular/common';
import { MemberModel } from './pages/auth/core/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ // <-- add your animations here
   // slideInAnimation
     fader,
    //  slider,
     //transformer,
   // stepper
  ]
})



export class AppComponent implements OnInit, OnDestroy {
  title = 'NVBA';

  subscription: Subscription;

  member: MemberModel = new MemberModel();
  newmember: MemberModel = new MemberModel();
  memberMenu: boolean = false;

  constructor(
    private router:Router,
    public userService: UserService,
    public authService: AuthService,
    private location : Location
    ){}

  ngOnInit(){
    this.subscription = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe( ()=> {
      const element = document.querySelector('mat-sidenav-content') || window;
      element.scrollTo(0,0);
    });

    this.userService.cast.subscribe( cast => this.member = cast);
    console.log(this.member.email);
    if(this.member.email){
      console.log(this.member.email); 
    }

  }

  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
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
    this.subscription.unsubscribe();
    this.member;
  }

}
