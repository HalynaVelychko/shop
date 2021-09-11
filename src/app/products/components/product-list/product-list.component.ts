import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../model/product.model';
import { ProdutsService } from '../../service/produts.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Observable<ProductModel[]>;

  constructor(private productService: ProdutsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
