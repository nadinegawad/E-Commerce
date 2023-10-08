import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';
import { Category } from '../product';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss']
})
export class CategorySectionComponent  implements OnInit{
constructor(private _productsApiService:ProductsApiService){}
  ngOnInit(): void {
    this.getCategory();
  }
  allCategories:any[]=[] ;
  getCategory(){
    this._productsApiService.getCategoryApi().subscribe({
      next:(res)=>{
        console.log(res);
        
        this.allCategories=res.data;
        console.log(this.allCategories);
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
