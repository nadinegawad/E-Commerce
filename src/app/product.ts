export interface Product {
    imageCover:string,
    title:string,
    price:number,
    ratingsAverage:number,
    category:Category,
    id:string,
    images?:string[],
    description:string,
}

 export interface Category{
    name:string
 }