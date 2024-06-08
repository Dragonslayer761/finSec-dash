import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageAlertComponent } from '../../message-alert/message-alert.component';
import { CustomerService } from '../../customer/customer.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MessageAlertComponent,
  ],
  providers : [CustomerService],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss',
})
export class AddCustomerComponent {
  customerForm: FormGroup;
  addCustomerFailed = false;
  errorMessage = '';
  constructor(private fb: FormBuilder,private customerService : CustomerService, public dilogref: MatDialogRef<AddCustomerComponent>) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.customerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    this.customerForm.markAllAsTouched();
    if(this.customerForm.valid){
      let body  =  this.customerForm.value;
      this.customerService.addNewCustomer(body).subscribe({
        next : (data) =>{
          this.dilogref.close();
        }
      })
    }

  }
  cancelCustomer():void {
    this.customerForm.reset();
    this.dilogref.close()
  }
}
