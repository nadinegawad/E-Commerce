import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private _authService: AuthService,
    private _httpClient: HttpClient,
    private _router:Router
  ) {}
//form Group//
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/),
    ]),
  
  });
  isLoading: boolean = false;
  isNotvalid:boolean=false;
  errMsg!:any;
  //api//
  handelLOgin(form: FormGroup) {
    console.log(form);
    if (form.valid) {
      this.isLoading = true;
      this._authService.getLoginApi(form.value).subscribe({
        next: (response) => {
          localStorage.setItem('userToken',response.token);
          this._authService.getUserData();
          this.isLoading = false;
          this._router.navigate(['/home']);
        },
        error: (err) => {
          this.isLoading = false;
          this.errMsg=err.error.message;
        },
      });
    } else {
      this.isNotvalid=true;
    }
  }

}
