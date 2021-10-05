import { ProductModel } from './../../model/product.model';
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product!: ProductModel;
  isDisabled: boolean = false;

  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  onAddToCart(product: ProductModel): void {
    this.isDisabled = true;
    this.addToCart.emit(product);
  }
}
