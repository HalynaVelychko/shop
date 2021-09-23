import { ProductModel } from './../../products/model/product.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrice = 0;
  dataCart: ProductModel[] = [];
  totalQuantityEachItem: any = [];

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

  removeProductFromTheCart(product: ProductModel): void {
    this.dataCart =  this.dataCart.filter(el => el.id !== product.id)
  }
}
