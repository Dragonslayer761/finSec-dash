import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ProfileIconComponent } from '../profile-icon/profile-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,MatIconModule,ProfileIconComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   // this.router.navigate(['/dashboard'])
  }
}
