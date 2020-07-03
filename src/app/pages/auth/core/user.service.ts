import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';
import { MemberModel } from './../core/user.model';


@Injectable()
export class UserService {

  private member = new BehaviorSubject<any>(new MemberModel);
  cast = this.member.asObservable();

  constructor(
   public db: AngularFirestore,
   public afAuth: AngularFireAuth
 ){
 }

 updateMember( currentMember: MemberModel ){
    this.member.next(currentMember);
 }


  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          console.log('User Details- coming');
          console.log(user.providerData);
          console.log(user.providerData[0].email);
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  updateCurrentUser(value){ console.log(value);
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: value.image
      }).then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }
}
