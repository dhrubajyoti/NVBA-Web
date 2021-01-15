import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from './../../auth/core/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';
import * as Rx from "rxjs";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  mode:boolean = false;
  oobCode:any;
  apiKey:any;
  lang:any;
  fpemail:any = '';
  password:string;
  errorMessage: string = '';
  successMessage: string = '';


  //this.fpemail = new BehaviorSubject<any>(string);

  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private us: UserService,
  ) {
    this.oobCode = this.route.snapshot.paramMap.get('oobCode');
    this.apiKey = this.route.snapshot.paramMap.get('apiKey');
    this.lang = this.route.snapshot.paramMap.get('lang');
    console.log(this.route.snapshot.paramMap);
    this.showresetPass().then(e=> {
      this.fpemail = e;
     console.log(e);
     var emailAdd = e;
    });
  }

  ngOnInit(){
    
  }

  showresetPass(){
    return firebase.auth().verifyPasswordResetCode(this.oobCode)
        .then(function(email) {
        // Display a "new password" form with the user's email address
            console.log('vaid'+ email);
             var fpemail = email;
       //     this.mode = true;
            return email;
          }, err => {
            console.log(err);
           
          })
  }

  savePassword(){ console.log(this.password);
    if(this.password.length<6){
      this.errorMessage = "Your password must be secured enough. When says it must be at least 6 characters long."
    }
    else{
      let sa = firebase.auth().confirmPasswordReset(this.oobCode, this.password)
      .then(function() {
        // Success
        return true;
      }, err =>  console.log(err))

      if(sa){
        this.password = '';
        this.errorMessage = "";
        this.successMessage = "Your new password saved with us. Please Sign In now.";
        setTimeout(() => this.redirectTo(), 5000);
      }
      
    }
  }

  redirectTo(){
    this.router.navigate(['/login']);
  }


  

}
