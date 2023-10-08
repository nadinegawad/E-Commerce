import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.scss']
})
export class CategoryInfoComponent implements OnInit {
constructor(private _productsApiService:ProductsApiService,private _activatedRoute:ActivatedRoute){}
categoryId!:string;
categoryInfo:Product[]=[];
ngOnInit(): void {
    this._activatedRoute.params.subscribe((res:any)=>{
      this.categoryId=res.id;
      console.log(this.categoryId);
      this.getCategory(this.categoryId);
    })
}
getCategory(id:string){
this._productsApiService.getcategoryById(id).subscribe({
  next:(res)=>{
    this.categoryInfo=res.data;
    console.log(res);
    
  },
  error:(err)=>{
    console.log(err);
    
  }
})
}
}
