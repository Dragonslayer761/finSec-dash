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
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('testDilog', { static: true }) testDilog:TemplateRef<any>;

  customerList: Customer[];
  displayHeader: string[];
  dataSource: MatTableDataSource<Customer>;
  constructor(public dilog: MatDialog) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.customerList = [
      {
        firstname: 'subham',
        lastname: 'chowdhury',
        email: 'sc@gc.com',
        username: 'subc',
      },
      {
        firstname: 'Debleena',
        lastname: 'Biswas',
        email: 'db@gc.com',
        username: 'debi',
      },
    ];
    this.displayHeader = Object.keys(this.customerList[0]);
    console.log(this.displayHeader);
    this.dataSource = new MatTableDataSource<Customer>(this.customerList);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.dataSource.sort = this.sort;
  }
  addCustomer() {
    this.dilog.open(this.testDilog);
  }
}
