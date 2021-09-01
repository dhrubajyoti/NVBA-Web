import { Component, OnInit } from '@angular/core';
import { MemberDetailsService } from './../../../services/member-details.service';

import 'ag-grid-community';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  members:any;
  rowData:any;
  private gridApi;
  private gridColumnApi;
  
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
    { field: 'id', sortable: true, filter: true, width: 90, cellClass: 'id-class center' },
		{ field: 'firstname', sortable: true, filter: true , cellClass: 'center' },
		{ field: 'lastname', sortable: true, filter: true, cellClass: 'center' },
    { field: 'email', sortable: true, filter: true },
    { field: 'phone', sortable: true, filter: true },
    { field: 'joined', sortable: true, filter: true},
    { field: 'expires', sortable: true, filter: true},
    { field: 'membershipstatus', sortable: true , filter: true},
    { field: 'address1', sortable: true , filter: true},
    { field: 'address2', sortable: true , filter: true},
    { field: 'city', sortable: true , filter: true},
    { field: 'zipcode', sortable: true , filter: true},
    { field: 'iAgree', sortable: true , filter: true},
    { field: 'iAgreeDateTime', sortable: true , filter: true},
    { field: 'iAgreeIP', sortable: true , filter: true}
	];


  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}



