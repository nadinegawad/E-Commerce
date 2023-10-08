import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
numOfWish:BehaviorSubject<number>=new BehaviorSubject(0);
  constructor(private _httpClient:HttpClient) {
    this.getLOggedWishlist().subscribe({
      next:(res)=>{
        console.log(res);
        this.numOfWish.next(res.count);
        console.log(this.numOfWish);
        
      },error:(err)=>{
        console.log(err);
        
      }
     })
   }

  addProductToWishlist(id:string):Observable<any>{
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
      'productId': id
    })
  }

  getLOggedWishlist():Observable<any>{
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist');
  }
  removeItem(id:string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`);
  }


}
