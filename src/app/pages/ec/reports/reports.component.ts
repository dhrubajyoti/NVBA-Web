import { Component, OnInit } from '@angular/core';
import { MemberDetailsService } from './../../../services/member-details.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  members:any;
  rowData:any;

  
  //public modules: Module[] = [ClientSideRowModelModule];

  constructor( 
    private mds: MemberDetailsService
  ) {

    this.mds.allMembersDetails().subscribe(m=> {
      this.members = m;
      console.log(this.members);
      this.rowData = this.members;
    });

   }

  ngOnInit(): void {
  }

  title = 'app';

	columnDefs = [
    { field: 'id', sortable: true, filter: true, maxWidth: 90, cellClass: 'id-class center' },
		{ field: 'firstname', sortable: true, filter: true , cellClass: 'center' },
		{ field: 'lastname', sortable: true, filter: true, cellClass: 'center'  },
    { field: 'email', sortable: true, filter: true, },
    { field: 'joined', sortable: true, filter: true, maxWidth: 90,},
    { field: 'expires', sortable: true, filter: true, maxWidth: 90,},
    { field: 'membershipstatus', sortable: true , filter: true, maxWidth: 120,},
    
	];

   
  // [
	// 	{ make: 'Toyota', model: 'Celica', price: 35000 },
	// 	{ make: 'Ford', model: 'Mondeo', price: 32000 },
	// 	{ make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];
  

  onBtnExport() {
  //  var params = getParams();
    // if (params.suppressQuotes || params.columnSeparator) {
    //   alert(
    //     'NOTE: you are downloading a file with non-standard quotes or separators - it may not render correctly in Excel.'
    //   );
    // }
   // this.gridApi.exportDataAsCsv();
  }

}



