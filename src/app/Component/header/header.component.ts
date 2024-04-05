import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileIconComponent } from '../profile-icon/profile-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,ProfileIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerList:string[] = [];
  ngOnInit(){
    this.headerList = ['dashboard','policy','sell','reports'];
  }
}
