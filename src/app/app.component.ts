import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Navigation, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { from, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

}
