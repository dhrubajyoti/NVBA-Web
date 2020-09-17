import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from '../core/user.service';
import { FirebaseUserModel, MemberModel } from '../core/user.model';

@Injectable()
export class UserResolver implements Resolve<FirebaseUserModel> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<FirebaseUserModel> {

    let user = new FirebaseUserModel();
    let member = new MemberModel();

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => { console.log('res');
        console.log(res);
        if(res.providerData[0].providerId == 'password'){
          user.photoURL = res.photoURL;
          user.displayName = res.displayName;
          user.provider = res.providerData[0].providerId;
          user.email = res.email;
          this.userService.updateMember(res.providerData[0]);
          return resolve(user);
        }
        else{
          user.photoURL = res.photoURL;
          user.displayName = res.displayName;
          user.provider = res.providerData[0].providerId;
          user.email = res.email;
          this.userService.updateMember(user);
          return resolve(user);
        }
      }, err => {
        this.router.navigate(['/login']);
        return reject(err);
      })
    })
  }
}
