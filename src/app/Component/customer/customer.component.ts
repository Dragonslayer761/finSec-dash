import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Customer } from '../../Interface/interface.model';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CustomerService } from './customer.service';
import { AddCustomerComponent } from '../dialog/add-customer/add-customer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatIcon,
  ],
  providers: [CustomerService],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('testDilog', { static: true }) testDilog: TemplateRef<any>;

  customerList: Customer[];
  displayHeader: string[];
  dataSource: MatTableDataSource<Customer>;
  constructor(
    public dilog: MatDialog,
    private customerService: CustomerService,
    private routes: Router,
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllCustomer();
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   // this.dataSource.sort = this.sort;
  }
  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe({
      next: (data) => {
        this.customerList = data;
        this.dataSource = new MatTableDataSource<Customer>(this.customerList);
        this.dataSource.sort = this.sort;
        this.displayHeader = Object.keys(this.customerList[0]).filter(data => data != 'id');
      },
      error: (err) => {

      },
      complete: () => {

      },
    });
  }
  addCustomer() {
    const dilogRef = this.dilog.open(AddCustomerComponent);
    dilogRef.afterClosed().subscribe(data => {
      this.getAllCustomer()
    })
  }
  getCustomerDetails(row){
    console.log("details",row)
    this.routes.navigate(['/home/showCustomer',row.id])
  }
}
