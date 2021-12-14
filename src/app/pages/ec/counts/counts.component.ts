import { Component, OnInit } from '@angular/core';
import { MemberDetailsService } from './../../../services/member-details.service';
import { UserService } from './../../auth/core/user.service';

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

  kkHeadCount:number = 0;

  nonHeadCount:number =0;
  vegHeadCount:number =0;
  kidHeadCount:number =0;

  adultNon:number=0;
  adultVeg:number=0;
  tentoAdultNon:number=0;
  tentoAdultVeg:number=0;
  fourtoTen:number=0;
  zerotoThree:number=0;
  studentNon:number=0;
  studentVeg:number=0;

  member:any;
  lastOrder:boolean;
  //public modules: Module[] = [ClientSideRowModelModule];

  constructor( 
    private mds: MemberDetailsService,
    public userService: UserService,
  ) {

   }

  ngOnInit(): void {
    this.mds.allMembersDetails().subscribe(m => {
      this.payments = m;
    //  console.log(this.payments);
      this.rowData = m;
   //   this.kkShowTicketCount();
      this.checkDetails();
    });
    
  }

  title = 'Report';

  checkDetails(){
    let couter = 0;

    this.kkHeadCount= 0;

    this.nonHeadCount=0;
    this.vegHeadCount=0;
    this.kidHeadCount=0;

    this.adultNon=0;
    this.adultVeg=0;
    this.tentoAdultNon=0;
    this.tentoAdultVeg=0;
    this.fourtoTen=0;
    this.zerotoThree=0;
    this.studentNon=0;
    this.studentVeg=0;
    

  //  console.log(this.rowData);
    [...this.rowData].forEach( m =>{ 
    //   console.log(m.purchase? true : false)  ;
       if(m.purchase? true : false){
         couter++;
         [...m.purchase].forEach(element => {
          
    //     console.log(element);
      //    console.log(element.sku);
          [...element].forEach(e => {
                if(e.sku.includes("KK")){
                    this.kkHeadCount += e.quantity ;
        //            console.log(e.quantity);
                }
                if(e.sku.includes("NON")){
                    this.nonHeadCount += e.quantity ;
         //           console.log('element.quantity'+e.quantity);
                }
                if(e.sku.includes("VEG")){
                    this.vegHeadCount += e.quantity ;
                }
                if(e.sku.includes("KID")){
                    this.kidHeadCount += e.quantity ;
                }

                if(e.sku.includes("DP2021EBALL01NON")){
                  this.adultNon += e.quantity ;
                }
                if(e.sku.includes("DP2021EBALL02VEG")){
                  this.adultVeg += e.quantity ;
                }
                if(e.sku.includes("DP2021EBALL03NON")){
                  this.tentoAdultNon += e.quantity ;
                }
                if(e.sku.includes("DP2021EBALL04VEG")){
                  this.tentoAdultVeg += e.quantity ;
                }
                if(e.sku.includes("DP2021EBALL05KID")){
                  this.fourtoTen += e.quantity ;
                }
                if(e.sku.includes("DP2021EBALL06KID")){
                  this.zerotoThree += e.quantity ;
                }
                if(e.sku.includes("DP2021EBALL07NON")){
                  this.studentNon += e.quantity ;
                }
                if(e.sku.includes("DP2021EBALL08VEG")){
                  this.studentVeg += e.quantity ;
                }
                
          });
          
          
        });
       }


    });
 //   console.log(couter);
  //  this.lastOrder = this.rowData.purchase? true : false ;
  }


  // kkShowTicketCount(){
  //   this.kkHeadCount = 0;
  //   this.nonHeadCount = 0;
  //   this.vegHeadCount = 0;
  //   this.kidHeadCount = 0;
  //     [...this.rowData].forEach( xelement =>{ 
  //       console.log(xelement);
  //       [...xelement.pay.transactions[0].item_list.items].forEach(element => {
  //         if(element.sku.includes("KK")){
  //             this.kkHeadCount += element.quantity ;
  //             console.log(element);
  //         }

  //         if(element.sku.includes("NON")){
  //             this.nonHeadCount += element.quantity ;
  //             console.log(element);
  //         }
          
  //         if(element.sku.includes("VEG")){
  //             this.vegHeadCount += element.quantity ;
  //             console.log(element);
  //         }

  //         if(element.sku.includes("KID")){
  //             this.kidHeadCount += element.quantity ;
  //             console.log(element);
  //         }
          
  //       });
  //     });
  //     console.log(this.kkHeadCount);
  // }

}