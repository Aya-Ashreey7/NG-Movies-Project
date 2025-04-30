import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {FormControl,FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,ReactiveFormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private readonly userService:UserService, private router: Router ){}

  errorMessage:string=""
  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
    age: new FormControl(null, [Validators.required, Validators.min(18),Validators.max(60)]),
    email: new FormControl (null, [Validators.required , Validators.email]),
    password: new FormControl (null, [Validators.required])
  })

  sendData(){
    if(this.registerForm.valid){
      this.userService.signup(this.registerForm.value).subscribe({
        next: (res)=>{
          console.log(res);
          this.router.navigate(['/signin'])
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err.error.mg);
          this.errorMessage=err.error.mg
        },
        complete:()=>{}

      })
    }
    
  }

}
