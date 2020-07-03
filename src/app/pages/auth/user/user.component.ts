import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel, MemberModel } from '../core/user.model';

import { MemberDetailsService } from './../../../services/member-details.service';


@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.scss']
})
export class UserComponent implements OnInit{

  user: FirebaseUserModel = new FirebaseUserModel();
  member: MemberModel = new MemberModel();
  profileForm: FormGroup;

  uemail = '' ;
  userDetails;
  ulr;
  validMember;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location,
    private fb: FormBuilder,
    public memberDetails: MemberDetailsService
  ) {

  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) { console.log(data);
        this.user = data;
        this.createForm(this.user.name, this.user.image);
        this.uemail = this.user.email;
        console.log('this.uemail');
        console.log(this.uemail);
        this.featchData();
      }
    });

  }



  featchData() {
    this.memberDetails.getMemberDetails(this.uemail).subscribe((mdata)=>{
      if(mdata){
        console.log(mdata);
        this.userDetails = mdata[0];
        console.log('this.userDetails');
        console.log(this.userDetails.user_registered);

        var dateString = this.userDetails.user_registered;
        var startDate = new Date(dateString);
        //Year * seconds * minutes * hours * milliseconds = 1 day 
        var year = 365 * 60 * 60 * 24 * 1000;
        var endDate = new Date(startDate.getTime() + year);
        console.log( endDate );
        var d = new Date();
        if (d<endDate){
          this.validMember = true;
          this.ulr = endDate;
        }  
        else{
          this.validMember = false;
          this.ulr = d;
        }
          
       
      }
      else
       console.log('empty');
       this.userDetails = '';
    //  this.articles = data['articles'];
    });
  }

  createForm(name,image) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ],
      image: [image, Validators.required ]
    });
  }

  save(value){
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err))
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
      this.userService.updateMember(this.member);
    }, (error) => {
      console.log("Logout error", error);
    });
  }
}
