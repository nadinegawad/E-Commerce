import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared services/cart.service';
import { Cart } from './interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _cartService: CartService) { }
  ngOnInit(): void {
    this.getCart();
  }
  cartInfo: Cart = {} as Cart;
  getCart() {
    this._cartService.getCart().subscribe({
      next: (res) => {
        this.cartInfo = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  UpdateCount(count: number, id: string) {
    this._cartService.updateCountProduct(count, id).subscribe({
      next: (res) => {
        this.cartInfo = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  remove(id: string) {
    this._cartService.removeProduct(id).subscribe({
      next: (res) => {
        this.cartInfo = res;
        this._cartService.numOfCartItems.next(res.numOfCartItems);

        
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
