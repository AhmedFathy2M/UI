import { Component } from '@angular/core';
import { accountService } from './services/account.services';
import { basketService } from './services/basket.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Little-Goat';
  token:string= '';
  constructor(public AccountService:accountService, private BasketService:basketService) {
    this.loadUser();
    this.loadBasket();
  }
  loadBasket()
  {
    this.token = localStorage.getItem('token') ?? '';
         if(this.token != '')
          {
            this.BasketService.loadBasket(this.token).subscribe();
          }
  }
  loadUser()
  {
    if(localStorage.getItem('token'))
      {
         this.token = localStorage.getItem('token') ?? '';
         if(this.token != '')
          {
            this.AccountService.loadCurrentUser(this.token).subscribe(
              (p)=>{console.log(p);},
              (error)=>{console.log(error);}
            );
          }
      
      }
  }
}
