import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from '../core/user.service';
import { FirebaseUserModel, MemberModel } from '../core/user.model';
import { MemberDetailsService } from './../../../services/member-details.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserResolver implements Resolve<FirebaseUserModel> {

  constructor(
    public userService: UserService, 
    private router: Router,
    public mds: MemberDetailsService
    ) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<FirebaseUserModel> {

    let user = new FirebaseUserModel();
 //   let member = new MemberModel();
    let newUserCheck: boolean = true;  // if true then New User

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => { // console.log('res');
        //  console.log(res);
          user.photoURL = res.photoURL;
          user.displayName = res.displayName;
          user.provider = res.providerData[0].providerId;
          user.email = res.email;

              this.mds.allMembersDetails().subscribe(d => { 
           //     console.log(d);
                d.forEach( (e, index) => {
              //    console.log(index);
                     if( e.email === user.email)
                      {
                          newUserCheck = false;
                          user = { ...user, ...e};
                          user.displayName = user.firstname +' '+user.lastname;
                          user.id = index;
                    //      console.log(user);
                    //        this.member = this.user;
                    //        console.log(this.member);
                    //        this.userService.updateMember(this.user);
                    //         this.createForm(this.member.id, this.member.firstname, this.member.lastname,this.member.photoURL, this.member.address1, this.member.address2, this.member.city, this.member.state, this.member.country, this.member.zipcode );
                      }
                      else{
                        if(newUserCheck){
                          user.id = d.length;
                        }
                        
                //         this.newUserId = d.length;
                //    //     console.log(this.newUserId);
                      }
                });
                // update all user
                this.userService.updateMember(user);
               
           //     console.log(user);
                return resolve(user);
              });
        
          
          // this.userService.updateMember(res.providerData[0]);
          
        // if(res.providerData[0].providerId == 'password'){
          
        // }
        // else{
        //   user.photoURL = res.photoURL;
        //   user.displayName = res.displayName;
        //   user.provider = res.providerData[0].providerId;
        //   user.email = res.email;
        //   this.userService.updateMember(user);
        //   return resolve(user);
        // }
      }, err => {
        this.router.navigate(['/login']);
        return reject(err);
      })
    })
  }
}
