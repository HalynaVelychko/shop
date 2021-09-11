import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { productsData } from '../../data/data';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutsService {
  products: ProductModel[] = productsData;

  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return of(this.products)
  }
}
