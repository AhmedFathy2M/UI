import { Component } from '@angular/core';
import { product } from 'src/app/modules/product.module';
import { paginatedProduct } from 'src/app/modules/productPage.module';
import { productService } from 'src/app/services/product.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
products:paginatedProduct = new paginatedProduct(1,1,1,1,[]);
constructor(private productService:productService) {
this.products = productService.getTestData();
  
}
 
contact()
{
  
}
}
