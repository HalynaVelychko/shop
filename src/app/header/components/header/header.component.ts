import { CartService } from './../../../cart/service/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { CartListComponent } from 'src/app/cart/components/cart-list/cart-list.component';
import { cartDataMock } from 'src/app/data/cartDataMock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly dialog: MatDialog) { }

  onOpenCart() {
    this.dialog.open(CartListComponent, {
      data: cartDataMock
    });
  };
};
