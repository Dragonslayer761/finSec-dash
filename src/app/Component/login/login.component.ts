import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { authGuard } from '../../Gaurd/auth.guard';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  providers:[authGuard],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private fb :  FormBuilder,private routes:Router,private loginService : LoginService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = this.fb.group({
      userName : ['',Validators.required],
      passWord : ['',Validators.required]
    })
  }

  onSubmit(){
    this.loginService.login(this.loginForm.get('userName')?.value,this.loginForm.get('passWord')?.value);
    this.routes.navigate(['/home/dashboard'])
  }
}
