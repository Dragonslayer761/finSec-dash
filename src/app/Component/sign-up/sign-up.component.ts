import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signupForm!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signupForm = this.fb.group({
      name : ['',Validators.required],
      email : ['',Validators.email,Validators.required],
      userName :  ['',Validators.required],
      passWord: ['',Validators.required]
    });
  }
  onSubmit(){
    console.log(this.signupForm)
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }
}
