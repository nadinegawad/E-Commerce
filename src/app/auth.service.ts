import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient,private _router:Router) {
    if(localStorage.getItem('userToken')){
      this.getUserData();
    }
   }

userData:BehaviorSubject<any> = new BehaviorSubject('');

getUserData(){
  let encodeToken =JSON.stringify(localStorage.getItem('userToken'));
  let decoded= jwtDecode(encodeToken);
  this.userData.next(decoded);  
}

  getRegisterApi(formData:any):Observable<any>{
     return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',formData)
}
getLoginApi(formData:any):Observable<any>{
  return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',formData)
}

logOut(){
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._router.navigate(['/login']);

}

}
