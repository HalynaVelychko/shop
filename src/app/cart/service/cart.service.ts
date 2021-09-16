import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/model/product.model';
import { cartDataMock } from '../../data/cartDataMock'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrice = 0;


  constructor() {
    console.log(cartDataMock)
   }

  addToCart(product: ProductModel): any {
    return cartDataMock.push(product);
  }
}
