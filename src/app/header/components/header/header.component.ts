import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { CartListComponent } from 'src/app/cart/components/cart-list/cart-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly dialog: MatDialog) { }

  onOpenCart() {
    this.dialog.open(CartListComponent, {
      data: {
        name: "Mazdax7",
        price: 30000,
        imageUrl: '../../../../assets/images/mazdaCX7.jpg'
      }
    });
  };
};
