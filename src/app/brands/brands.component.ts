import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';
import { Brand } from '../brand';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
  
constructor(private _brandsService:BrandsService){}
allBrands:Brand[]=[];
ngOnInit(): void {
    this.getbrands();
}
getbrands(){
  this._brandsService.getAllBrands().subscribe({
    next:(res)=>{
      this.allBrands=res.data;
      console.log(res);
      console.log(this.allBrands);
      
    },
    error:(err)=>{
      console.log(err);
    }
  })
}


}
