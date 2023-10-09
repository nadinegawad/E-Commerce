import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  numOfCartItems:BehaviorSubject<number> = new BehaviorSubject(0);
  cartId:BehaviorSubject<string>=new BehaviorSubject('');
  constructor(private _httpClient: HttpClient) {
    this.getCart().subscribe({
      next: (res) => {
        this.numOfCartItems.next(res.numOfCartItems);
        this.cartId.next(res.data._id);
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  addProductToCart(productId: string): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
      {
        "productId": productId
      }
    )
  }

  getCart(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart')
  }
  updateCountProduct(count: number, id: string): Observable<any> {
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
      count: `${count}`
    },
      {
        headers: {
          token: `${localStorage.getItem('userToken')}`
        }
      })
  }

  removeProduct(id: string): Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
  }

  generateCartPayment(cartId: string, shippingAddress: any): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://nadinegawad.github.io/E-Commerce`, {
      shippingAddress: shippingAddress
    })
  }

  }
