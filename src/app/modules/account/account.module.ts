import { basket } from "../basket/basket.module";

export class user{

    constructor(public name:string, public email:string, public  image:string, public token:string, public basket:basket) {
        
    }

}