import { Item } from "./basketItem.module";
import { v4 as uuid } from "uuid";

export class basket{

    constructor(public totalPrice:number, public itemsCount:number ,public items:Item [] = []) {

        
    }
}