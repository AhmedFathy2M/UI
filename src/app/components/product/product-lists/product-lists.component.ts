import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs';
import { product } from 'src/app/modules/product.module';
import { paginatedProduct } from 'src/app/modules/productPage.module';
import { productService } from 'src/app/services/product.services';
import {Swiper} from 'swiper';
@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {
  pageProducts:paginatedProduct = new paginatedProduct(0,0,0,0,[]);
  @ViewChild('searchInput') searchInput: ElementRef = new ElementRef({});
  @HostListener('input', ['$event.target.value']) onInput(value:string)
  {
    this.productsService.getProductsPaginated(value);
  }
  constructor(public productsService:productService) {
    this.productsService.$products.subscribe((p)=>{this.pageProducts=p})
  }
  ngOnInit(): void {
    this.getAllProducts();
    //this.pageProducts = this.productsService.getTestData();
  }

  getAllProducts()
  {
    this.productsService.getProductsPaginated();
  }
  selectCategory(value:string)
  {
     
   this.productsService.getProductsPaginated(null,value);
  }

  getPageNumbers(totalPages: number): number[] {
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }
  selectPage(page:number,value:string){
    this.productsService.getProductsPaginated(null,value,page);
  }
  



  
}
