import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { IProducts, IProductsCart } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: IProducts | undefined;
  quantity = 1;

  constructor(
    private productsServices: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsServices.getOne(productId);
  }

  addCart(): void {
    this.notificationService.notification("O produto foi adiciona ao Carrinho");
    const product: IProductsCart = {
      ...this.product!,
      quantity: this.quantity
        }
    return this.cartService.addCart(product);
  }

}
