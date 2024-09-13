import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { basket } from "../modules/basket/basket.module";
import { product } from "../modules/product.module";
import { Item } from "../modules/basket/basketItem.module";

@Injectable()
export class basketService{
url:string = "https://localhost:7249/api/";
private basket= new BehaviorSubject<basket>(new basket(0,0,[]));
basket$ = this.basket.asObservable();

constructor(private http:HttpClient) {


}
loadBasket(token:string)
{
  let headers = new HttpHeaders();
  headers = headers.set('Authorization',`Bearer ${token}`);
  return this.http.get<basket>(this.url+'Basket',{headers}).pipe(map((p:basket)=>{
    if(p)
      {
        this.basket.next(p);
      }
  }))
}
AddItemToBasket(basketItem:Item)
{
  let token = localStorage.getItem('token') ?? '';
  let headers = new HttpHeaders();
  headers = headers.set('Authorization',`Bearer ${token}`);
    return this.http.post<basket>(this.url+`Basket`,basketItem,{headers}).pipe(map((p:basket)=>{
        this.basket.next(p);
    })).subscribe();
}

RemoveItemFromBasket(basketItem:Item)
{
  let token = localStorage.getItem('token') ?? '';
  let headers = new HttpHeaders();
  headers = headers.set('Authorization',`Bearer ${token}`);
    return this.http.post<basket>(this.url+`Basket/remove`,basketItem,{headers}).pipe(map((p:basket)=>{
        this.basket.next(p);
    })).subscribe()
}




}
