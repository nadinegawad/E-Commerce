export interface Wishlist {
    imageCover: string,
    price: number,
    ratingsAverage: number,
    title: string,
    _id: string,
    category: Category
}
interface Category {
    name: string
}