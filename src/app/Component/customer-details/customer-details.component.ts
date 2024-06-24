import { CustomerService } from './../customer/customer.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [],
  providers:[CustomerService],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {
  private _customerID : string;
  private _customerData:any;
  constructor(private route:ActivatedRoute,private customerService :CustomerService){}
  public get getCustomerName(){
    return this._customerData['name'];
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe({
      next: (data) =>  {
        this._customerID = data['id']
        this.customerService.getSpecificUser(this._customerID).subscribe({
          next : (data) =>{
            this._customerData = data;
          }
        })
      }
    })

  }
}
