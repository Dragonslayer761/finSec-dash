import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MessageAlertComponent } from '../message-alert/message-alert.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule,MessageAlertComponent],
  providers: [LoginService, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginFailed: boolean;
  loginFailedMsg : string;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loginService
      .login(
        this.loginForm.get('userName')?.value,
        this.loginForm.get('passWord')?.value
      )
      .subscribe({
        next: (data): void => {
          if (data['__successmsg__']) {

            this.loginService.setLoggedInUser = true;
            localStorage.setItem('token', data['token']);
            this.routes.navigate(['/home/dashboard']);
          }
        },
        error: (err) => {
         if(err.error['status'] === 'fail' || err.status === 0){
          this.loginFailed = true;
          this.loginFailedMsg = err.error['message'] || err.message;
         }
        },
        complete: () => {},
      });
  }
}
