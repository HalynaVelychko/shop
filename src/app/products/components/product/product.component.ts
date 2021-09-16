import { ProductModel } from './../../model/product.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: ProductModel;

  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  onAddToCart(product: ProductModel): void {
    this.addToCart.emit(product);
  }
}
