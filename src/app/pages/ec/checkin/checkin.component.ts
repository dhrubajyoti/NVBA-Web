import { Component, OnInit } from '@angular/core';
import { MemberDetailsService } from './../../../services/member-details.service';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import 'ag-grid-community';


@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

  members:any;
  rowData:any;
  private gridApi;
  private gridColumnApi;
  public defaultColDef;
  
  //public modules: Module[] = [ClientSideRowModelModule];

  constructor( 
    private mds: MemberDetailsService
  ) {

    this.mds.allMembersDetails().subscribe(m=> {
      this.members = m;
      console.log(this.members);
      this.rowData = this.members;
    });

    this.defaultColDef = {
      flex: 1,
      resizable: true,
      editable: true,
    };

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

  onCellValueChanged(event) {
    console.log('Data after change is', event.data);
  }

}



