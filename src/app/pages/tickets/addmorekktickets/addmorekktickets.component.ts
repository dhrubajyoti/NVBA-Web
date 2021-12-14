import { Component, OnInit, OnChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';
import { timestamp } from 'rxjs/operators';
import { MemberDetailsService } from './../../../services/member-details.service';
import { UserService } from './../../auth/core/user.service';

@Component({
  selector: 'app-addmorekktickets',
  templateUrl: './addmorekktickets.component.html',
  styleUrls: ['./addmorekktickets.component.scss']
})
export class AddmorekkticketsComponent implements OnInit, OnChanges, AfterViewChecked {

  dataObject :any=[];
  checkObject :any=[];
  cartObject : any=[];
  totalCost: number = 0;
  cartCheck: any;
  customClass = 'customClass';
  member:any;


  addtoCartBtn: boolean = true;
  headCount: number;
  kidsCount: number;

  kkticket:boolean = false;
  // kkAdultsCount: number = 0;
  // kkkidsCount: number = 0;
  // headCount: number = 0;


  private _jsonURLcart = '/assets/data/durgapuja-2021-earlybird.json';
   constructor(
     private http: HttpClient, 
     private cs: CartService, 
     public router: Router, 
     private cdr: ChangeDetectorRef,
     public userService: UserService,
     ) {
    this.cs.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck);
    this.getJSON().subscribe(data => {
   //   console.log(data);
      this.dataObject = data;
      this.checkData();
     });
   }
   
   ngOnInit(): void {

    this.userService.cast.subscribe( m => {
      this.member = m;
      console.log(this.member);
    //  this.lastOrder = this.member.purchase? true : false ;
      
    //  console.log(this.lastOrder);
    //  this.createForm(this.member.id, this.member.firstname, this.member.lastname,this.member.photoURL, this.member.address1, this.member.address2, this.member.city, this.member.state, this.member.country, this.member.zipcode );
   });
    
  }

   public getJSON(): Observable<any> {
     return this.http.get(this._jsonURLcart);
   }

   checkData(){
    [...this.dataObject].forEach(value => {
      [...this.cartCheck].forEach(element => {
        if(value.sku === element.sku){
          value.quantity = element.quantity;
        }
      });
       
    });
 //   console.log('this.dataObject - Check data');
 //   console.log(this.dataObject);
   }

  
  ngOnChanges(): void{
    
  }

  ngAfterViewChecked(): void {
    this.findTicketDetails();
    let tc = 0;
    this.headCount = 0;
    let ticketCount = 0;
    this.kidsCount = 0;
    let kidsTicketKK = 0;
    
    [...this.dataObject].forEach(value => {
   //   console.log(value);
      if(value.quantity > 0){ 
        tc += (value.price * value.quantity);
      }

      // Ticket Logic
      if(value.sku =='DP2021EBKKS01' ){
        ticketCount += value.quantity;
        this.kkticket = true;
      }
     
      if(value.sku =='DP2021EBKKS02' ){
          kidsTicketKK += value.quantity;
          console.log(kidsTicketKK);
          this.kkticket = true;
      }

      // let n = value.name.replace(/\s+/g, '');
      // if(n === 'All3days' ){
      //   if(value.sku =='DP2021EBALL06KID' ){
      //     this.kidsCount += value.quantity;
      // //    console.log('addKids');
      //   }
      //   else{
      //     this.headCount += value.quantity;
      //   }
      // }

      // if(n === 'KavitaKrishnamurtiConcert' ){
      //   if(value.sku =='DP2021EBKKS02' ){
      //     kidsTicketKK += value.quantity;
      //   }
      //   else{
      //     ticketCount += value.quantity;
      //     if(value.quantity){
      //       this.kkticket = true ;
      //     }
      //     else{
      //       this.kkticket = false;
      //     }
          
      //   }
        
      // }

      
      

    
     
    });

  

    
    if(ticketCount>(this.generalSeat - this.kkHeadCount )){
      this.addtoCartBtn = false;
    }
    else{
      this.addtoCartBtn = true;
    }

    if(kidsTicketKK>(this.kidHeadCount - this.kkHeadCountkid)){
      this.addtoCartBtn = false;
    }

    this.totalCost = tc;
    this.cdr.detectChanges();
  }

  maxValue(sku:string){
    let v: number = 0;
    
    if(sku == 'DP2021EBKKS01'){
      v = this.generalSeat - this.kkHeadCount;
     // v = 2;
    //  console.log(sku );
    }
    if(sku == 'DP2021EBKKS02'){
      v = this.kidHeadCount - this.kkHeadCountkid;
    //  console.log(sku );
    }
    
  //  console.log(v);
    return v;
  }
  
  addToCartobj(){
    this.cs.items = [];
    [...this.dataObject].forEach(value => {
  //    console.log(value.quantity);
  //    console.log(value);
      if(value.quantity > 0){ //alert(value.quantity);
       
        this.totalCost += (value.price * value.quantity);
        value.tax = (value.price * value.quantity) * 0.00; 
        value.tax = parseFloat(value.tax).toFixed(2);
        this.cs.addToCart(value);
      //  console.log(value.tax);
     //   this.checkObject.push(value);
     } 
    });
    
   
    if(!this.kkticket){
        if (confirm('Are you sure you don\'t want to watch Kavita Krishnamurti concert?')) {
          // Save it!
          console.log('Go to checkout page.');
          this.router.navigate(['/home']);
        } else {
          // Do nothing!
          console.log('Please take KK tickets.');
        }
    }
    else{
      this.router.navigate(['/checkout']);
    }

    

 //   this.cs.addToCart(this.checkObject);
  //  this.router.navigate(['/checkout']);
 //   this.router.navigate(['/heroes', { id: itemId }]);

 //   item.count = 
//    this.cartService.addToCart();
  }


  
 kkHeadCount:number =0;
 kkHeadCountkid:number =0;
 nonHeadCount:number=0;
 vegHeadCount:number=0;
 kidHeadCount:number=0;
 generalSeat:number=0;

 addMoreKK:boolean=false;

  findTicketDetails(){
    this.kkHeadCount =0;
    this.kkHeadCountkid =0;
    this.nonHeadCount=0;
    this.vegHeadCount=0;
    this.kidHeadCount=0;
    this.generalSeat=0;

    [...this.member.purchase].forEach(ex => {
    [...ex].forEach(e => {
      console.log(e);
      let n = e.name.replace(/\s+/g, '');
      if(n === 'All3days' ){

          
          if(e.sku.includes("NON")){
              this.nonHeadCount += e.quantity ;
              this.generalSeat  +=e.quantity;
    //           console.log('element.quantity'+e.quantity);
          }
          if(e.sku.includes("VEG")){
              this.vegHeadCount += e.quantity ;
              this.generalSeat  +=e.quantity;
          }
          if(e.sku.includes("KID")){
              this.kidHeadCount += e.quantity ;
          }
      }

          if(e.sku == 'DP2021EBKKS01'){
              this.kkHeadCount += e.quantity ;
      //            console.log(e.quantity);
          }
          if(e.sku == 'DP2021EBKKS02'){
              this.kkHeadCountkid += e.quantity ;
      //            console.log(e.quantity);
          }

    });
  });

  
    this.generalSeat = this.nonHeadCount + this.vegHeadCount;
      console.log('Adult Count -'+ this.generalSeat );
      console.log('Kids Count -'+this.kidHeadCount  );
      console.log('KK Count -'+this.kkHeadCount  );
      console.log('KK Kids Count -'+this.kkHeadCountkid  );
      if(this.kkHeadCount<this.generalSeat){
        this.addMoreKK = true; 
        console.log("Need Ticket.")
      }
  }
  
 

  clearCart(){
    [...this.dataObject].forEach(value => {
      value.quantity = 0;
    });
  }


}
