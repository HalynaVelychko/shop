import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { HeaderModule } from './header/header.module';
import { constans, constService } from './core/services/constants.service';

;

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    CartModule,
    ProductsModule,
    HeaderModule,
    SharedModule,
  ],
  providers: [
    {
      provide: constService, useValue: constans
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
