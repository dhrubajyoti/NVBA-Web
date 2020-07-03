import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailsService {

  constructor(private httpClient: HttpClient) { }

  public getMemberDetails(value){ console.log
    return this.httpClient.get("assets/php/data.js");
  }

  // public getMemberDetails(value){ console.log(`assets/php/membershipDetails.php?email=${value}`);
  //   return this.httpClient.get(`php/membershipDetails.php?email=${value}`);
  // }


}


