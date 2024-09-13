import { Component, Input } from '@angular/core';
import { Item } from 'src/app/modules/basket/basketItem.module';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})

export class BasketItemComponent {
  @Input()BasketItem:Item = new Item(0,'','','',0,0,'');
}
