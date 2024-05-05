import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ProfileService } from './profile.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-icon',
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [LoginService],
  templateUrl: './profile-icon.component.html',
  styleUrl: './profile-icon.component.scss',
})
export class ProfileIconComponent {
  profileSettings: string[] = [];
  userDetails: object;
  nameInitial = '';
  constructor(
    private loginService: LoginService,
    private profileService: ProfileService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.profileService.getProfileSetting().subscribe({
      next: (data) => {
        this.initializeProfileSetting(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  initializeProfileSetting(data: object): void {
    this.profileSettings = data['settings'];
    this.userDetails = data['user'];
    this.nameInitial =
      this.userDetails['firstname'][0] + this.userDetails['lastname'][0];
    this.nameInitial.toUpperCase();
  }
  logout():void {
    this.loginService.logout();
  }
}
