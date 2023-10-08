
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, Validator } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private _authService: AuthService,
    private _httpClient: HttpClient,
    private _router: Router
  ) { }

  //form Group//
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),

    // }, {Validators: {this.passwordMatchingValidatior} }
  },{
    validators:this.validateRepassword
  });
  isLoading: boolean = false;
  isNotvalid: boolean = false;
  //api//

  validateRepassword(registerForm: any) {
    let passwordControl = registerForm.get('password');
    let repasswordControl = registerForm.get('rePassword');
    if(passwordControl.value==repasswordControl.value){
      return null;
    }else{
      repasswordControl.setErrors({notMatched:"Password and Repassword should be matched"});
      return {notMatched:"Password and Repassword should be matched"};
    }
  }
  handelRegister(form: FormGroup) {
    console.log(form);
    if (form.valid) {
      this.isLoading = true;
      this._authService.getRegisterApi(form.value).subscribe({
        next: (response) => {
          this.isLoading = false;
          this._router.navigate(['/login']);
        },
        error: (err) => {
          this.isLoading = false;
        },
      });
    } else {
      this.isNotvalid = true;
    }
  }
}
