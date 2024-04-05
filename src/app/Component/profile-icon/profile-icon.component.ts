import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ProfileService } from './profile.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-icon',
  standalone: true,
  imports: [RouterModule,CommonModule],
  providers : [LoginService],
  templateUrl: './profile-icon.component.html',
  styleUrl: './profile-icon.component.scss'
})
export class ProfileIconComponent {
  profileSettings : string[] =[];
  constructor(private loginService : LoginService,private profileService : ProfileService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.profileService.getProfileSetting().subscribe({
      next : data => {
       this.profileSettings = data['settings'];
      },
      error : err => {
        console.log(err);
      }
    })
  }
  logout(){
    this.loginService.logout();
  }
}
