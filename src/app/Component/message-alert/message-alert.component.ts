import { Component, Input, input } from '@angular/core';
import { MessageAlertService } from './message-alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-alert',
  standalone: true,
  imports: [CommonModule],
  providers : [MessageAlertService],
  templateUrl: './message-alert.component.html',
  styleUrl: './message-alert.component.scss'
})
export class MessageAlertComponent {
  @Input() message:string;
  @Input() type:string;

  constructor(private messageService : MessageAlertService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
