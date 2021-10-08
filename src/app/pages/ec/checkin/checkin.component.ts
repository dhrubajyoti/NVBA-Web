import { Component, OnInit } from '@angular/core';
import { MemberDetailsService } from './../../../services/member-details.service';
import { UserService } from './../../auth/core/user.service';
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
  member: any;
  rowData:any;
 // visitor:any;
  visitorTable: any = [ ];
  private gridApi;
  private gridColumnApi;
  public defaultColDef;

  
  
  //public modules: Module[] = [ClientSideRowModelModule];

  constructor( 
    private mds: MemberDetailsService,
    public userService: UserService, 
  ) {

    this.mds.allMembersDetails().subscribe(m=> {
      this.members = m;
      console.log(this.members);
    //  this.rowData = this.members;
      this.checkDetails();
    });

    this.defaultColDef = {
      flex: 1,
      resizable: true,
      editable: true,
    };

    this.userService.cast.subscribe( m => {
        this.member = m;
      //  console.log(this.member);
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
    { field: 'expires', sortable: true, filter: true},
    { field: 'membershipstatus', sortable: true , filter: true},
    { field: 'ticket', sortable: true, filter: true},
    { field: 'sku', sortable: true, filter: true},
    { field: 'quantity', sortable: true , filter: true},
    // { field: 'fridayCheckin', sortable: true , filter: true},
    // { field: 'SaturdayCheckin', sortable: true , filter: true},
    // { field: 'SundayCheckin', sortable: true , filter: true}
    
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


  checkDetails(){
    let couter = 0;

    console.log(this.rowData);
    [...this.members].forEach( m =>{ 
       if(m.purchase? true : false){
         couter++;
         [...m.purchase].forEach(element => {

          [...element].forEach(e => {
                
    
            this.visitorTable.push({
              id : m.id,
              firstname : m.firstname,
              lastname : m.lastname,
              email : m.email,
              phone : m.phone,
              joined : m.joined,
              expires : m.expires,
              membershipstatus : m.membershipstatus,
              ticket : e.name,
              sku : e.sku,
              quantity : e.quantity,
              fridayCheckin: m.fridayCheckin
            });
            
          });
          
          
        });
       }


    });
 //   console.log(couter);
  //  this.lastOrder = this.rowData.purchase? true : false ;

    console.log( this.visitorTable);
    this.rowData = this.visitorTable;
  }


}



