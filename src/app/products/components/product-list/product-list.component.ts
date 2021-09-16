import { CartService } from './../../../cart/service/cart.service';
import { CartListComponent } from 'src/app/cart/components/cart-list/cart-list.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take, filter, tap} from 'rxjs/operators'
import { ProductModel } from '../../model/product.model';
import { ProdutsService } from '../../service/produts.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Observable<ProductModel[]>;

  constructor(private productService: ProdutsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCartFromList(product: ProductModel): void {
    console.log('this is ID from PLP', product)
    this.cartService.addToCart(product)
  }
}


