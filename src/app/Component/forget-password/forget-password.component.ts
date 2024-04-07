import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  forgotForm : FormGroup;
  passowordForm :FormGroup;
  userExist : boolean = false;
  passwordNotMatch : boolean = false;
  constructor(private fb : FormBuilder,private loginService : LoginService, private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.forgotForm = this.fb.group({
      username: ['', Validators.required]
    });
    this.passowordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword : ['',Validators.required]
    });
  }
  enterUsername(){
    let body = {
      username : this.forgotForm.get('username').value
    }
    this.loginService.forgetPasswordUsername(body).subscribe(
      {
        next:data =>{
          if(data['userExist']){
            this.userExist = data['changePassword'];
          }
        },
        error : err => {
          console.log(err);
        }
      }
    )
  }
  enterPassword(){
    if(this.passowordForm.get('newPassword').value === this.passowordForm.get('newPassword').value){
      let body ={
        password : this.passowordForm.get('newPassword').value,
        username : this.forgotForm.get('username').value
      }
      this.loginService.enternewPassword(body).subscribe({
        next : data => {
          this.router.navigate(['/auth/login']);
        },
        error : err => {

        }
      })
    }else{
      this.passwordNotMatch = true
    }

  }
}
