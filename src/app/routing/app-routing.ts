import { Route, RouterModule } from "@angular/router";
import { ProductListsComponent } from "../components/product/product-lists/product-lists.component";
import { NgModule } from "@angular/core";
import { ProductComponent } from "../components/product/product.component";
import { HomeComponent } from "../components/home/home.component";
import { RegisterComponent } from "../components/account/register/register.component";
import { LoginComponent } from "../components/account/login/login.component";
import { BasketComponent } from "../components/basket/basket.component";
import { CareersComponent } from "../components/careers/careers.component";
import { TortillaClubComponent } from "../components/tortilla-club/tortilla-club.component";
import { WhatsOnComponent } from "../components/whats-on/whats-on.component";
const routes:Route[]=[
    {path:'', component:HomeComponent, pathMatch:'full'},
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'basket',component:BasketComponent},
    {path:'careers',component:CareersComponent},
    {path:'club-tortilla',component:TortillaClubComponent},
    {path:'whats-on',component:WhatsOnComponent},
    {path:'menu', component: ProductComponent, children:[
        {path:'', component:ProductListsComponent,pathMatch:'full'}
    ]}
]
@NgModule({
   
    imports: [
      RouterModule.forRoot(routes),
      
    ],
  })
export class appRouting
{
    
 
}