export class FirebaseUserModel {
  image: string;
  name: string;
  provider: string;
  email: string;

  constructor(){
    this.image = "";
    this.name = "";
    this.provider = "";
    this.email = "";
  }
}


export class MemberModel {
  image: string;
  name: string;
  provider: string;
  email: string;

  constructor(){
    this.image = "";
    this.name = "Guest";
    this.provider = "";
    this.email = "";
  }
}

