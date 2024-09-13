import { Component, Input } from '@angular/core';
import { basket } from 'src/app/modules/basket/basket.module';
import { Item } from 'src/app/modules/basket/basketItem.module';
import { product } from 'src/app/modules/product.module';
import { basketService } from 'src/app/services/basket.services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
@Input() product:product = new product('','',1,'','');
constructor(private BasketService:basketService) {
  
  
}

addItem(product:product)
{

 this.BasketService.AddItemToBasket(new Item(0,product.name,product.description,product.image,1,product.price,product.categoryName));
}
removeItem(product:product)
{
  this.BasketService.RemoveItemFromBasket(new Item(0,product.name,product.description,product.image,1,product.price,product.categoryName));
}
}
