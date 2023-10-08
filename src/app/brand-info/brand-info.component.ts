import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from '../brand';
import { Product } from '../product';

@Component({
  selector: 'app-brand-info',
  templateUrl: './brand-info.component.html',
  styleUrls: ['./brand-info.component.scss']
})
export class BrandInfoComponent  implements OnInit{
constructor(private _brandsService:BrandsService ,private _activatedRoute:ActivatedRoute){}
brandInfo:Product []=[]
brandId!:string;
ngOnInit(): void {
    this._activatedRoute.params.subscribe((res:any)=>{
      this.brandId=res.id;
      this.getbrandbyId(this.brandId)
    })
}
getbrandbyId(id:string){
  this._brandsService.getBrandById(id).subscribe({
    next:(res)=>{
      console.log(res);
      
      this.brandInfo=res.data;
      
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
}
