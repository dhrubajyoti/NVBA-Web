import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['mode'] == "resetPassword"){
        this.router.navigate(['/resetpassword', params]);
      }
    });
  }


}
