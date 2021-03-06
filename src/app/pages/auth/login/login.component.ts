import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.createForm();
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
   //   console.log(value);
      this.router.navigate(['/user']);
      this.toastr.success(value.email, 'Login Successfully');
    }, err => {
      console.log(err);
      if(err.code == 'auth/user-not-found')
        this.errorMessage = "Sorry, We not able to find your email in our records. Please check or try different email for login.";

      if(err.code == 'auth/wrong-password')
      this.errorMessage = "You might trying wrong password. Please try again. If not able to recall your password. Click Forgot your password.";
    //  this.errorMessage = err.message; auth/user-disabled

      if(err.code == 'auth/user-disabled')
      this.errorMessage = "Sorry, Please try different email for login. The user account has been disabled by an administrator.";

      if(err.code == 'auth/invalid-email')
      this.errorMessage = err.message;


      this.toastr.error(this.errorMessage, 'Login Error');
    })
  }
}
