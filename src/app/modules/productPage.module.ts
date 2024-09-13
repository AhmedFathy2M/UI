import { product } from "./product.module";

export class paginatedProduct{
   
    constructor(public pageIndex:number, public totalCount:number, public pageElementsNumber:number, public pagesNumber:number, public data:product[]) {

        
    }
}