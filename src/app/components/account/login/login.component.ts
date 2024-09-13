import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/modules/account/account.module';
import { basket } from 'src/app/modules/basket/basket.module';
import { accountService } from 'src/app/services/account.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userRegister:user = new user('','','','',new basket(0,0,[]));
  group:FormGroup = new FormGroup(
    {
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])

    }
  )
constructor(private accountsService:accountService) {
  
}
 
  login()
  {
    this.accountsService.login(this.group.value).subscribe(p=> console.log(p));
  }
  ngOnInit(): void {
     
  }

}
