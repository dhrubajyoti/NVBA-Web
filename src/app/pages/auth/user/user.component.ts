import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel, MemberModel } from '../core/user.model';
import { FormsModule } from '@angular/forms'
import { MemberDetailsService } from './../../../services/member-details.service';


import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html', 
  styleUrls: ['user.scss']
})
export class UserComponent implements OnInit{

  user: FirebaseUserModel = new FirebaseUserModel();
//  member: MemberModel = new MemberModel();
  newmember: MemberModel = new MemberModel();
  profileForm: FormGroup;

  saveBtn: boolean = false;
  newUserCheck: boolean = true;
  newUserId: number = 0;

   

//  uemail = '' ;
//  userDetails ;

//  ulr;
//  validMember;

 member:any;
 showMyContainer: boolean = false;
 lastOrder:boolean = false;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private ar: ActivatedRoute,
    private location : Location,
    private fb: FormBuilder,
    public memberDetails: MemberDetailsService,
    db: AngularFireDatabase
  ) {

    this.profileForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      photoURL: new FormControl(),
      address1: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      zipcode: new FormControl
   });


  }

  ngOnInit(): void {
   this.userService.cast.subscribe( m => {
      this.member = m;
      console.log(this.member);
      this.lastOrder = this.member.purchase? true : false ;
    //  console.log(this.lastOrder);
      this.createForm(this.member.id, this.member.firstname, this.member.lastname,this.member.photoURL, this.member.address1, this.member.address2, this.member.city, this.member.state, this.member.country, this.member.zipcode );
   }) ;

    
      
  }
 
  

  createForm(id, firstname, lastname, photoURL, address1, address2, city, state, country, zipcode) {


    this.profileForm = this.fb.group({
      id: [id, Validators.required],
      firstname: [firstname, Validators.required ],
      lastname: [lastname, Validators.required ],
      photoURL: [photoURL, Validators.required ],
      address1: [address1, Validators.required ],
      address2: [address2, Validators.required ],
      city: [city, Validators.required ],
      state: [state, Validators.required ],
      country: [country, Validators.required ],
      zipcode: [zipcode, Validators.required ]
    });
  }

  editdetails(){
    this.onSubmit();
    this.saveBtn = true;
  }

  onSubmit(){
    this.saveBtn = false;
 //   console.log(this.newUserCheck);
    
  //  this.memberDetails.updateCustomer(this.profileForm);
//   console.log(this.profileForm);
    let v = {...this.member, ...this.profileForm.value };
//    console.log(v);
    if(this.newUserCheck){
      this.memberDetails.createCustomer(v);
    }
    else{
      this.memberDetails.updateCustomer(v);
    }
 //  this.userService.updateCurrentUser(v);
  }

  save(value){ 
 //   console.log(value);
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err))

  }



  logout(){
    this.authService.doLogout()
    .then((res) => {
    //  console.log(this.member);
      this.userService.updateMember(this.newmember);
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }
}
