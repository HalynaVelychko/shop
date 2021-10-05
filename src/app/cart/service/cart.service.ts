import {  ProductModel } from './../../products/model/product.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrice = 0;
  totalQuantity = 0;
  dataCart: ProductModel[] = [];
  totalQuantityEachItem: any = [];
  isEmpty: boolean = !this.dataCart.length ? true : false;

  constructor() {
   }

  addToCart(product: ProductModel): void{
    this.dataCart.push(product);
    product.totalInTheCart++;
  };

  getFromCart(): Observable<ProductModel[]> {
    return of(this.dataCart)
  }

  increaseItemInCart(product: ProductModel) {
    product.totalInTheCart++;
  }

  decreseItemInCart(product: ProductModel) {
    product.totalInTheCart--;
  }

  getTotalPrice(): number {
    return this.dataCart.reduce((sum, el) => sum + el.totalInTheCart * el.price, this.totalPrice)
  }

  getTotalQuantity(): number {
    return this.dataCart.reduce((sum, el) => sum + el.totalInTheCart, this.totalQuantity)
  }

  removeProductFromTheCart(product: ProductModel): void {
    const index = this.dataCart.findIndex(element => element.id === product.id);
    if (index > -1) {
      this.dataCart.splice(index, 1);
    }
  }

  removeAllProducts(): ProductModel[]{
  return this.dataCart.slice(this.dataCart.length);
  }

  updateCartData() {
   this.totalPrice = this.getTotalPrice();
   this.totalQuantity = this.getTotalQuantity();
  }

}
