import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SignupService } from './signup.service';
import { MessageAlertComponent } from '../message-alert/message-alert.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule,MessageAlertComponent],
  providers: [SignupService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signupForm!: FormGroup;
  signupfailed:boolean =false;
  errorMessage : string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signUpService: SignupService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
    });
  }
  onSubmit() {
    let formData = this.signupForm.value;
    this.signUpService
      .signupNewUser(
        formData.name,
        formData.email,
        formData.userName,
        formData.passWord
      )
      .subscribe({
        next: (data): void => {
          this.signupForm.reset();
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          this.signupfailed = true;
          this.errorMessage = error['error']['_err'];
        },
      });
  }
  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
