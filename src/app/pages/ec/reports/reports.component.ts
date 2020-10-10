import { Component, OnInit } from '@angular/core';
import { MemberDetailsService } from './../../../services/member-details.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  members:any;

  constructor( 
    private mds: MemberDetailsService
  ) {

    this.mds.allMembersDetails().subscribe(m=> {
      this.members = m;
      console.log(this.members);
    });

   }

  ngOnInit(): void {
  }

  title = 'app';

	columnDefs = [
		{headerName: 'Make', field: 'make' },
		{headerName: 'Model', field: 'model' },
		{headerName: 'Price', field: 'price'}
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
	];

}
