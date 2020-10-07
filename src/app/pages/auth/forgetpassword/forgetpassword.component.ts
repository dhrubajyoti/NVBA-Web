import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent  {

  forgetForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
   }

   createForm() {
     this.forgetForm = this.fb.group({
       email: ['', Validators.required ]
     });
   }

   


   callForget(value){ 
     
 //   console.log(value);
     this.authService.doForgetPassword(value)
     .then(res => {
    //   console.log(res);
       this.errorMessage = "";
       this.successMessage = "Email send to your mail for reset password.";
       
       this.router.navigate(['/login']);
     }, err => {
    //   console.log(err);
    if(err.code == 'auth/user-not-found')
        this.errorMessage = "Sorry, We not able to find your email in our record. Please check Or try different email address.";

      if(err.code == 'auth/wrong-password')
      this.errorMessage = "You might trying wrong password. Please try again. If not able to recall your password. Click Forgot your password.";
    //  this.errorMessage = err.message;

      if(err.code == 'auth/invalid-email')
      this.errorMessage = err.message;


       this.successMessage = "";
     })
   }

}
