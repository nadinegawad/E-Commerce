import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';
import { Category } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
constructor(private _productsApiService:ProductsApiService){}
ngOnInit(): void {
  this.getCategory();
}
allCategories:any[]=[] ;
getCategory(){
  this._productsApiService.getCategoryApi().subscribe({
    next:(res)=>{
      this.allCategories=res.data;
    }
  })
}

//owl
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  margin:10,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 8
    }
  },
  nav: true
}
}
