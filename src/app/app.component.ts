import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider'
import { LoginComponent } from './Component/login/login.component';
import { LoginSkeletonComponent } from './Component/login-skeleton/login-skeleton.component';
import { LoginService } from './Component/login/login.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,MatButtonModule, MatDividerModule, MatIconModule,LoginSkeletonComponent,CommonModule],
    providers :[LoginService]
})
export class AppComponent {
  title = 'insurance_dashboard';
  loggedInUser:boolean = false;
  constructor(private loginService :LoginService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginService.getLoggedInUser.subscribe((data)=>{
      this.loggedInUser = data;
    })
  }
}
