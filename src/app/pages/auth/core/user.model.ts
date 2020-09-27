export class FirebaseUserModel {
  id: number;
  photoURL: string;
  displayName: string;
  provider: string;
  email: string;
  firstname: string;
  lastname: string;
  address: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zipcode: number;
  phonenumber: number;
  membership: string;
  initialpayment: number;
  fee: number;
  term: string;
  discount_code: string;
  joined: string;
  expires: string;
  billingFirstname: string;
  billingLastname: string;
  membershipstatus: string;

  constructor(){
    this.id = 0;
    this.photoURL = "";
    this.displayName = "";
    this.provider = "";
    this.email = "";
    this.firstname ="";
    this.lastname = "";
    this.address = "";
    this.address1 = "";
    this.address2 = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.zipcode = 0;
    this.phonenumber = 0;
    this.membership = "";
    this.initialpayment = 0;
    this.fee = 0;
    this.term = "";
    this.discount_code = "";
    this.joined = "";
    this.expires = "";
    this.billingFirstname = "";
    this.billingLastname = "";
    this.membershipstatus = "";
  }
}


export class MemberModel {
  id: number;
  photoURL: string;
  displayName: string;
  provider: string;
  email: string;
  firstname: string;
  lastname: string;
  address: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zipcode: number;
  phonenumber: number;
  membership: string;
  initialpayment: number;
  fee: number;
  term: string;
  discount_code: string;
  joined: string;
  expires: string;
  billingFirstname: string;
  billingLastname: string;
  membershipstatus: string;

  constructor(){
    this.id = 0;
    this.photoURL = "";
    this.displayName = "Guest";
    this.provider = "";
    this.email = "";
    this.firstname ="New";
    this.lastname = "Guest";
    this.address = "";
    this.address1 = "";
    this.address2 = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.zipcode = 0;
    this.phonenumber = 0;
    this.membership = "";
    this.initialpayment = 0;
    this.fee=0;
    this.term = "";
    this.discount_code = "";
    this.joined = "";
    this.expires = "";
    this.billingFirstname = "";
    this.billingLastname = "";
    this.membershipstatus = "";
  }
}

