import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberModel } from './../pages/auth/core/user.model';

import { AngularFireDatabase, AngularFireList, AngularFireAction, AngularFireObject } from '@angular/fire/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailsService {
  private dbPath = '/Members';
  results = [];
  membersRef: AngularFireList<MemberModel> = null;
  memberRef: AngularFireObject<MemberModel> = null;
  items: Observable<any[]>; 

  constructor(private httpClient: HttpClient, private fdb:AngularFireDatabase ) { 
    this.membersRef = fdb.list(this.dbPath);
    this.items = fdb.list('/Members').valueChanges();

  }


  updateCustomer(todo: any): void {
    console.log(todo.value);
    this.fdb.object('/Members/' + todo.value.key).update({ ...todo.value });
  }


  getMembersList(): AngularFireList<MemberModel> {
    return this.membersRef;
  }


  allMembersDetails(){
    return this.items;
  }
 


}


