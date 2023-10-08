import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../shared services/wishlist.service';
import { Wishlist } from './wishlist';
import { CartService } from '../shared services/cart.service';
import { Product } from '../product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
constructor(private _wishlistService:WishlistService ,private _cartService :CartService,private _toastrService :ToastrService ){}
allWishlist:Product[] =[];
ngOnInit(): void {
  this.getWishlist();
}
getWishlist(){
  this._wishlistService.getLOggedWishlist().subscribe({
    next:(res)=>{
      console.log(res);
      
      this.allWishlist=res.data;
      console.log(this.allWishlist);
      
      this._wishlistService.numOfWish.next(res.data.length)

    }
  })
}
addToCart(productID: string) {
  this._cartService.addProductToCart(productID).subscribe({
    next: (res) => {
      this._cartService.numOfCartItems.next(res.numOfCartItems);
      this._toastrService.success(res.message);

    }
  })
}
remove(productID: string){
  this._wishlistService.removeItem(productID).subscribe({
    next:(res)=>{
      this.getWishlist();
      this._wishlistService.numOfWish.next(res.data.length)

    }
  })
  
}
}
