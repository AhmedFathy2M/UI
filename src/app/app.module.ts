import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ProductListsComponent } from './components/product/product-lists/product-lists.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { productService } from './services/product.services';
import { RouterModule } from '@angular/router';
import { appRouting } from './routing/app-routing';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/account/register/register.component';
import { accountService } from './services/account.services';
import { LoginComponent } from './components/account/login/login.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { BasketComponent } from './components/basket/basket.component';
import { basketService } from './services/basket.services';
import { BasketItemComponent } from './components/basket/basket-item/basket-item.component';
import { CareersComponent } from './components/careers/careers.component';
import { TortillaClubComponent } from './components/tortilla-club/tortilla-club.component';
import { WhatsOnComponent } from './components/whats-on/whats-on.component';
import { PopupComponent } from './components/popup/popup.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListsComponent,
    ProductItemComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BasketComponent,
    BasketItemComponent,
    CareersComponent,
    TortillaClubComponent,
    WhatsOnComponent,
    PopupComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    appRouting,
    NgxDropzoneModule,
    MatDialogModule

    
  ],
  providers: [productService, accountService, basketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
