import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ CartListComponent, CartItemComponent ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    SharedModule,
  ],
  exports: [
    CartListComponent,
  ],
})
export class CartModule { }
