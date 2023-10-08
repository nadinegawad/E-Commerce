import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';
import { ActivatedRoute } from '@angular/router'
import { Product } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../shared services/cart.service';
import { WishlistService } from '../shared services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  wishlistData: string[] = [];

  constructor(
    private _productsApiService: ProductsApiService,
    private _activatedRoute: ActivatedRoute,
    private _cartService: CartService,
    private _wishlistService:WishlistService,
    private _toastrService :ToastrService ) { }
  productId!: string;
  productInfo: Product ={} as Product;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      this.productId = res.params.id;
    })
    this.getProductInfo(this.productId);
    this._wishlistService.getLOggedWishlist().subscribe({
      next: (res) => {
        const newData = res.data.map((item: any) => item.id);
        this.wishlistData = newData;
      }
    })
  }

  getProductInfo(id: string) {
    this._productsApiService.getProductById(id).subscribe({
      next: (response) => {
        this.productInfo = response.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  addToCart(productID: string) {
    this._cartService.addProductToCart(productID).subscribe({
      next: (res) => {
        this._cartService.numOfCartItems.next(res.numOfCartItems);
        this._toastrService.success(res.message);
        console.log(res);
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

  //owl
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
}





