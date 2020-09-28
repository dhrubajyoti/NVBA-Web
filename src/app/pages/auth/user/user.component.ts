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
      console.log(this.lastOrder);
      this.createForm(this.member.id, this.member.firstname, this.member.lastname,this.member.photoURL, this.member.address1, this.member.address2, this.member.city, this.member.state, this.member.country, this.member.zipcode );
   }) ;

    // this.ar.data.subscribe(routeData => {
    // });

    // this.route.data.subscribe(routeData => {
    //   let data = routeData['data'];
    //       if (data) { 
    //          this.memberDetails.allMembersDetails().subscribe(d => {
    //            console.log(d);
    //            d.forEach( (e, index) => {
    //            //  console.log(index);
    //              if( e.email === data.email)
    //               {
    //                 this.newUserCheck = false;
    //                 this.user = { ...data, ...e};
    //                 this.user.displayName = this.user.firstname +' '+this.user.lastname;
    //                 this.user.id = index;
    //                 console.log(this.user);
    //                 this.member = this.user;
    //                 console.log(this.member);
    //                 this.userService.updateMember(this.user);
    //                  this.createForm(this.member.id, this.member.firstname, this.member.lastname,this.member.photoURL, this.member.address1, this.member.address2, this.member.city, this.member.state, this.member.country, this.member.zipcode );
    //               }
    //               else{
    //                  this.newUserId = d.length;
    //             //     console.log(this.newUserId);
    //               }
    //            }
    //            );

    //            // For New User 
    //             if(this.newUserCheck){
    //               this.newUserId = d.length;
    //               this.member = data;
    //               console.log(this.member); 
    //               console.log(this.newUserId);
    //               this.member.displayName = this.member.firstname +' '+this.member.lastname;

                  
    //                 this.createForm(this.newUserId, this.member.firstname, this.member.lastname,this.member.photoURL, this.member.address1, this.member.address2, this.member.city, this.member.state, this.member.country, this.member.zipcode );
    //             }

    //          });

    //       }
    // });
 //   let date = new Date();  
//    let cdate = Date.getFullYear()+'-'+Date.getMonth()+'-'+Date.getDay();
//    console.log(cdate);
      
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
    console.log(this.newUserCheck);
    
  //  this.memberDetails.updateCustomer(this.profileForm);
    console.log(this.profileForm);
    let v = {...this.member, ...this.profileForm.value };
    console.log(v);
    if(this.newUserCheck){
      this.memberDetails.createCustomer(v);
    }
    else{
      this.memberDetails.updateCustomer(v);
    }
 //  this.userService.updateCurrentUser(v);
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
