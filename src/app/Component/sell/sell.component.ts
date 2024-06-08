import { Component } from '@angular/core';
import { SalesCardComponent } from '../sales-card/sales-card.component';
import { SaleService } from './sale.service';
import { CommonModule } from '@angular/common';

const productDetails = [
  {
    id:'1',
    productTypeName:'Health insurance',
    productTypeDescription : 'health insurance protects your family from illness',
    descriptionImage : "health"
  },
  {
    id:'2',
    productTypeName:'Life insurance',
    productTypeDescription : 'health insurance protects your family from illness'
  },
  {
    id:'3',
    productTypeName:'Motor insurance',
    productTypeDescription : 'health insurance protects your family from illness'
  },
  {
    id:'4',
    productTypeName:'Travel insurance',
    productTypeDescription : 'health insurance protects your family from illness'
  },
  {
    id:'5',
    productTypeName:'ULIP',
    productTypeDescription : 'health insurance protects your family from illness'
  },
];

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [SalesCardComponent,CommonModule],
  providers : [SaleService],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss'
})
export class SellComponent {
  productList:any[];
  constructor(private saleService : SaleService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productList = productDetails;
  }
  getAllProduct():void{
    this.saleService.getAllProduct().subscribe({
      next : (data) => {

      },
      error : (error) => {

      }
    })
  }
}
