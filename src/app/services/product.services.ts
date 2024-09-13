import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { paginatedProduct } from "../modules/productPage.module";
import { BehaviorSubject, Observable, map } from "rxjs";
import { product } from "../modules/product.module";

@Injectable()
export class productService{
  url:string = "https://localhost:7249/api/";
  pageSize:number =4;
  pageIndex:number = 1;
  search:string = "";
  orderby:string = "";
  prds:paginatedProduct= new paginatedProduct(0,0,0,0,[]);
  $products= new BehaviorSubject<paginatedProduct>(this.prds);
  productsObs = this.$products.asObservable();
  testPageProducts:paginatedProduct = new paginatedProduct(0,0,0,0,[new product('Salad Bowl','Swap out your rice for a base of crunchy romaine lettuce. Small on carbs, BIG on flavour!',15,'https://a.storyblok.com/f/158888/700x560/ab7050da41/home_salad-bowl.png/m/300x0',''),
    new product('Burrito','The humble burrito packed with your choice of tasty fillings wrapped in a soft tortilla.',15,'https://a.storyblok.com/f/158888/1000x800/4a2b3bafa2/home_burrito.png/m/600x0',''),
    new product('Naked Burrito','Everything we love about the burrito, in a bowl. Go even lighter & swap rice for lettuce!',18,'https://a.storyblok.com/f/158888/1000x800/c899a97a23/home_naked-burrito.png/m/600x0',''),
    new product('Tacos','Three soft-shell amigos served with your choice of fresh, juicy fillings & toppings.',15,'https://a.storyblok.com/f/158888/1000x800/ebbf083538/home_tacos.png/m/600x0',''),
    new product('Quesadilla','A tortilla filled with your choice of protein & salsa melted together with Monterey Jack cheese, served with salsa & sour cream on the side. ',15,'https://a.storyblok.com/f/158888/700x560/9734a55d88/home_quesadilla.png/m/600x0',''),
    new product('Nachos','Tortilla chips smothered in chipotle cheese sauce, hand-smashed guacamole, fresh pico de gallo & jalapenos.',15,'https://a.storyblok.com/f/158888/1000x800/f293cf3678/home_nachos.png/m/600x0','')
  ]);
  constructor(private http:HttpClient) {
   
  }
  getProductsPaginated(search:string|null=null,categoryId:string='',pageIndex:number=1)
  {
    if(search !=null )
    {
        this.http.get<paginatedProduct>(`${this.url}Product?Search=${search}&categoryId=${categoryId}&pageIndex=${pageIndex}&pageSize=4`).pipe(map((p:paginatedProduct)=>{this.$products.next(p);console.log(search);})).subscribe();
    } else{
      this.http.get<paginatedProduct>(`${this.url}Product?categoryId=${categoryId}&pageIndex=${pageIndex}&pageSize=4`).pipe(map((p:paginatedProduct)=>{this.$products.next(p);console.log(search);})).subscribe();
    }
   
  }
  getTestData()
  {
    return this.testPageProducts;
  }
}