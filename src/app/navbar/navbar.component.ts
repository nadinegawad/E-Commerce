import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../shared services/cart.service';
import { WishlistService } from '../shared services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isLoggedin:boolean =false;
  cartNumber:number=0;
  numOfWish:number=0;
  wishlistNumber:number=0;
constructor(private _authService:AuthService,private _cartService:CartService,private _wishlistService:WishlistService){
 
}

ngOnInit(): void {

  this._cartService.numOfCartItems.subscribe({
    next:(res)=>{
      this.cartNumber=res
    }
  }) 
  this._wishlistService.numOfWish.subscribe({
    next:(res)=>{
      console.log(res);
      
      this.numOfWish=res;
    }
  }) 


this._authService.userData.subscribe(()=>{
  if(this._authService.userData.getValue()){
    this.isLoggedin=true;
  }else{
    this.isLoggedin=false;
  }
  
})

}

logOut(){
  this._authService.logOut();
}
}
