import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(  private http: HttpClient ) {}

  addToCart(product) { console.log(product);

    this.items.forEach( (item, index) => {
      if(item.category === product.category) this.items.splice(index,1);
    });

    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}