import { ProductModel } from './../../../products/model/product.model';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() product!: ProductModel;

  @Output() increase: EventEmitter<any> = new EventEmitter<any>();
  @Output() decrease: EventEmitter<any> = new EventEmitter<any>();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
   }

  onIncrease(): void {
    this.increase.emit(this.product);
  }

  onDecrease(): void {
    this.decrease.emit(this.product);
  }

  onRemove(): void {
    this.remove.emit(this.product);
  }
}
