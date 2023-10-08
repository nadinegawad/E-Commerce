export interface Cart {
    numOfCartItems:number,
    data:Data
}
interface Data{
    totalCartPrice:number,
    products:Products[],
    
}
interface Products{
    count:number,
    price:number,
    product:innerProduct
}
interface innerProduct{
    imageCover:string,
    title:string,
    category:Category,
    id:string
}
interface Category{
name:string
}