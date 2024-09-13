import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { user } from "../modules/account/account.module";
import { BehaviorSubject, map } from "rxjs";
import { Router } from "@angular/router";
import { basket } from "../modules/basket/basket.module";

@Injectable()
export class accountService{
private currentUser = new BehaviorSubject<user>(new user('','','','',new basket(0,0,[])));
 userCurrent = this.currentUser.asObservable();
url:string = "https://localhost:7249/api/";
constructor(public HttpService:HttpClient, public router:Router) {

    
}
loadCurrentUser(token:string)
{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',`Bearer ${token}`);
    return this.HttpService.get<user>(this.url+'Account',{headers}).pipe(map((p:user)=>{
        if(p)
            {
                localStorage.setItem('token',p.token);
                this.currentUser.next(p);
            }
    }));

}
register(values:any)
{
    return this.HttpService.post<user>(`${this.url}Account/register`, values).pipe(
        map((user:user)=>{
            if(user)
                {
                    localStorage.setItem('token',user.token);
                    this.currentUser.next(user);
                    this.login(values);
                } 
        })
    );
}

login(values:any)
{
    return this.HttpService.post<user>(`${this.url}Account/login`, values).pipe(
        map((user:user)=>{
            if(user)
                {
                    localStorage.setItem('token',user.token);
                    
                    this.currentUser.next(user);
                    console.log(user);
                } 
        })
    );
}
logout()
{
    localStorage.removeItem('token');
    this.currentUser.next(new user('','','','',new basket(0,0,[])));
    this.router.navigateByUrl('/');
}




}