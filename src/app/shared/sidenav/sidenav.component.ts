import { Component, OnInit, ViewChild , Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
 @Input('yourChild') child;
  constructor() { }

  ngOnInit() {
    this.child.yourChild.toggle();
  }

  close(){
    alert('clo');
    this.child.toggle();
    this.child.yourChild.toggle();
  }

}
