import { Component, OnInit } from '@angular/core';
import { MemberDetailsService } from './../../../services/member-details.service';

import 'ag-grid-community';


@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss']
})
export class CountsComponent implements OnInit {

  payments:any;
  rowData:any;
  private gridApi;
  private gridColumnApi;

  kkHeadCount:number;

  nonHeadCount:number;
  vegHeadCount:number;
  kidHeadCount:number;

  
  //public modules: Module[] = [ClientSideRowModelModule];

  constructor( 
    private mds: MemberDetailsService
  ) {
    this.mds.allPaypalPayments().subscribe(p => {
      this.payments = p;
      console.log(this.payments);
      this.rowData = this.payments;
      this.kkShowTicketCount();
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

  kkShowTicketCount(){
    this.kkHeadCount = 0;
    this.nonHeadCount = 0;
    this.vegHeadCount = 0;
    this.kidHeadCount = 0;
      [...this.rowData].forEach( xelement =>{
        [...xelement.pay.transactions[0].item_list.items].forEach(element => {
          if(element.sku.includes("KK")){
              this.kkHeadCount += element.quantity ;
              console.log(element);
          }

          if(element.sku.includes("NON")){
              this.nonHeadCount += element.quantity ;
              console.log(element);
          }
          
          if(element.sku.includes("VEG")){
              this.vegHeadCount += element.quantity ;
              console.log(element);
          }

          if(element.sku.includes("KID")){
              this.kidHeadCount += element.quantity ;
              console.log(element);
          }
          
        });
      });
      console.log(this.kkHeadCount);
  }

}