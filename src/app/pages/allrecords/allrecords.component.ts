import { Component, OnInit } from '@angular/core';
import { MemberDetailsService } from './../../services/member-details.service'

@Component({
  selector: 'app-allrecords',
  templateUrl: './allrecords.component.html',
  styleUrls: ['./allrecords.component.scss']
})
export class AllrecordsComponent implements OnInit {

  members:any;

  constructor(public mds:MemberDetailsService ) {
      this.mds.items.subscribe( m =>{
          console.log(m);
          this.members = m;
      });
   }

  ngOnInit(): void {
  }

}
