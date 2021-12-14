import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
   window.open('https://www.google.com/maps/dir/'+position.coords.latitude+','+position.coords.longitude+'/4000+Stringfellow+Rd,+Chantilly,+VA+20151/@38.8610916,-77.3878075,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x89b645d93cacabb9:0x6ffffa40f8c8e147!2m2!1d-77.4082458!2d38.8825614!3e0?hl=en', "_blank");
  }

}
