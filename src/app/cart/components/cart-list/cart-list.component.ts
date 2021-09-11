import { cartDataMock } from './../../../data/cartDataMock';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModel } from 'src/app/products/model/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductModel[]) {
    this.data = cartDataMock;
   }

  trackById(index:number, data:ProductModel):number {
    return data.id
  }
}
