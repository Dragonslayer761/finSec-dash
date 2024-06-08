import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-sales-card',
  standalone: true,
  imports: [],
  templateUrl: './sales-card.component.html',
  styleUrl: './sales-card.component.scss'
})
export class SalesCardComponent {
  @Input() header:string;
  @Input() description:string;

}
