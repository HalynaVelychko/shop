import { CartService } from './../../../cart/service/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CartListComponent } from 'src/app/cart/components/cart-list/cart-list.component';
import { cartDataMock } from 'src/app/data/cartDataMock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild('appTitle')
  title!:  ElementRef<HTMLHeadingElement>;

  constructor() { }

  ngAfterViewInit(){
    this.title.nativeElement.innerText = "Cars here!"
  }
};
