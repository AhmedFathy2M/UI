import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { user } from 'src/app/modules/account/account.module';
import { basket } from 'src/app/modules/basket/basket.module';
import { accountService } from 'src/app/services/account.services';
import { basketService } from 'src/app/services/basket.services';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggle:boolean = false;
  basket:basket = new basket(0,0,[]);
  @ViewChild('dropdown') dropdown: ElementRef = new ElementRef({});
  
  @HostListener('document:click', ['$event'])
   clickOutside(event: MouseEvent) {
    if(this.dropdown==undefined)
      {
        return
      }else{
        const targetElement = event.target as HTMLElement;
        if (!this.dropdown.nativeElement.contains(targetElement))
        {
        this.toggle = false;
        }else{
        this.toggle = true;
        }

      }
    
  }
  
  Currentuser:user = new user('','','','',new basket(0,0,[]));
  @ViewChild('drop') elem: ElementRef = new ElementRef({});
 
  constructor(public AccountService:accountService,private dialog:MatDialog, private elementRef: ElementRef, private BasketService:basketService ) 
  {
     AccountService.userCurrent.subscribe((p:user)=>{
      this.Currentuser = p;
      console.log(this.Currentuser)
     });
     BasketService.basket$.subscribe((p)=> this.basket = p);
  }
  
  openDialog(){
    this.dialog.open(PopupComponent);
  }

  logout() 
  {
    this.AccountService.logout();
    this.toggle = false;
  }



}


