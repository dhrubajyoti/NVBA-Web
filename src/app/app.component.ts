import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Navigation, NavigationEnd, RouterOutlet} from '@angular/router';
import { filter } from 'rxjs/operators';
import { from, Subscription } from 'rxjs';
import { slider, fader, stepper, transformer, slideInAnimation } from './route-animations';


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

  constructor(private router:Router){}

  ngOnInit(){
    this.subscription = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe( ()=> {
      const element = document.querySelector('mat-sidenav-content') || window;
      element.scrollTo(0,0);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
