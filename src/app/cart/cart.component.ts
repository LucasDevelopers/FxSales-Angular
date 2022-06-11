import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProductsCart } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itensCart: IProductsCart[] = [];

  constructor(
    public cartService : CartService
  ) { }

  ngOnInit(): void {
    this.itensCart = this.cartService.itensCart();
  }

}
