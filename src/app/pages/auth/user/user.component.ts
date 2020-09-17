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
  member: MemberModel = new MemberModel();
  newmember: MemberModel = new MemberModel();
  profileForm: FormGroup;

  saveBtn: boolean = false;


  uemail = '' ;
  userDetails ;
  ulr;
  validMember;


  items: Observable<any[]>; 
  

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
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
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
          if (data) { 
            let ind = 0;
            // console.log(data); 
                this.memberDetails.allMembersDetails().subscribe(record => record.find( e=> {
                  if( e.email === data.email)
                  {
                    this.user = { ...data, ...e};
                    this.user.displayName = this.user.firstname +' '+this.user.lastname;
                    this.user.key = ind;
                    console.log(this.user);
                    this.member = this.user;
                    console.log(this.member);
                    this.userService.updateMember(this.user);
                     this.createForm(this.member.key, this.member.firstname, this.member.lastname,this.member.photoURL, this.member.address1, this.member.address2, this.member.city, this.member.state, this.member.country, this.member.zipcode );
                  }
                  console.log(ind);
                  ind++;
                }));
          }
    });
      console.log(this.member);
  }
 
  



  // featchData() {


  //     this.memberDetails.allMembersDetails().subscribe(record => record.find( e=> {
  //      if( e.email === this.uemail)
  //       {
  //         this.user = { ...this.user, ...e};
  //         console.log(this.user);
  //       }

  //     }));

      

  // //     this.memberDetails.getMemberDetails(this.uemail).subscribe((mdata)=>{
  // // //    this.memberDetails.GetMember(this.uemail).subscribe((mdata)=>{
  // // //      console.log(this.memberDetails.GetMember('1'));

  // //     if(mdata){
  // //       console.log(mdata);
  // //       this.userDetails = mdata[0];
  // //       console.log('this.userDetails');
  // //       console.log(this.userDetails.user_registered);

  // //       var dateString = this.userDetails.user_registered;
  // //       var startDate = new Date(dateString);
  // //       //Year * seconds * minutes * hours * milliseconds = 1 day 
  // //       var year = 365 * 60 * 60 * 24 * 1000;
  // //       var endDate = new Date(startDate.getTime() + year);
  // //       console.log( endDate );
  // //       var d = new Date();
  // //       if (d<endDate){
  // //         this.validMember = true;
  // //         this.ulr = endDate;
  // //       }  
  // //       else{
  // //         this.validMember = false;
  // //         this.ulr = d;
  // //       }
          
       
  // //     }
  // //     else
  // //      console.log('empty');
  // //      this.userDetails = '';
  // //   //  this.articles = data['articles'];
  // //   });
  // }

  createForm(key, firstname, lastname, photoURL, address1, address2, city, state, country, zipcode) {


    this.profileForm = this.fb.group({
      key: [key, Validators.required],
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
    this.saveBtn = true;
  }

  onSubmit(){
    this.saveBtn = false;
    this.memberDetails.updateCustomer(this.profileForm);
    console.log(this.profileForm);
    var v = {...this.member, ...this.profileForm.value };
    console.log(v);
   this.userService.updateCurrentUser(v);
  }

  save(value){ 
    console.log(value);
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
