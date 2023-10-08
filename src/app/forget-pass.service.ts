import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPassService {

  constructor(private _httpClient: HttpClient) { }
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/auth/'
  forgetPassword(email: string): Observable<any> {
    return this._httpClient.post(this.baseUrl + 'forgotPasswords', {
      "email": email
    })
  }

  resetCode(resetCode:string):Observable<any>{
    return this._httpClient.post(this.baseUrl+'verifyResetCode',{
      "resetCode":resetCode

    })
  }
  resetPassword(newpassword:string,email:string):Observable<any>{
    return this._httpClient.put(this.baseUrl+'resetPassword',{
      "email":email,
      "newPassword": newpassword
    })
  }
}
