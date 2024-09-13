import { Component } from '@angular/core';
import { basket } from 'src/app/modules/basket/basket.module';
import { Item } from 'src/app/modules/basket/basketItem.module';
import { basketService } from 'src/app/services/basket.services';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  basket:basket = new basket(0,0,[new Item(0,'Burrito','A toasted flour tortilla wrap packed with your choice of tasty rice, beans, protein & fresh salsas.','https://a.storyblok.com/f/158888/1000x800/4a2b3bafa2/home_burrito.png/m/300x0',25,5,''),new Item(0,'Naked Burrito ','Everything we love about a burrito… lovingly served in a bowl instead!','https://a.storyblok.com/f/158888/1000x800/c899a97a23/home_naked-burrito.png/m/300x0',30,25,'lol'),
    new Item(0,'Tres Tacos','Three soft shell amigos served with fresh, juicy fillings & toppings','https://a.storyblok.com/f/158888/1000x800/ebbf083538/home_tacos.png/m/300x0',5,25,'')
  ]);
  constructor(private BasketService:basketService) {
    // BasketService.basket$.subscribe(p=> this.basket = p);
  }

}
