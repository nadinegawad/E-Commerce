import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../shared services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl('', [Validators.required])
  })
cartId:string='';
  constructor(private _cartService: CartService) {
    this._cartService.cartId.subscribe(res =>{
      this.cartId=res;
    })
   }
  handelPayment() {
    console.log(this.shippingAddress);
    this._cartService.generateCartPayment(this.cartId, this.shippingAddress.value).subscribe({
      next: (res) => {
        console.log(res);
        if(res.status == 'success'){
          window.location.href=res.session.url;
        }
      },
      error: (err) => {
        console.log(err);

      }
    })

  }

  // getAllOrders(){
  //   this._cartService.getOrder().subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //     },
  //     error:(err)=>{
  //       console.log(err);
        
  //     }
  //   })
  // }
}
