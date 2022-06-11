import { Injectable } from '@angular/core';
import { IProductsCart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itens: IProductsCart[] = [];
  constructor() { }

  addCart(product: IProductsCart) {
    this.itens.push(product);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  itensCart() {
    this.itens = JSON.parse(localStorage.getItem('cart') || '');
    return this.itens;
  }

  clearCart () {
    this.itens = [];
    localStorage.clear();
  }
}
