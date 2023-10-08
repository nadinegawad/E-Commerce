import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private _httpClient: HttpClient) {}

  getProduct(): Observable<any> {
    return this._httpClient.get(
      'https://ecommerce.routemisr.com/api/v1/products'
    );
  }

  getProductById(id:any): Observable<any> {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  getCategoryApi(): Observable<any> {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }
getcategoryById(categoryId:string):Observable<any>{
  return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`);
}



}
