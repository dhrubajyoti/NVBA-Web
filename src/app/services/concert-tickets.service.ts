import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberModel } from './../pages/auth/core/user.model';


import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule, AngularFireAction, AngularFireObject } from '@angular/fire/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConcertTicketsService {
  private dbPath = '/ConcertTickets';
  results = [];
  membersRef: AngularFireList<MemberModel> = null;
  memberRef: AngularFireObject<MemberModel> = null;
  items: Observable<any[]>; 
  pays: Observable<any[]>; 

  payId:number = 0;

  constructor(private httpClient: HttpClient, private fdb:AngularFireDatabase ) { 
    this.membersRef = fdb.list(this.dbPath);
    this.items = fdb.list('/ConcertTickets').valueChanges();
    this.pays = fdb.list('/PaypalPayments').valueChanges();
  }

  updateCustomer(user: any): void {
    // console.log(user);
    this.fdb.object('/ConcertTickets/' + user.id).update({ ...user }).catch(error => {
      console.log(error);
    }).then( c => {
    //  console.log("success Update");
    });
  }

  createCustomer(user:any){
    
    this.fdb.object('/ConcertTickets/'+user.id).set({ ...user }).catch(error => {
      console.log(error);
    }).then( c => {
      console.log("Success Create.");
    });
  }

  getMembersList(): AngularFireList<MemberModel> {
    return this.membersRef;
  }


  allMembersDetails(){
    return this.items;
  }

  allPaypalPayments(){
    return this.pays;
  }
 
  addPayments(pay:any){

    this.pays.subscribe(p=>{
      console.log(p);
      let id = p.length;
      console.log(id);
      console.log(id+1);
      this.payId = id ;
    });

    
    this.fdb.object('/PaypalPayments/'+  this.payId ).set({ pay }).catch(error => {
      console.log(error);
      return false;
    }).then( c => {
      console.log("Success Create.");
      return true;
    });


    // this.items = this.fdb.database()


    // let id = this.fdb.list('/PaypalPayments').valueChanges();

    // console.log(id.subscribe.length);
    // this.fdb.object('/PaypalPayments/'+ id.subscribe.length.valueOf +1 ).set({ ...pay }).catch(error => {
    //   console.log(error);
    // }).then( c => {
    //   console.log("Success Create.");
    // });
    // this.fdb.createPushId() .set({ ...user }).catch(error => {
    //   console.log(error);
    // }).then( c => {
    //   console.log("Success Create.");
    // });
    // PaypalPayments
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

}


