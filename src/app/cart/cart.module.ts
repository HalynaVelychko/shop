import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [ CartListComponent ],
  imports: [
    CommonModule,
    MatDialogModule,
  ]
})
export class CartModule { }
