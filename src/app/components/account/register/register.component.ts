import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl, NgModelGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/modules/account/account.module';
import { basket } from 'src/app/modules/basket/basket.module';
import { accountService } from 'src/app/services/account.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  file: File | null = null;
  preview: string = 'https://a7d8569e3529db9a74020d4dd5ba3f45.cdn.bubble.io/f1719613757597x126322060953073740/Image.png';
  userRegister:user = new user('','','','',new basket(0,0,[]));
  group:FormGroup = new FormGroup(
    {
      Image: new FormControl('https://a7d8569e3529db9a74020d4dd5ba3f45.cdn.bubble.io/f1719613757597x126322060953073740/Image.png'),
      userName:new FormControl('',[Validators.required]),
      Email: new FormControl('',[Validators.required, Validators.email]),
      Password: new FormControl('',[Validators.required])

    }
  )
constructor(private accountsService:accountService, public navigate:Router) {
  
}
 register()
 {
  this.group.get('Image')?.setValue(this.preview);
   this.accountsService.register(this.group.value).subscribe();
   this.navigate.navigate(['/']);

 }
  ngOnInit(): void {
    console.log(this.group.get('Email'))
  }
  onSelect(event: any) {
    const file = event.addedFiles[0];
    this.file = file;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.preview = e.target.result;
    };
    reader.readAsDataURL(file);
  }
 

}
