import { Router } from '@angular/router';
import { Product } from './../product';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../shared services/cart.service';
import { WishlistService } from '../shared services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  constructor(
    private _router: Router,
    private _cartService: CartService,
    private _wishlistService: WishlistService,
    private _toastrService :ToastrService 
  ) { }
  @Input() product: Product = {} as Product;
  wishlistData: string[] = [];
 
  ngOnInit(): void {
    this._wishlistService.getLOggedWishlist().subscribe({
      next: (res) => {
        const newData = res.data.map((item: any) => item.id);
        this.wishlistData = newData;
      }
    })
  }
  callProductInfo() {
    this._router.navigate(['/productInfo'])
  }

  addToCart(productID: string) {
    this._cartService.addProductToCart(productID).subscribe({
      next: (res) => {
        this._cartService.numOfCartItems.next(res.numOfCartItems);
        console.log(res.message);
        this._toastrService.success(res.message);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  addToWishlist(productID: string) {
    this._wishlistService.addProductToWishlist(productID).subscribe({
      next: (res) => {
        this.wishlistData = res.data;
        this._wishlistService.numOfWish.next(res.data.length);
        this._toastrService.success(res.message);

      }, error: (err) => {
        console.log(err);

      }
    })
  }
  removeFav(productID: string): void {
    this._wishlistService.removeItem(productID).subscribe({
      next: (res) => {
        this.wishlistData = res.data;
        this._wishlistService.numOfWish.next(res.data.length);
        this._toastrService.error(res.message);

      }
    })
  }
}
