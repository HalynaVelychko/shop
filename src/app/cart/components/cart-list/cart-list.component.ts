import { Subscription } from 'rxjs';
import { ProductModel } from './../../../products/model/product.model';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements
  OnInit,
  OnDestroy,
  DoCheck {
  totalPrice: number = 0;
  data!: ProductModel[];
  subs!: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.subs = this.cartService.getFromCart().subscribe(data => this.data = data)
  }

//  ngDoCheck () {
//   this.cartService.getTotalPrice().pipe(take(1)).subscribe(el => this.totalPrice = el)
//   }

  ngDoCheck () {
    this.totalPrice = this.cartService.getTotalPrice()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onIncrease(product: ProductModel): void {
    this.cartService.increaseItemInCart(product)
  }

  onDecrease(product: ProductModel): void {
    this.cartService.decreseItemInCart(product)
  }

  onRemove(product: ProductModel): void {
    this.cartService.removeProductFromTheCart(product);
    this.subs = this.cartService.getFromCart().subscribe(data => this.data = data)
  }
}
