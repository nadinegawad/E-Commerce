import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetPassService } from '../forget-pass.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-passwword',
  templateUrl: './forget-passwword.component.html',
  styleUrls: ['./forget-passwword.component.scss']
})
export class ForgetPasswwordComponent {
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  email: string = '';
  userMsg: string = '';
  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  })

  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl("", [Validators.required])
  })

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)])
  })

  constructor(private _forgetPassService: ForgetPassService, private _Router: Router, private _AuthService: AuthService) { }
  forgetPassword(email: string): void {
    this.email = email;
    this._forgetPassService.forgetPassword(email).subscribe({
      next: (res) => {
        this.userMsg = res.message;
        this.step1 = false;
        this.step2 = true;


      }, error: (err) => {
        this.userMsg = err.error.message;

      }


    })
  }
  resetCode(): void {
    let resetCode = this.resetCodeForm.value.resetCode;
    this._forgetPassService.resetCode(resetCode).subscribe({
      next: (res) => {
        this.userMsg = res.status;
        this.step2 = false;
        this.step3 = true;

      }, error: (err) => {
        this.userMsg = err.error.message;
      }
    })
  }
  resetPassword(): void {
    let newPassword = this.resetPasswordForm.value.newPassword;
    this._forgetPassService.resetPassword(newPassword, this.email).subscribe({
      next: (res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('userToken', res.token);
          this._AuthService.getUserData();
          this._Router.navigate(['/home'])

        }
        this.userMsg = res.message; 
        this.step3 = false;
      }, error: (err) => {
        console.log(err);

        this.userMsg = err.error.message;
      }
    })
  }
}
