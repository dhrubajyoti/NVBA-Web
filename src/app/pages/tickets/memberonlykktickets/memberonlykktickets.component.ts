import { Component, OnInit, OnChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-memberonlykktickets',
  templateUrl: './memberonlykktickets.component.html',
  styleUrls: ['./memberonlykktickets.component.scss']
})
export class MemberonlykkticketsComponent implements OnInit, OnChanges, AfterViewChecked {

  dataObject :any=[];
  checkObject :any=[];
  cartObject : any=[];
  totalCost: number = 0;
  cartCheck: any;
  customClass = 'customClass';


  addtoCartBtn: boolean = true;
  headCount: number;
  kidsCount: number;

  kkticket:boolean = false;
  // kkAdultsCount: number = 0;
  // kkkidsCount: number = 0;
  // headCount: number = 0;


  private _jsonURLcart = '/assets/data/durgapuja-2021-extra.json';
   constructor(private http: HttpClient, private cs: CartService, public router: Router, private cdr: ChangeDetectorRef) {
    this.cs.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck);
    this.getJSON().subscribe(data => {
   //   console.log(data);
      this.dataObject = data;
      this.checkData();
     });
   }
   
   ngOnInit(): void {
    
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
    let tc = 0;
    this.headCount = 0;
    let ticketCount = 0;
    this.kidsCount = 0;
    let kidsTicketKK = 0;
    let satVisit = false;
    let sunVisit = false;
    
    [...this.dataObject].forEach(value => {
   //   console.log(value);
      if(value.quantity > 0){ 
        tc += (value.price * value.quantity);
      }

      // Ticket Logic
      let n = value.name.replace(/\s+/g, '');
      if(n === 'SaturdayVisitOnly' ){
        if(value.sku =='DP2021SATVISIT01' ){
          if(value.quantity){
            satVisit = true;
          }
          else{
            satVisit = false;
          }
      //    console.log('addKids');
        }
        
      }

      if(n === 'SundayVisitOnly' ){
        if(value.sku =='DP2021SUNVISIT02' ){
          if(value.quantity){
            sunVisit = true;
          }
          else{
            sunVisit = false;
          }
      //    console.log('addKids');
        }
      }

      
     
    });

    
    if(sunVisit && satVisit ){
      this.addtoCartBtn = false;
    }
    else{
      this.addtoCartBtn = true;
    }



    this.totalCost = tc;
    this.cdr.detectChanges();
  }

  maxValue(sku:string){
    let v: number = 0;
    
    if(sku == 'DP2021RGKKS02'){
      v = this.kidsCount;
    //  console.log(sku );
    }
    if(sku == 'DP2021RGKKS01'){
      v = this.headCount;
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
    
    this.router.navigate(['/checkout']);
   
    // if(!this.kkticket){
    //     if (confirm('Are you sure you don\'t want to watch Kavita Krishnamurti concert?')) {
    //       // Save it!
    //       console.log('Go to checkout page.');
    //       this.router.navigate(['/checkout']);
    //     } else {
    //       // Do nothing!
    //       console.log('Please take KK tickets.');
    //     }
    // }
    // else{
    //   this.router.navigate(['/checkout']);
    // }

    

 //   this.cs.addToCart(this.checkObject);
  //  this.router.navigate(['/checkout']);
 //   this.router.navigate(['/heroes', { id: itemId }]);

 //   item.count = 
//    this.cartService.addToCart();
  }

  clearCart(){
    [...this.dataObject].forEach(value => {
      value.quantity = 0;
    });
  }


}