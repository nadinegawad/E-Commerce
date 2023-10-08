import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  constructor(private _productsApiService: ProductsApiService) {}
 ngOnInit(): void {
  this.getAllProducts()
 }
 allProducts:Product[]=[];
 searchKey:string='';
  getAllProducts() {
    this._productsApiService.getProduct().subscribe({
      next: (response) => {
        this.allProducts=response.data;
      },
      error:(err)=>{
        console.log(err);

      }
    });
  }
}
