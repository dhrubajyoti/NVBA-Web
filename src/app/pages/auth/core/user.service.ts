import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';
import { MemberModel } from './../core/user.model';


@Injectable()
export class UserService {

  public member = new BehaviorSubject<any>(new MemberModel);
  cast = this.member.asObservable();

  constructor(
   public db: AngularFirestore,
   public afAuth: AngularFireAuth
 ){ 
 }

 updateMember( currentMember: MemberModel ){
    this.member.next(currentMember);
    console.log('Update Member Call');
 }


  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          console.log('User Details- coming');
     //     console.log(user.providerData);
     //     console.log(user.providerData[0].email);
     //     console.log(user);
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  updateCurrentUser(value){ 
 //   console.log(value);
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

   verifyPasswordResetCode(code){
     console.log(code);
     let em = firebase.auth().verifyPasswordResetCode(code)
      .then(function(email) {
        // Display a "new password" form with the user's email address
        console.log('vaid');
        return email ;
      })
      .catch(function() {
        // Invalid code
        console.log('expired');
        return 'expired';
      });

      return em;
  }


}
