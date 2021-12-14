import { Component, OnInit, OnChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earlybirdwithoutcultural',
  templateUrl: './earlybirdwithoutcultural.component.html',
  styleUrls: ['./earlybirdwithoutcultural.component.scss']
})
export class EarlybirdwithoutculturalComponent implements OnInit, OnChanges, AfterViewChecked {

  dataObject :any=[];
  checkObject :any=[];
  cartObject : any=[];
  totalCost: number = 0;
  cartCheck: any;
  customClass = 'customClass';


  addtoCartBtn: boolean = false;
  // kkAdultsCount: number = 0;
  // kkkidsCount: number = 0;
  // headCount: number = 0;


  private _jsonURLcart = '/assets/data/durgapuja-2021-earlybirdwithoutculture.json';
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
    let headCount = 0;
    let ticketCount = 0;
    [...this.dataObject].forEach(value => {
   //   console.log(value);
      if(value.quantity > 0){ 
        tc += (value.price * value.quantity);
      }
      let n = value.name.replace(/\s+/g, '');
      if(n === 'All3days' ){
        headCount += value.quantity;
      //  console.log("Head Count = "+ headCount);
      }

      if(n === 'KavitaKrishnamurthyConcert' ){
        ticketCount += value.quantity;
      //  console.log("Ticket Count = "+ ticketCount);
        
      }

     
     
    });

    if(ticketCount>headCount){
      this.addtoCartBtn = false;
    }
    else{
      this.addtoCartBtn = true;
    }

    this.totalCost = tc;
    this.cdr.detectChanges();
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
    
 //   this.cs.addToCart(this.checkObject);
    this.router.navigate(['/checkout']);
 //   this.router.navigate(['/heroes', { id: itemId }]);

 //   item.count = 
//    this.cartService.addToCart();
  }

}
